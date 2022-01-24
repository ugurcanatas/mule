const { exec } = require("child_process");
const { exit } = require("process");
const {
  SCRIPT_PREFIX,
  IOS_RUNTIME_PROPS,
  IOS_DEVICE_PROPS,
} = require("../constants");

const iosRuntimeList = () => {
  return new Promise((resolve, reject) => {
    exec(`sh ${SCRIPT_PREFIX}runtime_list_ios.sh`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
        exit;
      } else {
        if (stdout) {
          const { runtimes } = JSON.parse(stdout);
          resolve({
            ...IOS_RUNTIME_PROPS,
            choices: runtimes.map((runtime) => ({
              key: runtime.identifier,
              name: runtime.name,
              value: runtime.identifier,
            })),
          });
        }
      }
    });
  });
};

const iosEmulatorList = (runtimeKey) => {
  return new Promise((resolve, reject) => {
    exec(`sh ${SCRIPT_PREFIX}emu_list_ios.sh`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
        exit;
      } else {
        if (stdout) {
          const { devices } = JSON.parse(stdout);

          const bootedDevices = devices[runtimeKey].filter(
            (v) => v.state !== "Shutdown"
          );
          const offDevices = devices[runtimeKey]
            .filter((v) => v.state !== "Booted")
            .sort((a, b) => (a.name < b.name ? 1 : -1));

          const sortedList = [...bootedDevices, ...offDevices];

          resolve({
            ...IOS_DEVICE_PROPS,
            choices: sortedList.map((device) => ({
              key: device.udid,
              name: `${device.name} -> (${device.state})`,
              value: JSON.stringify({
                deviceName: device.name,
                deviceUDID: device.udid,
                deviceState: device.state,
              }),
            })),
          });
        }
      }
    });
  });
};

const iosDeviceAction = (flag, udid, state) => {
  console.log("IOS DEVICE ACTION", flag, udid, state);
  exec(
    //`sh ${SCRIPT_PREFIX}options_ios_device.sh -${flag} ${udid}`,
    `osascript ${SCRIPT_PREFIX}ios/boot.applescript ${udid} ${state}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        exit;
      } else {
        if (stdout) {
          console.log("STDOUT", stdout);
        }
      }
    }
  );
};

module.exports = {
  iosRuntimeList,
  iosEmulatorList,
  iosDeviceAction,
};

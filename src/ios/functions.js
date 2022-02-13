const { exec } = require("child_process");
const {
  SCRIPT_PREFIX,
  SCRIPT_PREFIX_IOS,
  IOS_RUNTIME_PROPS,
  IOS_DEVICE_PROPS,
} = require("../constants");

const iosRuntimeList = () => {
  return new Promise((resolve, reject) => {
    exec(`sh ${SCRIPT_PREFIX}/runtime_list_ios.sh`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
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
    exec(`sh ${SCRIPT_PREFIX}/emu_list_ios.sh`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
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
  exec(
    `osascript ${SCRIPT_PREFIX_IOS}${flag}.applescript ${udid} ${state}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      if (stdout) {
        process.stdout.write(stdout);
      }
      if (stderr) {
        process.stderr.write(stderr);
      }
    }
  );
};

module.exports = {
  iosRuntimeList,
  iosEmulatorList,
  iosDeviceAction,
};

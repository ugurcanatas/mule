const inquirer = require("inquirer");
const { exec } = require("child_process");
const { exit } = require("process");
const { SCRIPT_PREFIX } = require("../constants");

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
            type: "list",
            name: "ios_runtime",
            message: "Select an IOS Runtime",
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
            type: "list",
            name: "ios_device",
            message: "Select an IOS Device",
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

module.exports = {
  iosRuntimeList,
  iosEmulatorList,
};

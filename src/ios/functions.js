const { exec } = require('child_process');
const {
  SCRIPT_PREFIX,
  SCRIPT_PREFIX_IOS,
  IOS_RUNTIME_PROPS,
  IOS_DEVICE_PROPS
} = require('../constants');
const { Spinner } = require('../utils/spinners');

const spinner = new Spinner();

const iosRuntimeList = () =>
  new Promise((resolve, reject) => {
    spinner.setMessage('Getting runtime environments').startSpinner();
    exec(`sh ${SCRIPT_PREFIX}/runtime_list_ios.sh`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        if (stderr) {
          process.stderr.write(stderr);
          return;
        }
        const { runtimes } = JSON.parse(stdout);
        resolve({
          ...IOS_RUNTIME_PROPS,
          choices: runtimes.map(runtime => ({
            key: runtime.identifier,
            name: runtime.name,
            value: runtime.identifier
          }))
        });
        spinner.stopSpinner();
      }
    });
  });

const iosEmulatorList = runtimeKey =>
  new Promise((resolve, reject) => {
    spinner.setMessage('Finding IOS simulators').startSpinner();
    exec(`sh ${SCRIPT_PREFIX}/emu_list_ios.sh`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        if (stderr) {
          process.stderr.write(stderr);
          return;
        }
        const { devices } = JSON.parse(stdout);

        const bootedDevices = devices[runtimeKey].filter(v => v.state !== 'Shutdown');
        const offDevices = devices[runtimeKey]
          .filter(v => v.state !== 'Booted')
          .sort((a, b) => (a.name < b.name ? 1 : -1));

        const sortedList = [...bootedDevices, ...offDevices];
        resolve({
          ...IOS_DEVICE_PROPS,
          choices: sortedList.map(device => ({
            key: device.udid,
            name: `\x1b[33m${device.name} ↦ (${device.state})\x1b[89m`,
            value: JSON.stringify({
              deviceName: device.name,
              deviceUDID: device.udid,
              deviceState: device.state
            })
          }))
        });
        spinner.stopSpinner();
      }
    });
  });

const iosDeviceAction = (type, udid, state, filteredActionResults) => {
  spinner.setMessage(`Starting selected ${type} process`).startSpinner();
  exec(
    `osascript ${SCRIPT_PREFIX_IOS}/${type}.applescript ${udid} ${state} ${filteredActionResults}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      if (stderr) {
        process.stderr.write(stderr);
      }
      process.stdout.write(stdout);
    }
  );
  spinner.stopSpinner();
};

module.exports = {
  iosRuntimeList,
  iosEmulatorList,
  iosDeviceAction
};

const { exec } = require('child_process');
const { createSortedEmulatorList } = require('./utils');
const {
  SCRIPT_PREFIX,
  SCRIPT_PREFIX_IOS,
  IOS_RUNTIME_PROPS,
  IOS_DEVICE_PROPS
} = require('../constants');
const { Spinner } = require('../utils/spinners');

const spinner = new Spinner();

const errorHandler = (reject, error) => {
  spinner.stopSpinner();
  reject(error);
  console.error(error);
};

const iosRuntimeList = (scriptPrefix = SCRIPT_PREFIX) =>
  new Promise((resolve, reject) => {
    spinner.setMessage('Getting runtime environments').startSpinner();
    exec(`sh ${scriptPrefix}/runtime_list_ios.sh`, (err, stdout, stderr) => {
      if (err || stderr) {
        errorHandler(reject, err || stderr);
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
    });
  });

const iosEmulatorList = runtimeKey =>
  new Promise((resolve, reject) => {
    spinner.setMessage('Finding IOS simulators').startSpinner();
    exec(`sh ${SCRIPT_PREFIX}/emu_list_ios.sh`, (err, stdout, stderr) => {
      if (err || stderr) {
        errorHandler(reject, err);
        return;
      }
      const { devices } = JSON.parse(stdout);
      const sortedList = createSortedEmulatorList(devices, runtimeKey);

      resolve({
        ...IOS_DEVICE_PROPS,
        choices: sortedList.map(device => ({
          key: device.udid,
          name: `${device.name} ↦ (${device.state})`,
          value: {
            deviceName: device.name,
            deviceUDID: device.udid,
            deviceState: device.state
          }
        }))
      });
      spinner.stopSpinner();
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

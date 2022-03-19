const inquirer = require('inquirer');
const { exec } = require('child_process');
const { SCRIPT_PREFIX_ANDROID, SCRIPT_PREFIX } = require('../constants');

const androidEmulatorList = () => {
  let choices = [];
  return new Promise((resolve, reject) => {
    exec(`sh ${SCRIPT_PREFIX}/emu_list_android.sh`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        if (stdout) {
          choices = stdout.split('\n').filter(v => v !== '');
          resolve({
            type: 'list',
            name: 'selectedEmualator',
            message: 'Select an emulator',
            choices
          });
        }
        if (stderr) {
          process.stderr.write(stderr);
        }
      }
    });
  });
};

const androidDebugExec = ({ deviceName, debugTags }) => {
  exec(
    `osascript ${SCRIPT_PREFIX_ANDROID}/debug.applescript ${deviceName} ${debugTags}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
      } else {
        if (stdout) {
          process.stdout.write(stdout);
        }
        if (stderr) {
          process.stderr.write(stderr);
        }
      }
    }
  );
};

const androidLogcatExec = ({ deviceName, logcatTags }) => {
  exec(
    `osascript ${SCRIPT_PREFIX_ANDROID}/logcat.applescript ${deviceName} ${logcatTags}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
      } else {
        if (stdout) {
          process.stdout.write(stdout);
        }
        if (stderr) {
          process.stderr.write(stderr);
        }
      }
    }
  );
};

const androidWipeExec = ({ deviceName }) => {
  exec(
    `osascript ${SCRIPT_PREFIX_ANDROID}/wipe.applescript ${deviceName}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
      } else {
        if (stdout) {
          process.stdout.write(stdout);
        }
        if (stderr) {
          process.stderr.write(stderr);
        }
      }
    }
  );
};

const androidDeviceAction = async (flag, deviceName) => {
  switch (flag) {
    case 'debug': // run emulator with debug
      await inquirer
        .prompt([
          {
            type: 'input',
            name: 'debugTags',
            message: 'Enter debug tags (seperate with comma)\n eg: init,metrics'
          }
        ])
        .then(({ debugTags }) => {
          androidDebugExec({
            deviceName,
            debugTags
          });
        });

      break;
    case 'logcat': // run emulator with logcat
      await inquirer
        .prompt([
          {
            type: 'input',
            name: 'logcatTags',
            message: 'Enter logcat flag(E,V)'
          }
        ])
        .then(({ logcatTags }) => {
          androidLogcatExec({
            deviceName,
            logcatTags
          });
        });

      break;
    case 'wipe':
      androidWipeExec({
        deviceName
      });
      break;

    default:
      break;
  }
};

module.exports = {
  androidEmulatorList,
  androidDeviceAction
};

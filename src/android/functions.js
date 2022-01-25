const inquirer = require("inquirer");
const { exec } = require("child_process");
const { exit } = require("process");
const { SCRIPT_PREFIX_ANDROID,SCRIPT_PREFIX } = require("../constants");

const androidEmulatorList = () => {
  let choices = [];
  return new Promise((resolve, reject) => {
    exec(`sh ${SCRIPT_PREFIX}emu_list_android.sh`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
        exit;
      } else {
        if (stdout) {
          choices = stdout.split("\n").filter((v) => v !== "");
          resolve({
            type: "list",
            name: "selected_emualator",
            message: "Select an emulator",
            choices,
          });
        }
      }
    });
  });
};

const androidDebugExec = ({ device_name, debug_tags }) => {
  exec(
    `osascript ${SCRIPT_PREFIX_ANDROID}debug.applescript ${device_name} ${debug_tags}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        exit;
      } else {
        if (stdout) {
          console.log(stdout, stderr);
        }
      }
    }
  );
};

const androidLogcatExec = ({ device_name, logcat_tags }) => {
  exec(
    `osascript ${SCRIPT_PREFIX_ANDROID}logcat.applescript ${device_name} ${logcat_tags}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        exit;
      } else {
        if (stdout) {
          console.log(stdout, stderr);
        }
      }
    }
  );
};

const androidWipeExec = ({ device_name }) => {
  exec(
    `osascript ${SCRIPT_PREFIX_ANDROID}wipe.applescript ${device_name}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        exit;
      } else {
        if (stdout) {
          console.log(stdout, stderr);
        }
      }
    }
  );
};

const androidDeviceAction = async (flag, device_name) => {
  switch (flag) {
    case "debug": //run emulator with debug
      console.log("Debug Selected");
      const { debug_tags } = await inquirer.prompt([
        {
          type: "input",
          name: "debug_tags",
          message: "Enter debug tags (seperate with comma)\n eg: init,metrics",
        },
      ]);
      androidDebugExec({
        device_name,
        debug_tags,
      });
      break;
    case "logcat": //run emulator with logcat
      console.log("Logcat Selected");
      const { logcat_tags } = await inquirer.prompt([
        {
          type: "input",
          name: "logcat_tags",
          message: "Enter logcat flag(E,V)",
        },
      ]);
      androidLogcatExec({
        device_name,
        logcat_tags,
      });
      break;
    case "wipe":
      androidWipeExec({
        device_name,
      });
      console.log("Wipe Selected", flag, device_name);
      break;

    default:
      break;
  }
};

module.exports = {
  androidEmulatorList,
  androidDeviceAction,
};

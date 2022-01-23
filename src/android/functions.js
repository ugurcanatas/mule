const inquirer = require("inquirer");
const { exec } = require("child_process");
const { exit } = require("process");
const { SCRIPT_PREFIX } = require("../constants");

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
    `osascript ${SCRIPT_PREFIX}applescripts/debug.applescript ${device_name} ${debug_tags}`,
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

const androidLogcatExec = () => {};

const androidDeviceAction = async (flag, device_name) => {
  switch (flag) {
    case "d": //boot script
      console.log("Debug Selected");
      const { debug_tags } = await inquirer.prompt([
        {
          type: "input",
          name: "debug_tags",
          message: "Enter debug tags",
        },
      ]);
      androidDebugExec({
        device_name,
        debug_tags,
      });
      break;

    default:
      break;
  }
  // exec(
  //   `sh ${SCRIPT_PREFIX}options_android_device.sh -${flag} ${udid} debug-all`,
  //   (err, stdout, stderr) => {
  //     if (err) {
  //       console.error(err);
  //       exit;
  //     } else {
  //       if (stdout) {
  //         console.log("Response Android", stdout, stderr);
  //       }
  //     }
  //   }
  // );
};

module.exports = {
  androidEmulatorList,
  androidDeviceAction,
};

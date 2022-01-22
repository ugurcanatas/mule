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

module.exports = {
  androidEmulatorList,
};

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

module.exports = {
  iosRuntimeList,
};

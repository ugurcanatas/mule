const SCRIPT_PREFIX = "./src/shs/";

const MAIN_ACTIONS = ["IOS", "ANDROID"];

const OS_TYPE_Q = {
  type: "list",
  name: "os_type", //key of returned value from inquirer
  message: `Select OS type`,
  choices: MAIN_ACTIONS,
};

module.exports = {
  SCRIPT_PREFIX,
  MAIN_ACTIONS,
  OS_TYPE_Q,
};

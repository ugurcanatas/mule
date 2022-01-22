const SCRIPT_PREFIX = "./src/shs/";

const MAIN_ACTIONS = ["IOS", "ANDROID"];

const OS_TYPE_Q = {
  type: "list",
  name: "os_type", //key of returned value from inquirer
  message: `Select OS type`,
  choices: MAIN_ACTIONS,
};

const IOS_RUNTIME_PROPS = {
  type: "list",
  name: "ios_runtime",
  message: "Select an IOS Runtime",
};

const IOS_DEVICE_PROPS = {
  type: "list",
  name: "ios_device",
  message: "Select an IOS Device",
};

module.exports = {
  SCRIPT_PREFIX,
  MAIN_ACTIONS,
  OS_TYPE_Q,
  IOS_RUNTIME_PROPS,
  IOS_DEVICE_PROPS,
};

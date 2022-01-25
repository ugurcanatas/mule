const {ANDROID_ACTION_CHOICES, SCRIPT_PREFIX_ANDROID} = require("./android");
const {IOS_ACTION_CHOICES, SCRIPT_PREFIX_IOS, IOS_DEVICE_PROPS, IOS_RUNTIME_PROPS} = require("./ios");
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
  SCRIPT_PREFIX_ANDROID,
  SCRIPT_PREFIX_IOS,
  MAIN_ACTIONS,
  OS_TYPE_Q,
  IOS_RUNTIME_PROPS,
  IOS_DEVICE_PROPS,
  IOS_ACTION_CHOICES,
  ANDROID_ACTION_CHOICES,
};

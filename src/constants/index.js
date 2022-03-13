const path = require("path");
const { ANDROID_ACTION_CHOICES } = require("./android");
const {
  IOS_ACTION_CHOICES,
  IOS_DEVICE_PROPS,
  IOS_RUNTIME_PROPS,
  IOS_ACTION_IDENTIFIERS
} = require("./ios");

const SCRIPT_PREFIX = path.resolve(__dirname, "../shs");
const SCRIPT_PREFIX_ANDROID = path.resolve(__dirname, "../shs/android");
const SCRIPT_PREFIX_IOS = path.resolve(__dirname, "../shs/ios");

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
  IOS_ACTION_IDENTIFIERS
};

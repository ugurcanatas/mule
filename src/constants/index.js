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

const IOS_ACTION_CHOICES = [
  {
    key: "boot",
    name: "Boot",
    value: "b",
  },
  {
    key: "shutdown",
    name: "Shutdown",
    value: "s",
  },
  {
    key: "erase",
    name: "Erase",
    value: "e",
  },
  {
    key: "opensim",
    name: "Open simulator & boot",
    value: "o",
  },
];

const ANDROID_ACTION_CHOICES = [
  {
    key: "boot",
    name: "Boot",
    value: "b",
  },
  {
    key: "shutdown",
    name: "Shutdown",
    value: "s",
  },
  {
    key: "erase",
    name: "Erase",
    value: "e",
  },
  {
    key: "opensim",
    name: "Open simulator & boot",
    value: "o",
  },
  {
    key: "debug",
    name: "Open with debug flag",
    value: "d",
  },
  {
    key: "logcat",
    name: "Open with logcat flag",
    value: "l",
  },
];

module.exports = {
  SCRIPT_PREFIX,
  MAIN_ACTIONS,
  OS_TYPE_Q,
  IOS_RUNTIME_PROPS,
  IOS_DEVICE_PROPS,
  IOS_ACTION_CHOICES,
  ANDROID_ACTION_CHOICES,
};

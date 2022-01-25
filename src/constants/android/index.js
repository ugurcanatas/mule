const SCRIPT_PREFIX_ANDROID = "./src/shs/android/";

const ANDROID_ACTION_CHOICES = [
    {
      key: "boot",
      name: "Boot",
      value: "boot",
    },
    {
      key: "shutdown",
      name: "Shutdown",
      value: "shutdown",
    },
    {
      key: "wipe",
      name: "Wipe Data",
      value: "wipe",
    },
    {
      key: "debug",
      name: "Open with debug flag",
      value: "debug",
    },
    {
      key: "logcat",
      name: "Open with logcat flag",
      value: "logcat",
    },
    {
      key: "logcat_standalone",
      name: "Standalone Logcat Window",
      value: "standalone",
    },
  ];

  module.exports = {
      ANDROID_ACTION_CHOICES,
      SCRIPT_PREFIX_ANDROID
  }
const SCRIPT_PREFIX_IOS = "./src/shs/ios/";

const IOS_ACTION_CHOICES = [
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
      key: "erase",
      name: "Erase",
      value: "erase",
    },
  ];

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
    IOS_ACTION_CHOICES,
    SCRIPT_PREFIX_IOS,
    IOS_RUNTIME_PROPS,
    IOS_DEVICE_PROPS
}
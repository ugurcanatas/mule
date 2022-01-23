const inquirer = require("inquirer");
const { androidEmulatorList, androidDeviceAction } = require("./android");
const { iosRuntimeList, iosEmulatorList, iosDeviceAction } = require("./ios");
const { OS_TYPE_Q } = require("./constants");

const pickOsType = () => {
  return OS_TYPE_Q;
};

const pickAction = (type, selected) => {
  const prompts = {
    ios: {
      type: "list",
      name: "action",
      message: `Select a process for ${selected}`,
      choices: [
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
      ],
    },
    android: {
      type: "list",
      name: "action",
      message: `Select a process for ${selected}`,
      choices: [
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
      ],
    },
  };
  return prompts[type];
};

async function main() {
  const { os_type } = await inquirer.prompt([pickOsType()]);
  if (os_type === "IOS") {
    const { ios_runtime } = await inquirer.prompt([await iosRuntimeList()]);
    const { ios_device } = await inquirer.prompt([
      await iosEmulatorList(ios_runtime),
    ]);
    const { deviceName, deviceUDID } = JSON.parse(ios_device);
    const { action } = await inquirer.prompt([pickAction("ios", deviceName)]);
    iosDeviceAction(action, deviceUDID);
  } else {
    const { selected_emualator } = await inquirer.prompt([
      await androidEmulatorList(),
    ]);
    const { action } = await inquirer.prompt([
      pickAction("android", selected_emualator),
    ]);
    console.log("Android Selected with action => ", action);
    androidDeviceAction(action, selected_emualator);
  }
}

main();

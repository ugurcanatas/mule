#!/usr/bin/env node

const inquirer = require("inquirer");
const { androidEmulatorList, androidDeviceAction } = require("./android");
const { iosRuntimeList, iosEmulatorList, iosDeviceAction } = require("./ios");
const {
  OS_TYPE_Q,
  IOS_ACTION_CHOICES,
  ANDROID_ACTION_CHOICES,
} = require("./constants");

const pickOsType = () => {
  return OS_TYPE_Q;
};

const pickAction = (type, selected) => {
  const prompts = {
    ios: {
      type: "list",
      name: "action",
      message: `Select a process for ${selected}`,
      choices: IOS_ACTION_CHOICES,
    },
    android: {
      type: "list",
      name: "action",
      message: `Select a process for ${selected}`,
      choices: ANDROID_ACTION_CHOICES,
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
    const { deviceName, deviceUDID, deviceState } = JSON.parse(ios_device);
    const { action } = await inquirer.prompt([pickAction("ios", deviceName)]);
    iosDeviceAction(action, deviceUDID, deviceState);
  } else {
    const { selected_emualator } = await inquirer.prompt([
      await androidEmulatorList(),
    ]);
    const { action } = await inquirer.prompt([
      pickAction("android", selected_emualator),
    ]);
    androidDeviceAction(action, selected_emualator);
  }
}

main();

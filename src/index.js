#!/usr/bin/env node

const inquirer = require('inquirer');
const { androidEmulatorList, androidDeviceAction } = require('./android');
const { iosRuntimeList, iosEmulatorList, iosDeviceAction } = require('./ios');
const {
  OS_TYPE_Q,
  IOS_ACTION_CHOICES,
  ANDROID_ACTION_CHOICES,
  IOS_ACTION_IDENTIFIERS
} = require('./constants');

const pickOsType = () => OS_TYPE_Q;

const pickAction = (type, selected) => {
  const prompts = {
    ios: {
      type: 'list',
      name: 'action',
      message: `Select a process for ${selected}`,
      choices: IOS_ACTION_CHOICES
    },
    android: {
      type: 'list',
      name: 'action',
      message: `Select a process for ${selected}`,
      choices: ANDROID_ACTION_CHOICES
    }
  };
  return prompts[type];
};

const iosActionFilter = async identifier => {
  let { url } = '';
  switch (identifier) {
    case IOS_ACTION_IDENTIFIERS.CUSTOM_ACTION:
      url = await inquirer.prompt([
        {
          type: 'input',
          name: 'url',
          message: 'URL Input'
        }
      ]);
      return url;
    default:
      break;
  }
};

async function main() {
  const { osType } = await inquirer.prompt([pickOsType()]);
  if (osType === 'IOS') {
    const { iosRuntime } = await inquirer.prompt([await iosRuntimeList()]);
    const { iosDevice } = await inquirer.prompt([await iosEmulatorList(iosRuntime)]);
    const { deviceName, deviceUDID, deviceState } = JSON.parse(iosDevice);
    const {
      action: { type, identifier }
    } = await inquirer.prompt([pickAction('ios', deviceName)]);
    const filteredActionResults = await iosActionFilter(identifier);
    iosDeviceAction(type, deviceUDID, deviceState, filteredActionResults);
  } else {
    const { selectedEmualator } = await inquirer.prompt([await androidEmulatorList()]);
    const { action } = await inquirer.prompt([pickAction('android', selectedEmualator)]);
    androidDeviceAction(action, selectedEmualator);
  }
}

main();

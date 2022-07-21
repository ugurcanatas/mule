#!/usr/bin/env node

import inquirer from 'inquirer';
import { androidEmulatorList, androidDeviceAction } from './android';
import { iosRuntimeList, iosDeviceAction, iosEmulatorList } from './ios';
import {
  OS_TYPE_Q,
  ANDROID_ACTION_CHOICES,
  IOS_ACTION_CHOICES,
  IOS_ACTION_IDENTIFIERS
} from './constants';
import { OS_TYPE_ENUM } from './constants/types';
import { IOS_ANSWERS } from './ios/types';

const pickOsType = () => OS_TYPE_Q;

const pickAction = (type: OS_TYPE_ENUM, selected: string) => {
  const prompts = {
    [OS_TYPE_ENUM.IOS]: {
      type: 'list',
      name: 'action',
      message: `Select a process for ${selected}`,
      choices: IOS_ACTION_CHOICES
    },
    [OS_TYPE_ENUM.ANDROID]: {
      type: 'list',
      name: 'action',
      message: `Select a process for ${selected}`,
      choices: ANDROID_ACTION_CHOICES
    }
  };
  return prompts[type];
};

const iosActionFilter = async (identifier: string) => {
  let url = { url: '' };
  switch (identifier) {
    case IOS_ACTION_IDENTIFIERS.CUSTOM_ACTION:
      url = await inquirer.prompt<{ url: string }>([
        {
          type: 'input',
          name: 'url',
          message: 'URL Input'
        }
      ]);
      return url.url;
    default:
      return null;
  }
};

/**
 * Filtering actions depending on user selection
 * IOS | ANDROID
 */
const actionFilter = {
  [OS_TYPE_ENUM.IOS]: async () => {
    // Pick IOS Runtimes eg: IOS, MacOS, tvOS etc.
    const { iosRuntime } = await inquirer.prompt<Pick<IOS_ANSWERS, 'iosRuntime'>>([
      await iosRuntimeList()
    ]);
    // Pick available emulators
    // TODO: Change the naming to emulatorDevice
    const { iosDevice } = await inquirer.prompt<Pick<IOS_ANSWERS, 'iosDevice'>>([
      await iosEmulatorList<string>(iosRuntime)
    ]);
    const { deviceName, deviceState, deviceUDID } = iosDevice;

    // Get selected predefined action type such as DEFAULT action or CUSTOM action
    // boot, wipe, send link etc.
    const {
      action: { identifier, type }
    } = await inquirer.prompt<{
      action: {
        type: string;
        identifier: string;
      };
    }>([pickAction(OS_TYPE_ENUM.IOS, deviceName)]);

    const filteredActionResults = await iosActionFilter(identifier);
    iosDeviceAction(type, deviceUDID, deviceState, filteredActionResults ?? '');
  },
  [OS_TYPE_ENUM.ANDROID]: async () => {
    const { selectedEmulator } = await inquirer.prompt<{ selectedEmulator: string }>([
      await androidEmulatorList()
    ]);

    const { action } = await inquirer.prompt<{ action: string }>([
      pickAction(OS_TYPE_ENUM.ANDROID, selectedEmulator)
    ]);

    androidDeviceAction({ flag: action, deviceName: selectedEmulator });
  }
};

async function main() {
  const { osType } = await inquirer.prompt<Pick<IOS_ANSWERS, 'osType'>>([pickOsType()]);

  // call filter object rather than if / else statement
  await actionFilter[osType]();
}

main();

#!/usr/bin/env node

import inquirer, { Answers, DynamicQuestionProperty, QuestionCollection } from 'inquirer';
// import { androidEmulatorList, androidDeviceAction } from './android';
import { iosRuntimeList, iosDeviceAction, iosEmulatorList } from './ios';
import {
  OS_TYPE_Q,
  ANDROID_ACTION_CHOICES,
  IOS_ACTION_CHOICES,
  IOS_ACTION_IDENTIFIERS,
  MAIN_ACTIONS
} from './constants';
import { TYPE_GENERIC_PROMPT, OS_TYPE_ENUM, GenericPromptResult } from './constants/types';
import { GenericIOS, GenericIOSPromiseFunction, IOS_ANSWERS } from './ios/types';
// import { TYPE_GENERIC_PROMPT } from './constants/types';

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

// const iosActionFilter = async identifier => {
//   let { url } = '';
//   switch (identifier) {
//     case IOS_ACTION_IDENTIFIERS.CUSTOM_ACTION:
//       url = await inquirer.prompt([
//         {
//           type: 'input',
//           name: 'url',
//           message: 'URL Input'
//         }
//       ])o;
//       return url;
//     default:
//       break;
//   }
// };

const inquirerWrapper = async <T1 extends string, T2, V, P = 'Promise' | 'Regular'>(
  fn: GenericIOSPromiseFunction<V, P>
) => {
  return await inquirer.prompt<GenericPromptResult<T1, T2>>([fn({})]);
};

const inquirerPromp = async <T extends Answers>(question: QuestionCollection) => {
  return await inquirer.prompt<T>(question);
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

    const {
      action: { identifier, type }
    } = await inquirer.prompt<{
      action: {
        type: string;
        identifier: string;
      };
    }>([pickAction(OS_TYPE_ENUM.IOS, deviceName)]);
    console.log('pickAction :>> ', identifier, type);
  },
  [OS_TYPE_ENUM.ANDROID]: async () => {
    console.log('OS Type Selected Android');
  }
};

async function main() {
  const { osType } = await inquirer.prompt<Pick<IOS_ANSWERS, 'osType'>>([pickOsType()]);

  // call filter object rather than if / else
  await actionFilter[osType]();

  console.log('OS TYPE', osType);

  // if (osType === 'IOS') {
  //   const { iosRuntime } = await inquirer.prompt([await iosRuntimeList()]);
  //   const { iosDevice } = await inquirer.prompt([await iosEmulatorList(iosRuntime)]);
  //   const { deviceName, deviceUDID, deviceState } = iosDevice;
  //   const {
  //     action: { type, identifier }
  //   } = await inquirer.prompt([pickAction('ios', deviceName)]);
  //   const filteredActionResults = await iosActionFilter(identifier);
  //   iosDeviceAction(type, deviceUDID, deviceState, filteredActionResults);
  // } else {
  //   const { selectedEmulator } = await inquirer.prompt([await androidEmulatorList()]);
  //   const { action } = await inquirer.prompt([pickAction('android', selectedEmulator)]);
  //   androidDeviceAction(action, selectedEmulator);
  // }
}

main();

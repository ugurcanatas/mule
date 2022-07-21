import { OS_TYPE_ENUM } from './types';

import path from 'path';
import { ANDROID_ACTION_CHOICES } from './android';
import { IOS_ACTION_CHOICES, IOS_ACTION_IDENTIFIERS } from './ios';
import { QuestionCollection } from 'inquirer';

const SCRIPT_PREFIX = path.resolve(__dirname, '../shs');
const SCRIPT_PREFIX_ANDROID = path.resolve(__dirname, '../shs/android');
const SCRIPT_PREFIX_IOS = path.resolve(__dirname, '../shs/ios');

const MAIN_ACTIONS = [OS_TYPE_ENUM.IOS, OS_TYPE_ENUM.ANDROID];

const OS_TYPE_Q: QuestionCollection = {
  type: 'list',
  name: 'osType', // key of returned value from inquirer
  message: `Select OS type`,
  choices: MAIN_ACTIONS
};

export {
  SCRIPT_PREFIX,
  SCRIPT_PREFIX_ANDROID,
  SCRIPT_PREFIX_IOS,
  MAIN_ACTIONS,
  OS_TYPE_Q,
  IOS_ACTION_CHOICES,
  ANDROID_ACTION_CHOICES,
  IOS_ACTION_IDENTIFIERS
};

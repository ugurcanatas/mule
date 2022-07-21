/**
 * createSortedEmulatorList
 * Types and Interfaces for this function
 * Exporting the function type to get a full tpescript support
 */

import { QuestionCollection } from 'inquirer';
import { OS_TYPE_ENUM } from '../constants/types';

interface GenericIOS<T = {}> {
  name: string;
  state: string;
  udid: string;
  key?: string;
  identifier?: string;
  value?: T;
}
type GenericString = string;
type RuntimeDeviceRecord = Record<
  GenericString,
  Required<Pick<GenericIOS, 'name' | 'state' | 'udid'>>[]
>;

type SortedEmulatorFunctionType = (
  devices: RuntimeDeviceRecord,
  runtimeKey: GenericString
) => Required<Pick<GenericIOS, 'name' | 'state' | 'udid'>>[];

/**
 * createNewDeviceList
 * Types and Interfaces for this function
 */
interface ModifiedDeviceValueObject {
  deviceName: GenericIOS['name'];
  deviceUDID: GenericIOS['udid'];
  deviceState: GenericIOS['state'];
}

type UpdatedDevicesList = Omit<
  GenericIOS<ModifiedDeviceValueObject>,
  Exclude<keyof GenericIOS, 'name' | 'key' | 'value'>
>;

type NewDeviceListFunction = (devices: GenericIOS[]) => UpdatedDevicesList[];

export type GenericQuestionFN<choices> = <T extends string>(
  args?: T
) => Promise<GenericQuestion<choices>>;

export type GenericQuestion<T> = QuestionCollection<{
  question: { choices: T };
}>;

export interface IOS_ANSWERS {
  osType: OS_TYPE_ENUM;
  iosRuntime: string;
  iosDevice: ModifiedDeviceValueObject;
  deviceName: string;
  deviceUDID: string;
  deviceState: string;
}

export enum IOS_ANSWERS_ENUM {
  osType = 'osType',
  iosRuntime = 'iosRuntime',
  iosDevice = 'iosDevice',
  deviceName = 'deviceName',
  deviceUDID = 'deviceUDID',
  deviceState = 'deviceState'
}

export enum IOS_MESSAGES_ENUM {
  osType = 'osType',
  iosRuntime = 'Select an IOS Runtime',
  iosDevice = 'iosDevice',
  deviceName = 'deviceName',
  deviceUDID = 'deviceUDID',
  deviceState = 'deviceState'
}

/**
 * FN Types in ios/functions
 */
export type IOSDeviceActionFn = (
  type: string,
  udid: string,
  state: string,
  filteredActionResults: string
) => void;

export { SortedEmulatorFunctionType, NewDeviceListFunction, GenericIOS, UpdatedDevicesList };

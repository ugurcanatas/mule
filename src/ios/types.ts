/**
 * createSortedEmulatorList
 * Types and Interfaces for this function
 * Exporting the function type to get a full tpescript support
 */

import { TYPE_GENERIC_PROMPT } from '../constants/types';

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

type GenericIOSPromiseFunction<T, V = 'Promise' | 'Regular', G = {}> = (
  args: G
) => V extends 'Promise' ? Promise<TYPE_GENERIC_PROMPT<T>> : TYPE_GENERIC_PROMPT<T>;
type GenericIOSFunction<T> = <args>(args?: args) => TYPE_GENERIC_PROMPT<T>;

export {
  SortedEmulatorFunctionType,
  NewDeviceListFunction,
  GenericIOS,
  UpdatedDevicesList,
  GenericIOSPromiseFunction,
  GenericIOSFunction
};

/**
 * FN Types in ios/functions
 */

export type IOSDeviceActionFn = (
  type: string,
  udid: string,
  state: string,
  filteredActionResults: string
) => void;

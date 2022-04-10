/**
 * createSortedEmulatorList
 * Types and Interfaces for this function
 * Exporting the function type to get a full tpescript support
 */

interface DevicesInRuntime {
  name: string;
  state: string;
  udid: string;
}
type GenericString = string;
type RuntimeDeviceRecord = Record<GenericString, Required<DevicesInRuntime>[]>;

type SortedEmulatorFunctionType = (
  devices: RuntimeDeviceRecord,
  runtimeKey: GenericString
) => Required<DevicesInRuntime>[];

/**
 * createNewDeviceList
 * Types and Interfaces for this function
 */

interface ModifiedDeviceValueObject extends Pick<DevicesInRuntime, keyof DevicesInRuntime> {
  deviceName: DevicesInRuntime['name'];
  deviceUDID: DevicesInRuntime['udid'];
  deviceState: DevicesInRuntime['state'];
}

interface NewSingleDeviceType {
  key: string;
  value: ModifiedDeviceValueObject;
}

type UpdatedDevicesList =
  | Omit<DevicesInRuntime, Exclude<keyof DevicesInRuntime, 'name'>>
  | NewSingleDeviceType;

type NewDeviceListFunction = (devices: DevicesInRuntime[]) => UpdatedDevicesList[];

export { SortedEmulatorFunctionType, NewDeviceListFunction };

import { SortedEmulatorFunctionType, NewDeviceListFunction } from './types';

const createSortedEmulatorList: SortedEmulatorFunctionType = (devices, runtimeKey = '') => {
  const bootedDevices = devices[runtimeKey].filter(v => v.state !== 'Shutdown');
  const offDevices = devices[runtimeKey]
    .filter(v => v.state !== 'Booted')
    .sort((a, b) => (a.name < b.name ? 1 : -1));

  return [...bootedDevices, ...offDevices];
};

const createNewDeviceList: NewDeviceListFunction = devices =>
  devices.map(device => ({
    key: device.udid,
    name: `${device.name} ↦ (${device.state})`,
    value: {
      deviceName: device.name,
      deviceUDID: device.udid,
      deviceState: device.state
    }
  }));

export { createSortedEmulatorList, createNewDeviceList };

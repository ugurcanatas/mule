const createSortedEmulatorList = (devices = [], runtimeKey = '') => {
  const bootedDevices = devices[runtimeKey].filter(v => v.state !== 'Shutdown');
  const offDevices = devices[runtimeKey]
    .filter(v => v.state !== 'Booted')
    .sort((a, b) => (a.name < b.name ? 1 : -1));

  return [...bootedDevices, ...offDevices];
};

module.exports = {
  createSortedEmulatorList
};

const runtimeListsMockData = [
  {
    key: 'com.apple.CoreSimulator.SimRuntime.iOS-15-2',
    name: 'iOS 15.2',
    value: 'com.apple.CoreSimulator.SimRuntime.iOS-15-2'
  },
  {
    key: 'com.apple.CoreSimulator.SimRuntime.tvOS-15-2',
    name: 'tvOS 15.2',
    value: 'com.apple.CoreSimulator.SimRuntime.tvOS-15-2'
  },
  {
    key: 'com.apple.CoreSimulator.SimRuntime.watchOS-8-3',
    name: 'watchOS 8.3',
    value: 'com.apple.CoreSimulator.SimRuntime.watchOS-8-3'
  }
];

const devices = {
  'com.apple.CoreSimulator.SimRuntime.iOS-15-0': [
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/55C81CFF-8F73-4BB8-9189-3342E36A7A37/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/55C81CFF-8F73-4BB8-9189-3342E36A7A37',
      udid: '55C81CFF-8F73-4BB8-9189-3342E36A7A37',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-8',
      state: 'Shutdown',
      name: 'iPhone 8'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/9EC5E1B3-62B6-4836-8C6E-3D56831A786F/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/9EC5E1B3-62B6-4836-8C6E-3D56831A786F',
      udid: '9EC5E1B3-62B6-4836-8C6E-3D56831A786F',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-8-Plus',
      state: 'Shutdown',
      name: 'iPhone 8 Plus'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/E7382F46-E08C-43CC-AAAF-1B5B96BF470E/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/E7382F46-E08C-43CC-AAAF-1B5B96BF470E',
      udid: 'E7382F46-E08C-43CC-AAAF-1B5B96BF470E',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-11',
      state: 'Shutdown',
      name: 'iPhone 11'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/726A180F-5FDC-4CA1-9DCC-9461A9C64704/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/726A180F-5FDC-4CA1-9DCC-9461A9C64704',
      udid: '726A180F-5FDC-4CA1-9DCC-9461A9C64704',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-11-Pro',
      state: 'Shutdown',
      name: 'iPhone 11 Pro'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/49124539-65B9-4F1F-A530-B0E9ADF5986C/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/49124539-65B9-4F1F-A530-B0E9ADF5986C',
      udid: '49124539-65B9-4F1F-A530-B0E9ADF5986C',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-11-Pro-Max',
      state: 'Shutdown',
      name: 'iPhone 11 Pro Max'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/918F584C-2D50-4381-8E6C-FC368EDD321D/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/918F584C-2D50-4381-8E6C-FC368EDD321D',
      udid: '918F584C-2D50-4381-8E6C-FC368EDD321D',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-SE--2nd-generation-',
      state: 'Shutdown',
      name: 'iPhone SE (2nd generation)'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/4C790C91-C36D-4A7C-BC44-150EAA971FA2/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/4C790C91-C36D-4A7C-BC44-150EAA971FA2',
      udid: '4C790C91-C36D-4A7C-BC44-150EAA971FA2',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-12-mini',
      state: 'Shutdown',
      name: 'iPhone 12 mini'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/4D5343F7-B50E-451C-AA9E-2B85523201C4/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/4D5343F7-B50E-451C-AA9E-2B85523201C4',
      udid: '4D5343F7-B50E-451C-AA9E-2B85523201C4',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-12',
      state: 'Shutdown',
      name: 'iPhone 12'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/1D190C8E-583D-459B-9E0A-418EDF49A74A/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/1D190C8E-583D-459B-9E0A-418EDF49A74A',
      udid: '1D190C8E-583D-459B-9E0A-418EDF49A74A',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-12-Pro',
      state: 'Shutdown',
      name: 'iPhone 12 Pro'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/BE63D476-B366-411E-976E-AB4541CE2D23/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/BE63D476-B366-411E-976E-AB4541CE2D23',
      udid: 'BE63D476-B366-411E-976E-AB4541CE2D23',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-12-Pro-Max',
      state: 'Shutdown',
      name: 'iPhone 12 Pro Max'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/8278CC9F-6AC7-4FE8-95A9-0010142B2D29/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/8278CC9F-6AC7-4FE8-95A9-0010142B2D29',
      udid: '8278CC9F-6AC7-4FE8-95A9-0010142B2D29',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-13-Pro',
      state: 'Shutdown',
      name: 'iPhone 13 Pro'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/1FA51E53-5E5F-48AC-96BD-E8A132BEB3D7/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/1FA51E53-5E5F-48AC-96BD-E8A132BEB3D7',
      udid: '1FA51E53-5E5F-48AC-96BD-E8A132BEB3D7',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-13-Pro-Max',
      state: 'Shutdown',
      name: 'iPhone 13 Pro Max'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/1BA226AC-E390-4BC7-9B5F-EE8FF220684D/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/1BA226AC-E390-4BC7-9B5F-EE8FF220684D',
      udid: '1BA226AC-E390-4BC7-9B5F-EE8FF220684D',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-13-mini',
      state: 'Shutdown',
      name: 'iPhone 13 mini'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/9E36C7B2-F7CB-44A0-9B98-3358BDCD376E/data',
      dataPathSize: 1416056832,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/9E36C7B2-F7CB-44A0-9B98-3358BDCD376E',
      udid: '9E36C7B2-F7CB-44A0-9B98-3358BDCD376E',
      isAvailable: false,
      logPathSize: 475136,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-13',
      state: 'Shutdown',
      name: 'iPhone 13'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/81905639-0F77-41E9-BE71-22CCA375BBBF/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/81905639-0F77-41E9-BE71-22CCA375BBBF',
      udid: '81905639-0F77-41E9-BE71-22CCA375BBBF',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPod-touch--7th-generation-',
      state: 'Shutdown',
      name: 'iPod touch (7th generation)'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/E4376B9A-85CB-4C54-B2A8-51618AAF4A9C/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/E4376B9A-85CB-4C54-B2A8-51618AAF4A9C',
      udid: 'E4376B9A-85CB-4C54-B2A8-51618AAF4A9C',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPad-Pro--9-7-inch-',
      state: 'Shutdown',
      name: 'iPad Pro (9.7-inch)'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/0A576343-AACD-4888-9E6C-0C32CEB9647A/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/0A576343-AACD-4888-9E6C-0C32CEB9647A',
      udid: '0A576343-AACD-4888-9E6C-0C32CEB9647A',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPad-9th-generation',
      state: 'Shutdown',
      name: 'iPad (9th generation)'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/EDC599C3-9EA2-4B9E-AB79-F4DE02960ECE/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/EDC599C3-9EA2-4B9E-AB79-F4DE02960ECE',
      udid: 'EDC599C3-9EA2-4B9E-AB79-F4DE02960ECE',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPad-Air--4th-generation-',
      state: 'Shutdown',
      name: 'iPad Air (4th generation)'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/6948C69D-6EA9-4F43-9949-E1797BBE8FE0/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/6948C69D-6EA9-4F43-9949-E1797BBE8FE0',
      udid: '6948C69D-6EA9-4F43-9949-E1797BBE8FE0',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPad-Pro-11-inch-3rd-generation',
      state: 'Shutdown',
      name: 'iPad Pro (11-inch) (3rd generation)'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/923EE2FC-220F-4AB0-8065-4FCB65456462/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/923EE2FC-220F-4AB0-8065-4FCB65456462',
      udid: '923EE2FC-220F-4AB0-8065-4FCB65456462',
      isAvailable: false,
      deviceTypeIdentifier:
        'com.apple.CoreSimulator.SimDeviceType.iPad-Pro-12-9-inch-5th-generation',
      state: 'Shutdown',
      name: 'iPad Pro (12.9-inch) (5th generation)'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/3C3962F9-8EE5-4280-9E4A-1828EF8825D4/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/3C3962F9-8EE5-4280-9E4A-1828EF8825D4',
      udid: '3C3962F9-8EE5-4280-9E4A-1828EF8825D4',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPad-mini-6th-generation',
      state: 'Shutdown',
      name: 'iPad mini (6th generation)'
    }
  ],
  'com.apple.CoreSimulator.SimRuntime.iOS-14-5': [
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/523A1B89-7BDD-41A4-A57F-6390A674FDE8/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/523A1B89-7BDD-41A4-A57F-6390A674FDE8',
      udid: '523A1B89-7BDD-41A4-A57F-6390A674FDE8',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-8',
      state: 'Shutdown',
      name: 'iPhone 8'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/A2CCDEA3-ECC6-4C35-95FD-2E381EDFF462/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/A2CCDEA3-ECC6-4C35-95FD-2E381EDFF462',
      udid: 'A2CCDEA3-ECC6-4C35-95FD-2E381EDFF462',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-8-Plus',
      state: 'Shutdown',
      name: 'iPhone 8 Plus'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/082606E8-206A-4D97-97D6-937B54B51BD3/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/082606E8-206A-4D97-97D6-937B54B51BD3',
      udid: '082606E8-206A-4D97-97D6-937B54B51BD3',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-11',
      state: 'Shutdown',
      name: 'iPhone 11'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/7C4F1C90-70FC-48FE-9DF9-9374EF6F4E65/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/7C4F1C90-70FC-48FE-9DF9-9374EF6F4E65',
      udid: '7C4F1C90-70FC-48FE-9DF9-9374EF6F4E65',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-11-Pro',
      state: 'Shutdown',
      name: 'iPhone 11 Pro'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/3EE0E43A-3096-45A3-935C-85E8ECE59067/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/3EE0E43A-3096-45A3-935C-85E8ECE59067',
      udid: '3EE0E43A-3096-45A3-935C-85E8ECE59067',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-11-Pro-Max',
      state: 'Shutdown',
      name: 'iPhone 11 Pro Max'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/59C80A1E-866A-47E0-879B-47F7F6F7B8FE/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/59C80A1E-866A-47E0-879B-47F7F6F7B8FE',
      udid: '59C80A1E-866A-47E0-879B-47F7F6F7B8FE',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-SE--2nd-generation-',
      state: 'Shutdown',
      name: 'iPhone SE (2nd generation)'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/146895D7-1887-49A9-B204-BB703D3A01B9/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/146895D7-1887-49A9-B204-BB703D3A01B9',
      udid: '146895D7-1887-49A9-B204-BB703D3A01B9',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-12-mini',
      state: 'Shutdown',
      name: 'iPhone 12 mini'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/D014F67F-8804-4FD2-AECB-DE1A5634B00C/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/D014F67F-8804-4FD2-AECB-DE1A5634B00C',
      udid: 'D014F67F-8804-4FD2-AECB-DE1A5634B00C',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-12',
      state: 'Shutdown',
      name: 'iPhone 12'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/89F235A5-BC4E-4F01-B808-147E6C8CBAE2/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/89F235A5-BC4E-4F01-B808-147E6C8CBAE2',
      udid: '89F235A5-BC4E-4F01-B808-147E6C8CBAE2',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-12-Pro',
      state: 'Shutdown',
      name: 'iPhone 12 Pro'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/5E9EAC64-7490-49D7-AF6E-03A8C18DAB68/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/5E9EAC64-7490-49D7-AF6E-03A8C18DAB68',
      udid: '5E9EAC64-7490-49D7-AF6E-03A8C18DAB68',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-12-Pro-Max',
      state: 'Shutdown',
      name: 'iPhone 12 Pro Max'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/CB3F9FD6-9652-4DA5-9DA4-2615DA81B1D0/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/CB3F9FD6-9652-4DA5-9DA4-2615DA81B1D0',
      udid: 'CB3F9FD6-9652-4DA5-9DA4-2615DA81B1D0',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPod-touch--7th-generation-',
      state: 'Shutdown',
      name: 'iPod touch (7th generation)'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/E3AED86F-7442-4D6D-86B3-DA8474993F5C/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/E3AED86F-7442-4D6D-86B3-DA8474993F5C',
      udid: 'E3AED86F-7442-4D6D-86B3-DA8474993F5C',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPad-Pro--9-7-inch-',
      state: 'Shutdown',
      name: 'iPad Pro (9.7-inch)'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/F86278AE-4F20-48A7-A6A7-9E2C316483E1/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/F86278AE-4F20-48A7-A6A7-9E2C316483E1',
      udid: 'F86278AE-4F20-48A7-A6A7-9E2C316483E1',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPad--8th-generation-',
      state: 'Shutdown',
      name: 'iPad (8th generation)'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/7D30D2D5-19E0-48E9-8FC0-4E12276E7EF6/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/7D30D2D5-19E0-48E9-8FC0-4E12276E7EF6',
      udid: '7D30D2D5-19E0-48E9-8FC0-4E12276E7EF6',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPad-Air--4th-generation-',
      state: 'Shutdown',
      name: 'iPad Air (4th generation)'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/4BA773D9-AB32-4CF2-A42D-A04CBEFE09D5/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/4BA773D9-AB32-4CF2-A42D-A04CBEFE09D5',
      udid: '4BA773D9-AB32-4CF2-A42D-A04CBEFE09D5',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.iPad-Pro-11-inch-3rd-generation',
      state: 'Shutdown',
      name: 'iPad Pro (11-inch) (3rd generation)'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/F73149AF-BD72-4BD0-9F86-9BCBE96F269D/data',
      dataPathSize: 13312000,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/F73149AF-BD72-4BD0-9F86-9BCBE96F269D',
      udid: 'F73149AF-BD72-4BD0-9F86-9BCBE96F269D',
      isAvailable: false,
      deviceTypeIdentifier:
        'com.apple.CoreSimulator.SimDeviceType.iPad-Pro-12-9-inch-5th-generation',
      state: 'Shutdown',
      name: 'iPad Pro (12.9-inch) (5th generation)'
    }
  ],
  'com.apple.CoreSimulator.SimRuntime.watchOS-7-1': [
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/A47BB8CC-61B9-4B79-9377-769A3F3259A9/data',
      dataPathSize: 0,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/A47BB8CC-61B9-4B79-9377-769A3F3259A9',
      udid: 'A47BB8CC-61B9-4B79-9377-769A3F3259A9',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.Apple-Watch-Series-5-40mm',
      state: 'Shutdown',
      name: 'Apple Watch Series 5 - 40mm'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/C2482147-BD76-45A7-A26C-EF4C19727C0D/data',
      dataPathSize: 0,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/C2482147-BD76-45A7-A26C-EF4C19727C0D',
      udid: 'C2482147-BD76-45A7-A26C-EF4C19727C0D',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.Apple-Watch-Series-5-44mm',
      state: 'Shutdown',
      name: 'Apple Watch Series 5 - 44mm'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/CEDB0C75-4389-4F72-8EDD-DDC86E5046C4/data',
      dataPathSize: 0,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/CEDB0C75-4389-4F72-8EDD-DDC86E5046C4',
      udid: 'CEDB0C75-4389-4F72-8EDD-DDC86E5046C4',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.Apple-Watch-Series-6-40mm',
      state: 'Shutdown',
      name: 'Apple Watch Series 6 - 40mm'
    },
    {
      availabilityError: 'runtime profile not found',
      dataPath:
        '/Users/ugurcanatas/Library/Developer/CoreSimulator/Devices/137916AE-9E42-47E6-8663-E6CEAE3EF012/data',
      dataPathSize: 0,
      logPath: '/Users/ugurcanatas/Library/Logs/CoreSimulator/137916AE-9E42-47E6-8663-E6CEAE3EF012',
      udid: '137916AE-9E42-47E6-8663-E6CEAE3EF012',
      isAvailable: false,
      deviceTypeIdentifier: 'com.apple.CoreSimulator.SimDeviceType.Apple-Watch-Series-6-44mm',
      state: 'Shutdown',
      name: 'Apple Watch Series 6 - 44mm'
    }
  ]
};

module.exports = {
  runtimeListsMockData,
  devices
};

const inquirer = require("inquirer");
const { androidEmulatorList } = require("./android");
const { iosRuntimeList, iosEmulatorList, iosDeviceAction } = require("./ios");
const { OS_TYPE_Q } = require("./constants");

const pickOsType = () => {
  return OS_TYPE_Q;
};

const pickAction = (type, selected) => {
  const prompts = {
    ios: {
      type: "list",
      name: "action",
      message: `Select a process for ${selected}`,
      choices: [
        {
          key: "boot",
          name: "Boot",
          value: "b",
        },
        {
          key: "shutdown",
          name: "Shutdown",
          value: "s",
        },
        {
          key: "erase",
          name: "Erase",
          value: "e",
        },
        {
          key: "opensim",
          name: "Open simulator & boot",
          value: "o",
        },
      ],
    },
    android: {
      type: "list",
      name: "action",
      message: `Select a process for ${selected}`,
      choices: [
        {
          key: "boot",
          name: "Boot",
          value: "b",
        },
        {
          key: "shutdown",
          name: "Shutdown",
          value: "s",
        },
        {
          key: "erase",
          name: "Erase",
          value: "e",
        },
        {
          key: "opensim",
          name: "Open simulator & boot",
          value: "o",
        },
      ],
    },
  };
  return prompts[type];
};

async function main() {
  // await inquirer.prompt([await emuList()]).then((answer) => {
  //     //console.log("Answers", answer);
  // }).catch((e) => {
  //     console.error(e);
  // })
  const { os_type } = await inquirer.prompt([pickOsType()]);
  if (os_type === "IOS") {
    //console.log("IOS Selected");
    const { ios_runtime } = await inquirer.prompt([await iosRuntimeList()]);
    //console.log("SELECTED IOS RUNTIME", ios_runtime);
    const { ios_device } = await inquirer.prompt([
      await iosEmulatorList(ios_runtime),
    ]);
    //console.log("SELECTED IOS DEVICE", JSON.parse(ios_device));
    const { deviceName, deviceUDID } = JSON.parse(ios_device);
    const { action } = await inquirer.prompt([pickAction("ios", deviceName)]);
    //console.log("Selected Action", action, deviceUDID);
    iosDeviceAction(action, deviceUDID);
  } else {
    const { selected_emualator } = await inquirer.prompt([
      await androidEmulatorList(),
    ]);
    const { action } = await inquirer.prompt([
      pickAction("android", selected_emualator),
    ]);
    console.log("Android Selected with action => ", action);
  }
}

main();

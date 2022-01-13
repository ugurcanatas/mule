const inquirer = require("inquirer");
const { exec } = require("child_process");
const { exit } = require("process");

const pickOsType = () => {
    return {
        type: 'list',
        name: 'os_type',
        message: `Select OS type`,
        choices: [
            "IOS",
            "ANDROID"
        ]
    }
}


const iosRuntimeList = () => {
    return new Promise((resolve, reject) => {
        exec("sh ./shs/runtime_list_ios.sh", (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                reject(err)
                exit;
            } else {
                if (stdout) {
                    const {runtimes} = JSON.parse(stdout);
                    resolve({
                        type: 'list',
                        name: 'ios_runtime',
                        message: 'Select an IOS Runtime',
                        choices: runtimes.map(runtime => ({
                            key: runtime.identifier,
                            name: runtime.name,
                            value: runtime.identifier,
                          }))
                    })
                }
            }
        })
    })
}


const iosEmulatorList = (runtimeKey) => {
    return new Promise((resolve, reject) => {
        exec("sh ./shs/emu_list_ios.sh", (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                reject(err)
                exit;
            } else {
                if (stdout) {
                    const {devices} = JSON.parse(stdout);
                    //console.log("IOS Devices", devices[runtimeKey]);
                    resolve({
                        type: 'list',
                        name: 'ios_device',
                        message: 'Select an IOS Device',
                        choices: devices[runtimeKey].map(device => ({
                            key: device.udid,
                            name: device.name,
                            value: JSON.stringify({
                                deviceName: device.name,
                                deviceUDID: device.udid,
                                deviceState: device.state
                            }),
                          }))
                    })
                }
            }
        })
    })
}

const androidEmulatorList = () => {
    let choices = [];
    return new Promise((resolve, reject) => {
        exec("sh ./shs/emu_list_android.sh", (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                reject(err)
                exit;
            } else {
                if (stdout) {
                    choices = stdout.split("\n").filter(v => v !== '');
                    resolve({
                        type: 'list',
                        name: 'selected_emualator',
                        message: 'Select an emulator',
                        choices
                    })
                }
            }
        })
    })
}

const pickAction = (selected) => {
    return {
        type: 'list',
        name: 'process',
        message: `Select a process for ${selected}`,
        choices: [
            "wipe & clean boot",
            "start"
        ]
    }
}


async function main() {
    // await inquirer.prompt([await emuList()]).then((answer) => {
    //     console.log("Answers", answer);
    // }).catch((e) => {
    //     console.error(e);
    // })
    const {os_type} = await inquirer.prompt([pickOsType()])
    if (os_type === 'IOS') {
        console.log("IOS Selected");
        const {ios_runtime} = await inquirer.prompt([await iosRuntimeList()])
        console.log("SELECTED IOS RUNTIME", ios_runtime);
        const {ios_device} = await inquirer.prompt([await iosEmulatorList(ios_runtime)])
        console.log("SELECTED IOS DEVICE", ios_device);
    }else {
        console.log("Android Selected");
    }

    // const {selected_emualator} = await inquirer.prompt([await androidEmulatorList()])
    // const selectedAction = await inquirer.prompt([pickAction(selected_emualator)])


    // console.log("Selected Emulator",os_type, selected_emualator, selectedAction);
}

main();







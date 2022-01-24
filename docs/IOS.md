## IOS

### IOS Actions

### Action 1

Select IOS Runtime

You'll be prompted with a selection list after selecting IOS

```bashscript
Select an IOS Runtime
> IOS 15.2
  tvOS 15.2
  etc...
```

🌈 Tip: Runtime selections are needed to extract simulator data from the command:

`xcrun simctl list runtimes --json`

### Action 2

Select a device

You'll be prompted with a selection list that consists of all simulator devices

```bashscript
Select an IOS Runtime
> iPhone 13 mini -> (Booted)
  iPhone 13 Pro Max -> (Shutdown)
  iPhone 13 Pro -> (Shutdown)
  iPhone 13 -> (Shutdown)
```

🌈 Tip: Booted devices will be labeled as `Booted` and closed devices will be labeled as `Shutdown`.

### Action 3

Select an action

You'll be prompted with a selection list of available actions

```bashscript
Select a process for iPhone 13 mini
> Boot
  Shutdown
  Wipe/Erase
  Open Simulator.app & Boot
```

🦄 Available Options

`Boot`:

Boots the selected simulator

`Shutdown`:

Closes the selected simulator

`Wipe/Erase`:

Removes the selected simulator

`Open Simulator.app & Boot`:

Workaround for where sometimes simulator does not boot because Simulator.app is not running

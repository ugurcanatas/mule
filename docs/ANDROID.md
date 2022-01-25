## ANDROID

### ANDROID Actions

### Action 1

Select Emulator

You'll be prompted with a selection list of emulator after selecting ANDROID
List consists of emulator names that you created beforehand.

```bashscript
Select an emulator
> Nexus_5_API_30
  Pixel_4_API_30
  etc...
```

🌈 Tip: Emulator list extracted using emulator executable in `Library/Android/sdk/emulator`

### Action 2

Select an action

You'll be prompted with a selection list of actions that can be performed

```bashscript
Select a process for Nexus_5_API_30
> Boot
  Shutdown
  Wipe Data
  Open with debug tags
  Open with logcat tags
  Standalone logcat window
```

### 🦄 Available Options

`Boot`:

Boots the selected simulator

`Shutdown`:

Closes the selected simulator

`Wipe Data`:

Wipes data for selected emulator. (Just like in Android Studio)

`Open with debug tags`:

Starts the emulator with any debug tags that you've entered after selecting this action.

Example:
```bashscript
? Enter debug tags(Seperate with comma)
eg: init,metrics: __
```
- You can enter multiple debug tags by seperating each flag with a comma. (example: init,metrics)
- You can refer to [Android CLI documentation](https://developer.android.com/studio/run/emulator-commandline#startup-options) for more information.
- Or you can just run: 

```bashscript
$ emulator -help-debug-tags
```

`Open with logcat tags`:

Starts the emulator with any logcat tags that you've entered after selecting this action.

Example:
```bashscript
? Enter logcat tags(E,V): __
```

- You can enter multiple debug tags by seperating each flag with a comma. (example: init,metrics)

- You can refer to [Android CLI documentation](https://developer.android.com/studio/run/emulator-commandline#startup-options) for more information.

### Available logcat logtags
- <span style="color:#cce815">v - **verbose**</span>
- <span style="color:#2cdbd5">d - **debug**</span>
- <span style="color:#3890fc">i - **informative**</span>
- <span style="color:#f76f34">w - **warning log level**</span>
- <span style="color:#ed264a">e - **error**</span>
- <span style="color:#8a8a8a">s - **silent**</span>
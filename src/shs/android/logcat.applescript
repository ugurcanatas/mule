on run argv

set deviceName to (item 1 of argv) 
set flags to "'" & (item 2 of argv) & "'"

set appName to "Terminal"

if application appName is running then
    tell application "Terminal"
        set currentTab to do script "cd ~/Library/Android/sdk/emulator;"
        delay 2
        do script "./emulator @" & deviceName & " -logcat " & flags in front window
        activate
    end tell    
    return "Running device: " & deviceName & " with logcat flags: " & flags
else
    tell application "Terminal"
        set currentTab to do script "cd ~/Library/Android/sdk/emulator;"
        delay 2
        do script "./emulator @" & deviceName & " -logcat " & flags in front window
        activate
    end tell    
    return "Running device: " & deviceName & " with logcat flags: " & flags
end if

end run
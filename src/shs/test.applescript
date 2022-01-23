set appName to "Terminal"

if application appName is running then
    tell application "Terminal"
        do script "echo alreadyRunning"
        activate
    end tell    
    return "Running"
else
    tell application "Terminal"
        do script "echo hi"
        activate
    end tell    
    return "Not running"
end if

tell application "Terminal"
    do script "cd ~/Library/Android/sdk/emulator; ./emulator @$Name -debug-all"
end tell

-- tell application "Terminal"
--     if it is not running then launch
--     activate
--     do shell script "open -a Terminal"
--     then do shell script "cd ~/Library/Android/sdk/emulator"
-- end tell
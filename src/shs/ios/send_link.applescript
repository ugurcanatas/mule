on run argv

set deviceUDID to (item 1 of argv) 
set deviceState to (item 2 of argv) 
set urlScheme to (item 3 of argv) 


if deviceState = "Booted"
    do shell script "xcrun simctl openurl " & deviceUDID & " " & urlScheme
    return "✅ URL Scheme sent to device: " & urlScheme
else
    return "🚨 You need to boot your device first. Unable to lookup in current state: Shutdown"
end if   


end run


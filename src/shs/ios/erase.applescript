on run argv

set deviceName to (item 1 of argv)

do shell script "xcrun simctl erase " & deviceName

end run
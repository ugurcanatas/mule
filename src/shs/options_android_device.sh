#!/bin/bash

runEmulatorDebugAll() {
   osascript <<EOD
set appName to "Terminal"

if application appName is running then
    tell application "Terminal"
        do script "cd ~/Library/Android/sdk/emulator; ./emulator \"@$1\" -debug-all"
        activate
    end tell    
else
    tell application "Terminal"
        do script "cd ~/Library/Android/sdk/emulator; ./emulator \"@$1\" -debug-all"
        activate
    end tell    
end if
EOD
}

while getopts "b:s:e:o:d:l" option; do
   case $option in
   b) # Boot Android Device
      #Name=$OPTARG
      ARG1=${1:-foo}
      ARG2=${2:bar}
      ARG3=${3:-1}

      echo "$ARG1"
      echo "$ARG2"
      echo "$ARG3"
      #runEmulator $Name
      #echo $(pwd)
      #cd $(pwd)/src/shs
      #osascript test.applescript
      #osascript -e "tell application \"Terminal\" to do script \"cd ~/Library/Android/sdk/emulator; ./emulator @$Name -debug-all\"" >/dev/null
      #cd ~/Library/Android/sdk/emulator
      #./emulator @$Name -debug-all
      ;;
   s) # Shutdown Android Device
      Name=$OPTARG
      cd ~/Library/Android/sdk/platform-tools
      ./adb kill-server
      ;;
   e) # Wipe Android Device
      Name=$OPTARG
      cd ~/Library/Android/sdk/emulator
      ./emulator @$Name -wipe-data
      ;;
   o) # Boot Android Device
      Name=$OPTARG
      cd ~/Library/Android/sdk/emulator
      ;;
   d) # Boot Android Device in debug mode
      echo debuggg
      ARG1=${1:-foo}
      ARG2=${2:bar}
      ARG3=${3:-1}

      echo "$ARG1"
      echo "$ARG2"
      echo "$ARG3"
      ;;
   l) # Boot Android Device in debug mode
      Name=$OPTARG
      ;;

   \?) # Invalid option
      echo "Error: Invalid option"
      exit
      ;;
   esac
done

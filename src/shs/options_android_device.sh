#!/bin/bash

while getopts "b:s:e:o" option; do
   case $option in
   b) # Boot Android Device
      Name=$OPTARG
      cd ~/Library/Android/sdk/emulator
      ./emulator @$Name
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

   \?) # Invalid option
      echo "Error: Invalid option"
      exit
      ;;
   esac
done

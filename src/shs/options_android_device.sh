#!/bin/bash
cd ~/Library/Android/sdk/emulator

while getopts "b:s:e:o" option; do
   case $option in
   b) # Boot Android Device
      Name=$OPTARG
      ./emulator @$Name
      ;;
   s) # Shutdown IOS Device
      Name=$OPTARG
      ;;
   e) # Shutdown IOS Device
      Name=$OPTARG
      ;;
   o) # Boot IOS Device
      Name=$OPTARG
      ;;

   \?) # Invalid option
      echo "Error: Invalid option"
      exit
      ;;
   esac
done
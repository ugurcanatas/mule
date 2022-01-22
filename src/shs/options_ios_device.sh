#!/bin/bash

while getopts "b:s:e:o" option; do
   case $option in
   b) # Boot IOS Device
      Name=$OPTARG
      xcrun simctl boot $Name
      ;;
   s) # Shutdown IOS Device
      Name=$OPTARG
      xcrun simctl shutdown $Name
      ;;
   e) # Shutdown IOS Device
      Name=$OPTARG
      xcrun simctl erase $Name
      ;;
   o) # Boot IOS Device
      Name=$OPTARG
      xcrun simctl boot $Name
      open -a Simulator
      ;;

   \?) # Invalid option
      echo "Error: Invalid option"
      exit
      ;;
   esac
done

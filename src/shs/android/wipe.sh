#!/bin/bash
DEVICE=${1}
cd ~/Library/Android/sdk/emulator
./emulator @$DEVICE -wipe-data

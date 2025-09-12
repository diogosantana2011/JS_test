#!/bin/bash

SCREENSHOT_DIRECTORY=~/vs-workspace/qa-3et/results

echo "Moving to $SCREENSHOT_DIRECTORY..."
cd "$SCREENSHOT_DIRECTORY" || exit 1

echo "Removing selenium screenshots..."

if find . -maxdepth 1 -type f -iname "selenium-screenshot-*.png" | grep -q .; then
    find . -maxdepth 1 -type f -iname "selenium-screenshot-*.png" -exec rm -v {} \;
else
    echo "No selenium screenshots found."
fi

echo "Removing screenshots with 'screenshot-*' pattern..."
if find . -maxdepth 1 -type f -iname "screenshot-*" | grep -q .; then
    find . -maxdepth 1 -type f -iname "screenshot-*" -exec rm -v {} \;
else
    echo "No 'screenshot-*' files found."
fi

echo "Removing screenshots with 'Screenshot from *' pattern..."
if find . -maxdepth 1 -type f -iname "Screenshot from *" | grep -q .; then
    find . -maxdepth 1 -type f -iname "Screenshot from *" -exec rm -v {} \;
else
    echo "No 'Screenshot from *' files found."
fi

echo "Screenshots cleanup complete in $SCREENSHOT_DIRECTORY"

#!/bin/bash

SCREENSHOT_FILE_NAME="Screenshot.png"
SCREENSHOT_DIRECTORY=~/Pictures/Screenshots

echo "Moving to ~/Pictures folder..."
cd ~/Pictures || exit 1

echo "Checking for $SCREENSHOT_FILE_NAME..."
if [ -f "$SCREENSHOT_FILE_NAME" ]; then
    echo "$SCREENSHOT_FILE_NAME exists."
    rm "$SCREENSHOT_FILE_NAME"
    echo "$SCREENSHOT_FILE_NAME removed."
else
    echo "$SCREENSHOT_FILE_NAME does not exist."
fi

echo "Removing additional screenshots..."
find . -iname "screenshot-*" -type f | while IFS= read -r FILE; do
    rm "$FILE"
done

if find . -iname "screenshot-*" -type f >/dev/null 2>&1; then
    echo "All screenshots removed."
else
    echo "Some screenshots remain. Re-run script."
fi

echo "Navigating to screenshots folder..."
cd "$SCREENSHOT_DIRECTORY" || exit 1

echo "Removing files matching pattern 'Screenshot from *'..."
find . -iname "Screenshot from *" -type f | while IFS= read -r FILE; do
    rm -v -f -- "$FILE"
done

echo "Screenshots cleaned from $SCREENSHOT_DIRECTORY"

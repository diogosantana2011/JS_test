#!/bin/bash
SCREENSHOT_FILE_NAME="Screenshot.png"
SCREENSHOT_DIRECTORY=~/Pictures/Screenshots

cd ~/Pictures
ls -la && sleep 0.5

# find $SCREENSHOT_FILE_NAME -print

if [ -f $SCREENSHOT_FILE_NAME ]; then
    rm $SCREENSHOT_FILE_NAME
    echo "$SCREENSHOT_FILE_NAME removed."
else
    echo "$SCREENSHOT_FILE_NAME does not exist."
fi

echo Removing additional screenshots.
for FILE in `find . -iname "screenshot-*" -type f -print`
do
    # REMOVE SCREENSHOTS
    rm $FILE
done

if [ ! `find . -iname "screenshot-*" -type f` ]; then
    echo All screenshots removed.
    else
    echo Some screenshots remain. Re-run script.
fi

echo Navigating to screenshots folder
cd $SCREENSHOT_DIRECTORY

# find . -iname "Screenshot*" -type f -print

for FILES in `find . -iname "Screenshot from *" -type f`
do
    # REMOVE SCREENSHOTS
    rm -v -f -- *\ $FILES
done

echo Screenshots cleaned from $SCREENSHOT_DIRECTORY
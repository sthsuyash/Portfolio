# terminal command for repetitive git commands

#!/bin/bash

for program in "$@"; do
    # echo $program
    git add $program
done

read -p "Enter commit message: " message
git commit -m "$message"
git push

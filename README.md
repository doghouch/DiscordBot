# IMPORTANT NOTE
This bot is against Discord's TOS. Please use this bot at **your own risk** -- your account may be terminated if you are caught.

# discordSlav
The discordSlav will allow you to set custom commands and who it can interact to (e.g. your friends).

It is written purely in NodeJS and has 2 dependencies: **node-cmd** and **Discord.js**.

## Warning
The software is written AS-IS and no guarantees will be provided if (_cough_) your server gets compromised. It is HIGHLY suggested that you run this under an unprivileged user.

## Installation 
Installation is relatively simple. You'll need to have `NodeJS` installed (obviously) and `screen`.

First, we must create a folder to hold the bot:

    cd ~
    mkdir bot
    
Now, we must download the bot (**current version:** 1.0):

    wget https://github.com/doghouch/discordSlav/archive/v1.0.zip
    unzip v1.0.zip
    
Edit bot.js to have the correct token:
    
    nano bot.js

You will see `YOUR_DISCORD_TOKEN` at the bottom of `bot.js`. Modify that to your Discord token. (**WARNING:** I am not responsible if your account is stolen if you share this token)

Now, you can create a `screen` and run the bot:

    screen -S bot
    node bot.js

## Support

This project will not be actively maintained. If you have any problems or issues, feel free to send a message to `admin+bot@dawgy.pw`, though.

Have fun!
- dawgy

# Discord Event Reminder
There are a million discord event scheduling bots. Many of them use their own calendar system and ignore Discord's built in one entirely, which has led to a situation where there is not a single bot that sends out reminders for native Discord events! Until now that is. This is an extremely simple bot that, when it starts up, checks to see if there are any events coming up in the next 60 minutes and sends out a reminder in the specified channel to the specified role with the event URL (which in turns embeds the event details). 

## Developement Status
This was spun out of a larger swiss-army-knife bot I'm building for my server, so this hasn't been tested on it's own and may have issues that came from the gutting. Let me know if you encounter any and I will fix them at earliest convienence. That said, don't expect this bot to get any more sophisticated or for me to eventually host a public instance. 

## Usage
Before running, you'll need to install the discord.js library with 

`npm install discord.js`

You will also need to set three envronmental variables:

TOKEN - Your bot's discord token  
ANNOUNCEMENTS_ID - The channel ID of the channel you want the bot to send the reminder in  
PARTY_PING_ID - The role ID of the role you want the bot to ping  

Those last two IDs can be found by enabling developer mode on discord and then right clicking and selecting Copy ID on the channel and role.

Finally, you have to schedule the bot to run every hour. In cron that looks like:

`0 * * * * timeout -s SIGINT 1h node index.mjs 1> log.txt 2> error.txt`

You could probably with relative ease just edit the bot to run it's startup function every hour and let the program run indefinitely instead, but it's not like it's doing anything else for the other 59 minutes and 59 seconds of the hour.

This is not super comprehensive documentation, because the bot is small and presumably in very short demand if it doesn't exist already, so if you haven't already messed with self-hosting discord bots this all might read like greek. That's ok, I didn't know any of this junk until recently! If you need a hand just reach out and I can help you get started.

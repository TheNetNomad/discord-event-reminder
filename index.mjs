console.log("Initializing...");

import { Client, GatewayIntentBits, PermissionsBitField, AttachmentBuilder } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent] });


const ANNOUNCEMENTS_ID = process.env.ANNOUNCEMENTS_ID;
const PARTY_PING_ID = process.env.PARTY_PING_ID;

client.once('ready', c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
	client.channels.cache.forEach(channel => {
		if (channel.permissionsFor(client.user).has(PermissionsBitField.Flags.ViewChannel) & (channel.id == ANNOUNCEMENTS_ID)) {
			let eventCache = channel.guild.scheduledEvents.cache;

			let nextHour = new Set();
			eventCache.forEach(event => {
				if (event.scheduledStartAt < new Date(Date.now() + 61 * 60 * 1000) && event.scheduledStartAt > Date.now()) {
					console.log(event);
					channel.send("<@&" + PARTY_PING_ID + "> Event coming up within the hour! " + event.url);
				}
			})
		}
	})
});

console.log("Connecting...");
client.on('debug', console.log);
client.on('error', console.error);
client.on('warning', console.warn);
client.login(process.env.TOKEN);

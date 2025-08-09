const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { TOKEN } = require('./JSON/config.json');
const { readdirSync } = require('node:fs');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.commands = new Collection();

readdirSync('./handlers').forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(TOKEN);
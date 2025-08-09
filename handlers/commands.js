const { readdirSync } = require('node:fs');

module.exports = (client) => {
    readdirSync('./commands').forEach(folder => {
        const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/${folder}/${file}`);
            if (command.data && command.execute) {
                client.commands.set(command.data.name, command);
            } else {
                console.warn(`⚠️ الأمر ${file} ناقص data أو execute`);
            }
        }
    });
};

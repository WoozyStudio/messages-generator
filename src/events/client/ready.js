const { ActivityType } = require('discord.js');

require('colors');

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        console.log(`Logged as ${client.user.tag}.`.green);
        await client.user.setPresence({
            activities: [{
                name: "Messages",
                type: ActivityType.Listening
            }], status: "online"
        })
    },
};
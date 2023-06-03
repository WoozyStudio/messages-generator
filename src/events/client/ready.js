const { ActivityType } = require('discord.js');

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        console.log(`Logged as ${client.user.tag}.`);
        await client.user.setPresence({
            activities: [{
                name: "Messages",
                type: ActivityType.Listening
            }], status: "idle"
        })
    },
};
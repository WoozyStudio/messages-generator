const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('I will show the Discord API ping in ms.'),
    async execute(interaction, client) {
        await interaction.reply({ content: `Pong! The API ping is **${client.ws.ping}ms**` });
    }
}
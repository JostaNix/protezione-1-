
const Discord = require("discord.js");
const config = require("../configs/config.json");

exports.run = (database, message, args) => {
    if (!["933413214119669860"].includes(message.author.id)) return message.react(config.emojis.red);
    message.reply(`Noâ Was Here Calm Down Baby:)`)
};

exports.conf = {
    name: "ready?",
    aliases: []
};

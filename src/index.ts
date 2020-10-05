import {parseReminderPlaceholders} from "./util/placeholder";

require("dotenv").config();
import Discord, {TextChannel} from "discord.js";

const client = new Discord.Client();
import {getDayOfWeekFromDate} from "./util/dateutils";
// Reads our JSON configuration file.
import config from "../config.json";

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}`);
})

client.on("message", msg => {
    // This message function handles commands, 
    // so we want to return early if the message does not start with "!"
    if (!msg.content.startsWith("!")) return;
})

client.login(process.env.DISCORD_BOT_TOKEN);


setInterval(async () => {
    const now = new Date();
    // check only at beginning of the minute.
    if (now.getSeconds() !== 0) return;
    for (const reminder of config.reminders) {
        const validTime = reminder.time;
        const dayOfWeek = getDayOfWeekFromDate(now);
        // if today is not a valid class day, continue.
        if (!validTime.days.includes(dayOfWeek)) continue;
        // Check actual time, continue again.
        if (validTime.hour !== now.getHours() || validTime.minute !== now.getMinutes()) continue;
        // Now we need to remind people so:
        const reminderFormat = config["reminder-format"];
        const embed = new Discord.MessageEmbed()
            .setColor(parseReminderPlaceholders(reminder, reminderFormat.color))
            .setTitle(parseReminderPlaceholders(reminder, reminderFormat.title))
            .setURL(parseReminderPlaceholders(reminder, reminderFormat.url))
            .setAuthor(parseReminderPlaceholders(reminder, reminderFormat.author))
            .addFields(reminderFormat.fields.map(configField => {
                    return {
                        name: parseReminderPlaceholders(reminder, configField.name),
                        value: parseReminderPlaceholders(reminder, configField.value)
                    }
                })
            )
            .setFooter("Made by ProSavage")
            .setTimestamp()
        let channel = await client.channels.fetch(config["reminder-channel-id"], true) as TextChannel
        await channel.send(embed)
    }
}, 1000)
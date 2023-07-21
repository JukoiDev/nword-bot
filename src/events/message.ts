import { respond } from "@root/functions/respond";
import { client } from "..";
import { config } from "@root/config";
import { Message } from "discord.js";

client.on("messageCreate", async (message) => {
    if (!message.guild || message.author.bot) return;

    const prefix = config.prefix;

    if (message.content.match(RegExp(`^<@!?${client.user?.id}$>`))) {
        await respond(message.channel, `My prefix is ${prefix}`, 3);
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift()?.toLowerCase();

    const command =
        client.commands.get(cmd as string) ||
        client.commands.find((c) => c.alias && c.alias.includes(cmd as string));

    if (!command) {
        await respond(message.channel, "Command not found.", 2);
        return;
    }

    try {
        await message.delete().catch(null);
        await message.channel.sendTyping();
        await command.execute(message, args);
    } catch (e) {
        console.error(e);
        await respond(message.channel, "Something went wrong...", 3);
    }
});

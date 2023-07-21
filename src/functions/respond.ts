import {
    Message,
    MessageCreateOptions,
    MessagePayload,
    TextBasedChannel,
} from "discord.js";

export async function respond(
    channel: TextBasedChannel,
    options: string | MessagePayload | MessageCreateOptions,
    timeout?: number
): Promise<Message<boolean> | void> {
    if (!timeout) return await channel.send(options);

    return await channel.send(options).then((msg) => {
        setTimeout(() => {
            msg.delete().catch(null);
        }, timeout * 1000);
    });
}

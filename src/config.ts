import { type ClientOptions, GatewayIntentBits as Intents } from "discord.js";

export const config = {
    id: "1131631747180802180",
    guild: "1130803172298985513",
};

export const client_options: ClientOptions = {
    intents: [
        Intents.Guilds,
        Intents.GuildMembers,
        Intents.GuildMessages,
        Intents.MessageContent,
    ],

    allowedMentions: {
        repliedUser: false,
    },
};

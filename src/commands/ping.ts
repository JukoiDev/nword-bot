import { ICommand } from "@root/types/Command";

const command: ICommand = {
    name: "ping",
    description: "Check the client latency.",
    enabled: true,
    ephemeral: true,

    async execute(message, args) {
        message.channel.send(`Pong! ${message.client.ws.ping}ms`);
    },

    async interact(interaction) {
        interaction.followUp(`Pong! ${interaction.client.ws.ping}ms!`);
    },
};

export default command;

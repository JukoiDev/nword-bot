import { respond } from "@root/functions/respond";
import { ICommand } from "@root/types/Command";

const command: ICommand = {
    name: "ping",
    description: "Check the client latency.",
    enabled: true,
    ephemeral: true,

    async execute(message) {
        await respond(message.channel, `Pong! ${message.client.ws.ping}ms`, 3);
    },

    async interact(interaction) {
        interaction.followUp(`Pong! ${interaction.client.ws.ping}ms!`);
    },
};

export default command;

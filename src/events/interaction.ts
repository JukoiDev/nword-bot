import { client } from "..";

client.on("interactionCreate", async (interaction): Promise<void> => {
    if (interaction.isChatInputCommand()) {
        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        await interaction.deferReply({ ephemeral: command.ephemeral });

        try {
            await command.interact(interaction);
        } catch (e) {
            console.error(e);
            await interaction.followUp("Something went wrong...");
        }
    }
});

import { ApplicationCommandData, REST, Routes } from "discord.js";
import { config } from "./config";

const rest_client = new REST({ version: "10" }).setToken(
    process.env.TOKEN as string
);

/**
 * A method to deploy slash commands to guilds.
 *
 * @param global Wether to deploy commands globally or locally.
 */
export async function deploy_commands(
    commands: ApplicationCommandData[],
    global?: boolean
) {
    const route = global
        ? Routes.applicationCommands(config.id)
        : Routes.applicationGuildCommands(config.id, config.guild);

    await rest_client
        .put(route, { body: commands })
        .then(() =>
            console.info(
                `Registered (/) application commands ${
                    global ? "globally" : "locally"
                }`
            )
        );
}

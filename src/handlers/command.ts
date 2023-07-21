import { _handle } from "@root/functions/handle";
import { ICommand } from "@root/types/Command";
import { client } from "..";
import { deploy_commands } from "@root/deploy";
import {
    ApplicationCommandData,
    ApplicationCommandType,
    REST,
} from "discord.js";

interface RegisterOptions {
    globalDeploy?: boolean;
}

export function registerCommands(
    directory: string,
    options?: RegisterOptions
): void {
    const commands: ApplicationCommandData[] = [];

    for (const file of _handle(directory)) {
        const command: ICommand = require(file).default;

        const command_data: ApplicationCommandData = {
            name: command.name,
            description: command.description,
            options: command.options,
            type: ApplicationCommandType.ChatInput,
        };

        client.commands.set(command.name, command);
        commands.push(command_data);
    }

    deploy_commands(commands, options?.globalDeploy);
}

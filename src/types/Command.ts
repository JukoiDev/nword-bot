import {
    ApplicationCommandOptionData,
    Awaitable,
    ChatInputCommandInteraction,
    Message,
    PermissionResolvable,
} from "discord.js";

export interface ICommand {
    name: string;
    description: string;
    alias?: string[];
    timeout?: number;
    permissions?: PermissionResolvable[];
    enabled: boolean;
    ephemeral?: boolean;
    options?: ApplicationCommandOptionData[];

    execute(message: Message, args: string[]): Awaitable<void>;
    interact(interaction: ChatInputCommandInteraction): Awaitable<void>;
}

import { Client, Collection, type ClientOptions } from "discord.js";
import { ICommand } from "@root/types/Command";

export class DiscordClient extends Client {
    commands: Collection<string, ICommand>;

    constructor(options: ClientOptions) {
        super(options);

        this.commands = new Collection();
    }
}

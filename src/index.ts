import "module-alias/register";
import "dotenv/config";
import { DiscordClient } from "@root/client/DiscordClient";
import { client_options } from "@root/config";
import { registerEvents } from "@root/handlers/event";
import { resolve } from "path";

export const client = new DiscordClient(client_options);

registerEvents(resolve(__dirname, "events"));

client.login(process.env.TOKEN).catch((error) => console.error(error));

import { client } from "..";

client.once("ready", async () => {
    console.log(client.user?.username, "is now online.");
});

import { BaseInteraction } from "discord.js";
import { Serval } from "../src/Serval";

export default async (client: Serval, interaction: BaseInteraction) => {
    if (!interaction.isCommand()) {
        return;
    }

    // Get the command from the command manaber.
    const command = client.commands.get(interaction.commandName);
    if (!command) {
        return;
    }

    // Handle the command.
    try {
        const commandClone = client.commands.clone(interaction.commandName);

        await commandClone?.run(client, interaction);
    } catch (_) {
        // TODO: Error handling.
        return;
    }
};
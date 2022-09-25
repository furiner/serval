import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Serval } from "../../src/Serval";
import { Command } from "../../src/structures/commands/Command";

export class Ping extends Command {
    constructor() {
        super();

    }

    async run(_: Serval, interaction: CommandInteraction): Promise<void> {
        interaction.reply({
            content: "Pong!",
            ephemeral: true
        });
    }

    build(builder: SlashCommandBuilder): SlashCommandBuilder {
        return builder;
    }
}
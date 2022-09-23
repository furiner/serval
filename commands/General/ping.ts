import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Serval } from "../../src/Serval";
import { Command } from "../../src/structures/commands/Command";

export class Ping extends Command {
    constructor() {
        super();

    }

    run(client: Serval, interaction: CommandInteraction) {
        interaction.reply({
            content: "Pong!",
            ephemeral: true
        });
    }

    build(builder: SlashCommandBuilder) {
        return builder;
    }
}
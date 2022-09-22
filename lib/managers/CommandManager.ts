import { Client } from "discord.js";
import { Command } from "../structures/commands/Command";
import { ModuleManager } from "./ModuleManager";

export type CommandResolvable = string | Command;

export class CommandManager extends ModuleManager<Command> {
    constructor(client: Client) {
        super(client);
    }
}
import { Command } from "../../src/structures/commands/Command";

export class Ping extends Command {
    constructor() {
        super({
            name: "ping"
        });
    }
}
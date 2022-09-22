import { Command } from "../../lib/structures/commands/Command";

export class Ping extends Command {
    constructor() {
        super({
            name: "ping"
        });
    }
}
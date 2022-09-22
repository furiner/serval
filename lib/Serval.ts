import { Client } from "discord.js";
import { ServalOptions } from "./utils/ServalOptions";

export class Serval extends Client {
    constructor(options: ServalOptions) {
        super(options);
    }

    public start(token?: string): Promise<string> {
        return this.login(token);
    }
}
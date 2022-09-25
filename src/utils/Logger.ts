import chalk from "chalk";
import { Client } from "discord.js";

export interface LoggerOptions {
    prefix?: string;
    defaultColor?: string;
}

export class Logger {
    /**
     * The client that instantiated this logger.
     * @type {Client}
     */
    public client: Client;
    
    constructor(client: Client) {
        this.client = client;
    }

    log(message: string, options: LoggerOptions = {}): void {
        console.log(`${COLORS[options.defaultColor === "error" ? "error" : "primary"]("•")} [${chalk.bgHex("#575757")(new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "long" }).format(new Date()))}] ${COLORS[options.defaultColor ?? "info"].bold(`[${options.prefix ?? `BOT: ${this.client.user?.tag}`}]:`)} ${message}`);
    }
}

export const COLORS: Record<string, ReturnType<typeof chalk["hex"]>> = {
    primary: chalk.hex("##B9FEA0"),
    info: chalk.hex("#A0B6FE"),
    error: chalk.hex("#F99494"),
};
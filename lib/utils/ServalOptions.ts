import { ClientOptions } from "discord.js";

export interface ServalOptions extends ClientOptions {
    commandsDirectory: string;
    eventsDirectory: string;
}
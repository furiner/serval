import { Client } from "discord.js";
import { ModuleManager } from "./ModuleManager";

export type Event = (client: Client<boolean>, ...args: any[]) => void;

export class EventManager extends ModuleManager<Event> {
    constructor(client: Client) {
        super(client);
    }
    
    async load(key: string, filePath: string) {
        const event: Event = (await import(filePath)).default;

        // Handle the event.
        this.client.on(key, (...args: any[]) => event(this.client, ...args));
    }
}
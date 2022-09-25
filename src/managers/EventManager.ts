import { Serval } from "../Serval";
import { ModuleManager } from "./ModuleManager";

export type Event = (client: Serval, ...args: any[]) => void;

export class EventManager extends ModuleManager<Event> {
    constructor(client: Serval) {
        super(client);
    }
    
    async load(key: string, filePath: string): Promise<void>  {
        const event: Event = (await import(filePath)).default;

        // Handle the event.
        this.client.on(key, async(...args: any[]) => await event(this.client, ...args));
    }
}
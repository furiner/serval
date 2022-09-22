import { Client } from "discord.js";
import { CommandManager } from "./managers/CommandManager";
import { EventManager } from "./managers/EventManager";
import { ServalOptions } from "./utils/ServalOptions";

export class Serval extends Client {
    /**
     * The manager for all the commands this bot has to offer.
     * @type {CommandManager}
     */
    public commands: CommandManager;
    public events: EventManager;

    public options: ServalOptions;

    constructor(options: ServalOptions) {
        super(options);

        this.options = options;
        this.commands = new CommandManager(this);
        this.events = new EventManager(this);
    }

    public start(token?: string): Promise<string> {
        // Handle all the commands and events first.
        //this.commands.loadAll(this.options.commandsDirectory);
        this.events.loadAll(this.options.eventsDirectory);
        return this.login(token);
    }
}
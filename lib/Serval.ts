import { Client } from "discord.js";
import { CommandManager } from "./managers/CommandManager";
import { EventManager } from "./managers/EventManager";
import { LocalizationManager } from "./managers/LocalizationManager";
import { ServalOptions } from "./utils/ServalOptions";

export class Serval extends Client {
    /**
     * The manager for all the commands this bot has to offer.
     */
    public commands: CommandManager;
    public events: EventManager;
    public intl: LocalizationManager;

    public options: ServalOptions;

    constructor(options: ServalOptions) {
        super(options);

        this.options = options;
        this.commands = new CommandManager(this);
        this.events = new EventManager(this);
        this.intl = new LocalizationManager(this);
    }

    public async start(token?: string) {
        // Handle all the commands and events first.
        await this.commands.loadAll(this.options.commandsDirectory);
        await this.events.loadAll(this.options.eventsDirectory);

        // Load all localizations.
        await this.intl.loadAll(this.options.intlDirectory);

        // Start the client.
        return this.login(token);
    }
}
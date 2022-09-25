import { Client, Routes, SlashCommandBuilder } from "discord.js";
import { REST } from "@discordjs/rest";
import { CommandManager } from "./managers/CommandManager";
import { EventManager } from "./managers/EventManager";
import { LocalizationManager } from "./managers/LocalizationManager";
import { ServalOptions } from "./utils/ServalOptions";
import { Logger } from "./utils/Logger";

export class Serval extends Client {
    /**
     * The manager for all the commands this bot has to offer.
     */
    public commands: CommandManager;
    public events: EventManager;
    public intl: LocalizationManager;
    public logger: Logger;

    public options: ServalOptions;

    constructor(options: ServalOptions) {
        super(options);

        this.options = options;
        this.commands = new CommandManager(this);
        this.events = new EventManager(this);
        this.intl = new LocalizationManager(this);
        this.logger = new Logger(this);
    }

    async start(token?: string): Promise<string> {
        const slashCommands = []; 
        
        // Handle all the commands and events first.
        await this.commands.loadAll(this.options.commandsDirectory);
        await this.events.loadAll(this.options.eventsDirectory);

        // Load all localizations.
        await this.intl.loadAll(this.options.intlDirectory);

        // Build all commands.
        for (const command of this.commands.cache.values()) {
            const slashBuilder = command.build(new SlashCommandBuilder());
            slashBuilder.setName(command.label.toLowerCase());
            slashBuilder.setDescription(command.description);

            // Add the command to the array.
            slashCommands.push(slashBuilder.toJSON());
        }

        // Start the client.
        const resp = await this.login(token);

        // Register all the commands.
        await new REST({ version: "9" }).setToken(token || "").put(
            Routes.applicationCommands(this.user?.id || ""),
            { body: slashCommands },
        );

        // Return the response of the login.
        return resp;
    }
}
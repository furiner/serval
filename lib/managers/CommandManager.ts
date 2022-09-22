import path from "path";
import { lstatSync, readdirSync } from "fs";
import { Client, Collection } from "discord.js";
import { CommandCategory } from "../structures/CommandCategory";
import { Command } from "../structures/commands/Command";

export class CommandManager {
    /**
     * The client that instantiated this manager.
     * @type {Client}
     */
    public client: Client;

    /**
     * A collection of all the structures that belong to this manager.
     * @type {Collection<string, ICommand>}
     */
    public cache: Collection<string, Command>

    constructor(client: Client) {
        this.client = client;
        this.cache = new Collection<string, Command>();
    }

    async load(name: string, filePath: string, category?: CommandCategory, ) {
        // TODO: This is ugly.
        const commandExports = await import(filePath);
        const command: Command = commandExports[Object.keys(commandExports)[0]];

        if (category) {
            // Set the command's category.
            command.category = category;
        }
        

        // Add the command to the cache.
        this.cache.set(name, command);
    }

    async loadAll(directory: string, category?: CommandCategory) {
        // Iterate through the directory for all the possible commands..
        for (const file of readdirSync(directory)) {
            // Get the stats for the path.
            const lstat = lstatSync(path.join(directory, file));

            if (lstat.isFile()) {
                if (!category) { }
                // This is likely a file, so we'll try to load it.
                this.load(file.split(".")[0], path.join(directory, file), category);
            } else if (lstat.isDirectory()) {
                // This is likely a directory, so we'll try to load all the files in it.
                // Create a category for this directory.
                const directoryCategory = new CommandCategory(file, category);

                // Load all the files.
                this.loadAll(path.join(directory, file));
            }
        }
    }
}
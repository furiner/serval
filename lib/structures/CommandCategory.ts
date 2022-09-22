import { Command } from "./commands/Command";

/**
 * A category made for commands.
 */
export class CommandCategory {
    /**
     * The name of the category.
     */
    public name: string;

    /**
     * The commands in the category.
     * @type {Command[]}
    */
    public commands: Command[];

    /**
     * The subcategories within the category.
     * @type {Category[]}
     */
    public subcategories: CommandCategory[];

    /**
     * The parent of this category.
     * @type {Category?}
     */
    public parent?: CommandCategory;

    constructor(name: string, parent?: CommandCategory) {
        this.name = name;
        this.commands = [];
        this.subcategories = [];
        this.parent = parent;
    }
}

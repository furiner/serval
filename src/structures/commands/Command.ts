import { CommandCategory } from "../CommandCategory";
import { CommandData } from "../interfaces/CommandData";

export class Command {
    public name: string;
    public category?: CommandCategory;

    constructor(data: CommandData) {
        /**
         * The name of the command.
         * @type {string}
         */ 
        this.name = data.name;

        /**
         * The category  of the command.
         */
        this.category = undefined;
    }
}
import { CommandData } from "../interfaces/CommandData";

export class Command {
    public name: string;

    constructor(data: CommandData) {
        /**
         * The name of the command.
         * @type {string}
         */
        this.name = data.name;
    }
}
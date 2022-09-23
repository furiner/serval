import { Collection } from "discord.js";
import { Serval } from "../Serval";

export class BaseModuleManager<I> {

    /**
     * The client that instantiated this manager.
     */
    public client: Serval;

    /**
     * A collection of all the structures that belong to this manager.
     */
    public cache: Collection<string, I>;

    constructor(client: Serval) {
        this.client = client;
        this.cache = new Collection<string, I>();
    }

    /**
     * Gets a structure from this manager.
     * @param key The key of the structure to get.
     */
    get(key: string) {
        return this.cache.get(key);
    }

    /**
     * Clones a structure from this manager.
     * @param key The key of the structure to clone.
     */
    clone(key: string) {
        return Object.assign({}, this.get(key));
    }

}
import { Serval } from "../Serval";
import { Localization } from "../structures/Localization";
import { ModuleManager } from "./ModuleManager";

export class LocalizationManager extends ModuleManager<Localization> { 
    constructor(client: Serval) {
        super(client);
    }

    /**
     * Get a localization by its language key.
     * @param locale The locale to get.
     */
    get(locale: string) {
        let localization = this.cache.get(locale);

        // If the localization doesn't exist, return the default one.
        if (!localization) {
            localization = this.cache.get(this.client.options.defaultLocale);
            console.log(this.cache.get(this.client.options.defaultLocale))
        };
        console.log(locale)

        return localization;
    }
    
    async load(key: string, filePath: string) {
        const localization = new Localization(key, (await import(filePath)).default);

        
        // Handle the localization.
        this.cache.set(key, localization)
    }
}
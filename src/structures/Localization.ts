import { JSONObject } from "../utils/json/JSONObject";
import { JSONType } from "../utils/json/JSONType";

export class Localization {
    /**
     * The language of the localization.
     */
    public language: string;
    public locale: object;

    constructor(lang: string, locale: object) {
        this.language = lang;
        this.locale = locale;
    }

    /**
     * Individually handles strings in a locale.
     * @param key 
     * @param defaultMessage 
     */
    handle(key: string, defaultMessage: string) {
        // Recursively handle the key if it's a nested object.
        let result = defaultMessage;
        if (key.includes(".")) {
            const keys = key.split(".");

            return eval(`this.locale.${keys.join(".")}`);
        }
    }
}
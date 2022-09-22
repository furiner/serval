interface LooseObject {
    [key: string]: any | LooseObject;
}

export class Localization {
    /**
     * The language of the localization.
     * @type {string}
     */
    public language: string;
    public locale: LooseObject;

    constructor(lang: string, locale: LooseObject) {
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
        let result: string = defaultMessage;
        console.log(key)
        if (key.includes(".")) {
            const keys = key.split(".");

            let current = this.locale;
            for (const key of keys) {
                if (current[key]) {
                    current = current[key];
                } else {
                    return result;
                }
            }
            
            result = current as unknown as string;
        }
    }
}
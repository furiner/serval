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
     * @param format
     */
    handle(key: string, defaultMessage: string, format?: Array<string>) {
        // Recursively handle the key if it's a nested object.
        let result = defaultMessage;

        if (key.includes(".")) {
            const keys = key.split(".");
            result = eval(`this.locale.${keys.join(".")}`);
        }

        let idx = 0;

        while (result.includes(`{${idx}`)) {
            if (format) {
                let str = format[idx];
                if (str == null)
                    throw new Error(`Could not find formatted string in index: ${idx}.`);

                result = result.replace(`{${idx}}`, str);
            } else {
                throw new Error("Localizable string expected a format parameter, but got none.")
            }

            idx++;
        }

        return result;
    }
}
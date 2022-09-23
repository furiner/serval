import { Serval } from "../src/Serval";

export default async (client: Serval) => {
    const localization = client.intl.get("en");

    console.log(localization?.handle("events.ready.message", "Logged in as {0}!", [client.user?.tag || "e"]));
};

import { config } from "dotenv";
config();

import { join } from "path";
import { GatewayIntentBits } from "discord.js";
import { Serval } from "./src/Serval";

// Create the bot client.
const bot = new Serval({
    // Temporarily use all intents.
    intents: Object.values(GatewayIntentBits).filter((intent) => typeof intent === "number").reduce(
        (prev, intent) => prev | <number>intent, 0
    ),

    // Serval-esque options.
    commandsDirectory: process.env.COMMAND_DIRECTORY ?? join(__dirname, "./commands"),
    eventsDirectory: process.env.EVENT_DIRECTORY ?? join(__dirname, "./events"),
    intlDirectory: process.env.INTL_DIRECTORY ?? join(__dirname, "./i18n"),

    // Serval inernational options.
    defaultLocale: process.env.DEFAULT_LOCALE ?? "en-US"
});

// Start the bot.
bot.start(process.env.SERVAL_TOKEN);
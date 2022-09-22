
import { config } from "dotenv";
config();

import { GatewayIntentBits } from "discord.js";
import { Serval } from "./lib/Serval";

// Create the bot client.
const bot = new Serval({
    // Temporarily use all intents.
    intents: Object.values(GatewayIntentBits).filter((intent) => typeof intent == "number").reduce(
        (prev, intent) => prev | <number>intent, 0
    ),

    // Serval-esque options.
    commandsDirectory: process.env.COMMAND_DIRECTORY || "./commands",
    eventsDirectory: process.env.EVENT_DIRECTORY || "./events",
    intlDirectory: process.env.INTL_DIRECTORY || "./intl",

    // Serval inernational options.
    defaultLocale: process.env.DEFAULT_LOCALE || "en-US"
})

// Start the bot.
bot.start(process.env.SERVAL_TOKEN);

import { config } from "dotenv";
config();

import { GatewayIntentBits } from "discord.js";
import { Serval } from "./lib/Serval";

// Create the bot client.
const bot = new Serval({
    // Temporarily use all intents.
    intents: Object.values(GatewayIntentBits).filter((intent) => typeof intent == "number").reduce(
        (prev, intent) => prev | <number>intent, 0
    )
})

// Start the bot.
bot.start(process.env.SERVAL_TOKEN);
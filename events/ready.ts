import { Serval } from "../src/Serval";

export default (client: Serval) => {
    console.log(`Logged in as ${client.user?.tag}!`);
};
import 'dotenv/config';
import { InstallGlobalCommands } from './utils/utils.js';

const TEST = {
    name: "faq",
    description: "Common Q&A and some things about the bot",
    type: 1
}

const COIN = {
    name: "coin",
    description: "Flip a coin",
    type: 1
}

const NUMBER = {
    name: "number",
    description: "Get a random number from 1 to 100",
    type: 1
}

const ENNVY = {
    name: "ennvy",
    description: "Info about the creator",
    type: 1
}

const ALL_COMMANDS = [TEST, COIN, NUMBER, ENNVY]
InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS)
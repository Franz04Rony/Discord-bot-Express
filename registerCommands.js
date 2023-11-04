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

const IMAGE = {
    name: "image",
    description: "Get a random image",
    type: 1
}

const BOLD = {
    name: "bold",
    description: "return your text in bold",
    type: 1,
    options: [
        {
            name: "text",
            type: 3,
            description: "just type"
        }
    ]
}

const ALL_COMMANDS = [TEST, COIN, NUMBER, ENNVY, IMAGE, BOLD]
InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS)
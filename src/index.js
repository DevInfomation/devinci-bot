import 'dotenv/config.js';
import { Client, IntentsBitField, GatewayIntentBits} from 'discord.js';
import eventHandler from './handlers/eventHandler.js';

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    GatewayIntentBits.Guilds,
  ],
});

eventHandler(client);


client.login(process.env.TOKEN);

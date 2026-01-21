import 'dotenv/config.js';
import { Client, IntentsBitField, EmbedBuilder, ActionRowBuilder } from 'discord.js';

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const roles = [
    {
        id: '1333554118077186140',
        label: 'red',
    },
    {
        id: '1333554201178931241',
        label: 'blue',
    },
    {
        id: '1333554234981093427',
        label: 'green',
    },
]

client.on('clientReady', async c => {
    try {
        const channel = await client.channels.get('1333519665183330437');
        if (!channel) return;

        const row = new ActionRowBuilder();
    } catch (error) {
        console.log(error);
    }
});

client.login(process.env.TOKEN);
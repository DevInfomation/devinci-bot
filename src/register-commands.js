import 'dotenv/config';
import { REST, Routes, ApplicationCommandOptionType } from 'discord.js';

const commands = [
  {
    name: 'embed',
    description: 'Send an embed!',
  }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID,
      ),
      { body: commands },
    );

    console.log('Slash commands were registered commands');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();

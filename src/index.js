import 'dotenv/config.js';
import { Client, IntentsBitField, EmbedBuilder } from 'discord.js';

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('clientReady', c => {
  console.log(`${c.user.tag} is online`);
});

client.on('interactionCreate', interaction => {
  if (!interaction.isChatInputCommand()) return;

  //   if (interaction.commandName === 'hey') {
  //     interaction.reply('hey!');
  //   }

  //   if (interaction.commandName === 'ping') {
  //     interaction.reply('pong');
  //   }

  //   if (interaction.commandName === 'add') {
  //     const num1 = interaction.options.get('first-number').value;
  //     const num2 = interaction.options.get('second-number').value;

  //     interaction.reply(`The sum is: ${num1 + num2}`);
  //   }

  if (interaction.commandName === 'embed') {
    const embed = new EmbedBuilder()
      .setTitle('Embed title')
      .setDescription('This is an embed description')
      .setColor('Random')
      .addFields(
        {
          name: 'Field title',
          value: 'Some random value',
          inline: true,
        },
        {
          name: 'Second Field title',
          value: 'Some second random value',
          inline: true,
        },
      );

    interaction.reply({ embeds: [embed] });
  }
});

client.on('messageCreate', message => {
  if (message.content === 'embed') {
    const embed = new EmbedBuilder()
      .setTitle('Embed title')
      .setDescription('This is an embed description')
      .setColor('Random')
      .addFields(
        {
          name: 'Field title',
          value: 'Some random value',
          inline: true,
        },
        {
          name: 'Second Field title',
          value: 'Some second random value',
          inline: true,
        },
      );

    message.reply({ embeds: [embed] });
  }
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === 'hello') {
    message.reply('hello');
  }
});

client.login(process.env.TOKEN);

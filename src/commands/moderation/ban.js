import { ApplicationCommandOptionType, PermissionFlagsBits } from 'discord.js';

export default () => {
  name: 'ban';
  description: 'Bans a member from the server';
  // devOnly: Boolean,
  // testOnly: Boolean,
  options: [
    {
      name: 'target-user',
      description: 'The user to ban.',
      require: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: 'reason',
      description: 'The reason for banning',
      type: ApplicationCommandOptionType.String,
    },
  ];
  permissionsRequired: [PermissionFlagsBits.Administrator];

  callback: (client, interaction) => {
    interaction.reply(`ban...`);
  };
};

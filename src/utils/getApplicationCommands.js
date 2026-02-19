export default async (client, guildId) => {
    let applicationCommands;

    if (guildId) {
        const guild = await client.guilds.fetch(guildId);
        applicationCommands = guild.commands;
    } else {
        applicationCommands = client.application.commands;
    }

    // console.log("Client application:", client.application);
    // console.log("Client guilds:", client.guilds);

    await applicationCommands.fetch();
    return applicationCommands;
}
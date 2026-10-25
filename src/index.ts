import { Client, GatewayIntentBits, REST, Routes } from 'discord.js';
import { config } from 'dotenv';
import { MemoryManager } from './memoryManager.js';
import { RakazoClient } from './rakazoClient.js';

config();

const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error('Missing DISCORD_TOKEN in .env');
  process.exit(1);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const memoryManager = new MemoryManager();
const rakazoClient = new RakazoClient(
  process.env.RAKAZO_API_URL || 'http://localhost:3000',
  process.env.RAKAZO_API_KEY || ''
);

// Register slash commands on ready
client.once('ready', async () => {
  console.log(`Logged in as ${client.user?.tag}`);

  const commands = [
    {
      name: 'role',
      description: 'Set the AI persona for this channel',
      options: [
        {
          name: 'description',
          type: 3, // STRING
          description: 'System prompt describing the persona',
          required: true,
        },
      ],
    },
    {
      name: 'chat',
      description: 'Chat with the AI (memory enabled)',
      options: [
        {
          name: 'message',
          type: 3,
          description: 'Your message',
          required: true,
        },
      ],
    },
    {
      name: 'run',
      description: 'Execute code in Rakazo sandbox',
      options: [
        {
          name: 'code',
          type: 3,
          description: 'Code to execute',
          required: true,
        },
      ],
    },
    {
      name: 'reset',
      description: 'Clear the channel memory',
    },
  ];

  try {
    const rest = new REST({ version: '10' }).setToken(token);
    await rest.put(Routes.applicationCommands(client.user!.id), { body: commands });
    console.log('Slash commands registered.');
  } catch (error) {
    console.error('Failed to register commands:', error);
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName, channelId, user } = interaction;

  if (commandName === 'role') {
    const description = interaction.options.getString('description', true);
    memoryManager.setSystemPrompt(channelId, description);
    await interaction.reply(`✅ AI persona set: "${description}"`);
  }

  else if (commandName === 'chat') {
    const message = interaction.options.getString('message', true);
    memoryManager.addMessage(channelId, { role: 'user', content: message });

    // Dummy response – in real implementation you would call Rakazo chat API
    // For now we echo with the persona context
    const sys = memoryManager.getSystemPrompt(channelId);
    const response = `[${sys ? sys.slice(0, 30) : 'Default'}] Echo: ${message}`;
    memoryManager.addMessage(channelId, { role: 'assistant', content: response });
    await interaction.reply(response);
  }

  else if (commandName === 'run') {
    const code = interaction.options.getString('code', true);
    await interaction.deferReply();
    try {
      const result = await rakazoClient.executeCode(code);
      await interaction.editReply(`📦 Execution result:\n\`\`\`\n${result}\n\`\`\``);
    } catch (err) {
      await interaction.editReply(`❌ Execution failed: ${err}`);
    }
  }

  else if (commandName === 'reset') {
    memoryManager.clearChannel(channelId);
    await interaction.reply('🗑️ Channel memory cleared.');
  }
});

client.login(token).catch(console.error);

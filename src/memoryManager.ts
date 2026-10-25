interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChannelMemory {
  systemPrompt: string;
  messages: Message[];
}

export class MemoryManager {
  private store: Map<string, ChannelMemory> = new Map();

  private getChannel(channelId: string): ChannelMemory {
    if (!this.store.has(channelId)) {
      this.store.set(channelId, { systemPrompt: '', messages: [] });
    }
    return this.store.get(channelId)!;
  }

  setSystemPrompt(channelId: string, prompt: string): void {
    const channel = this.getChannel(channelId);
    channel.systemPrompt = prompt;
  }

  getSystemPrompt(channelId: string): string {
    return this.getChannel(channelId).systemPrompt;
  }

  addMessage(channelId: string, message: Message): void {
    const channel = this.getChannel(channelId);
    channel.messages.push(message);
    // Keep only last 50 messages to avoid memory bloat
    if (channel.messages.length > 50) {
      channel.messages = channel.messages.slice(-50);
    }
  }

  getHistory(channelId: string): Message[] {
    return this.getChannel(channelId).messages;
  }

  clearChannel(channelId: string): void {
    this.store.delete(channelId);
  }

  getAllChannelIds(): string[] {
    return Array.from(this.store.keys());
  }
}

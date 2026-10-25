import axios, { AxiosInstance } from 'axios';

export class RakazoClient {
  private http: AxiosInstance;

  constructor(baseURL: string, apiKey: string) {
    this.http = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
    });
  }

  /**
   * Execute code in the Rakazo sandbox.
   * This is a placeholder that assumes a generic execute endpoint.
   * Replace with actual Rakazo API call (e.g., using computer provider).
   */
  async executeCode(code: string): Promise<string> {
    // Example: POST /api/v1/execute with { code }
    const response = await this.http.post('/api/v1/execute', { code });
    // Adjust based on actual Rakazo API response shape
    return response.data.output || response.data.result || 'No output';
  }

  /**
   * Send a chat message to Rakazo (future use).
   */
  async chat(messages: { role: string; content: string }[]): Promise<string> {
    const response = await this.http.post('/api/v1/chat', { messages });
    return response.data.reply || response.data.message;
  }
}

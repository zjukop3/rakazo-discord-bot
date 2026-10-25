# Rakazo Discord Bot

[English](#english) | [中文](#中文)

---

## 中文

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Discord](https://img.shields.io/badge/Discord-社区-5865F2?logo=discord&logoColor=white)](https://discord.gg/你的邀请链接)

### 🔗 这是什么？

**rakazo-discord-bot** 是 [Rakazo](https://github.com/elie222/rakazo) 生态的补充项目，旨在为 Discord 社区提供多频道独立记忆和角色扮演能力，并直接调用 Rakazo 沙箱执行代码。

与主项目 Rakazo（开源自托管 AI 助手）不同，本机器人专注 Discord 场景，让每个频道拥有独立的对话历史、系统角色设定，以及安全的代码执行环境。所有执行均由 Rakazo 沙箱完成，不占用本地资源，完全隔离。

### ✨ 特性

- 🤖 多频道独立记忆：每个频道维护独立的对话历史，互不干扰
- 🎭 角色扮演：为频道设置自定义系统 prompt，实现个性化 AI 人设
- ⚡ Rakazo 沙箱执行：`/run` 命令将代码发送至 Rakazo 沙箱执行并返回结果
- 🧠 可配置的模型与提供商：复用 Rakazo 已支持的模型和计算机提供商
- 🔒 轻量部署：只需一个 Discord Bot Token 和 Rakazo API 端点即可运行

### 📦 安装

```bash
git clone https://github.com/zjukop3/rakazo-discord-bot.git
cd rakazo-discord-bot
npm install
```

配置环境变量：
```bash
cp .env.example .env
# 编辑 .env 填入 DISCORD_TOKEN、RAKAZO_API_URL、RAKAZO_API_KEY
```

编译并运行：
```bash
npm run build
npm start
```

开发模式（热重载）：
```bash
npm run dev
```

### 🚀 快速上手

1. 确保 Rakazo 服务已启动并可访问（[部署指南](https://github.com/elie222/rakazo)）
2. 在 [Discord Developer Portal](https://discord.com/developers/applications) 创建应用并获取 Bot Token
3. 邀请机器人到你的服务器，权限要求：`Send Messages`、`Read Message History`、`Use Slash Commands`
4. 启动本机器人后，在频道中输入：

```
/role <角色描述>   → 设定频道 AI 人设
/chat <消息>       → 与 AI 对话（带记忆）
/run <代码>        → 在 Rakazo 沙箱中执行代码
/reset             → 清除当前频道记忆
```

### 🔗 与 Rakazo 主项目的关系

- **rakazo-discord-bot** 依赖 Rakazo 提供沙箱执行能力和模型调用，但不修改或增强 Rakazo 核心功能。
- 如果你需要全功能的 AI 队友、桌面端、手机端，请使用 [Rakazo](https://github.com/elie222/rakazo)。
- 本项目仅作为一个轻量的 Discord 接入层，专注聊天与代码执行场景。

### 🗺 Roadmap

- [ ] 频道记忆持久化（本地文件 / 数据库）
- [ ] 多模型切换命令
- [ ] 角色模板商城（社区贡献）
- [ ] Web 仪表板管理频道配置
- [ ] 图片/文件生成集成

### 📄 License

MIT © 2025 本项目贡献者

---

## English

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Discord](https://img.shields.io/badge/Discord-Community-5865F2?logo=discord&logoColor=white)](https://discord.gg/your-invite)

### 🔗 What is this?

**rakazo-discord-bot** is a companion to the [Rakazo](https://github.com/elie222/rakazo) ecosystem, adding multi-channel independent memory, role-playing, and on-demand code execution via Rakazo sandbox to Discord.

Unlike the main Rakazo project (a self-hosted AI assistant), this bot focuses solely on Discord, giving each channel its own conversation history, persona, and a safe code execution environment. All execution happens inside Rakazo’s sandbox – no local resources needed, fully isolated.

### ✨ Features

- 🤖 Multi-channel memory: each channel maintains its own conversation history
- 🎭 Role-play: set custom system prompts per channel for unique AI personas
- ⚡ Rakazo sandbox execution: `/run` sends code to Rakazo sandbox and returns results
- 🧠 Configurable models and providers: reuse all backends supported by Rakazo
- 🔒 Lightweight: just a Discord token and a Rakazo API endpoint

### 📦 Installation

```bash
git clone https://github.com/zjukop3/rakazo-discord-bot.git
cd rakazo-discord-bot
npm install
```

Configure environment:
```bash
cp .env.example .env
# edit .env with your DISCORD_TOKEN, RAKAZO_API_URL, RAKAZO_API_KEY
```

Build and start:
```bash
npm run build
npm start
```

Development mode (hot reload):
```bash
npm run dev
```

### 🚀 Quick Start

1. Make sure Rakazo is running and reachable ([deployment guide](https://github.com/elie222/rakazo))
2. Create an app and bot in [Discord Developer Portal](https://discord.com/developers/applications)
3. Invite the bot to your server with scopes: `Send Messages`, `Read Message History`, `Use Slash Commands`
4. After launching the bot, use in any channel:

```
/role <description>   → set channel AI persona
/chat <message>       → chat with memory
/run <code>           → execute code in Rakazo sandbox
/reset                → clear channel memory
```

### 🔗 Relationship with Rakazo

- **rakazo-discord-bot** relies on Rakazo for sandbox execution and model calls, but does not modify or extend Rakazo’s core.
- For the full AI teammate experience (desktop, mobile, web) please use [Rakazo](https://github.com/elie222/rakazo).
- This project is a lightweight Discord frontend focusing on chat and code execution.

### 🗺 Roadmap

- [ ] Persistent channel memory (file / database)
- [ ] Multi-model switching command
- [ ] Community role template marketplace
- [ ] Web dashboard for channel config
- [ ] Image/file generation integration

### 📄 License

MIT © 2025 Project Contributors

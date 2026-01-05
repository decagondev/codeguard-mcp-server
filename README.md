# DecaGuard MCP Server

AI-powered code smell detection and security analysis server using the Model Context Protocol (MCP).

## Quick Start

### Option 1: Using npx (Recommended)

No installation required! Use directly via npx:

**Configure Cursor IDE**

Edit `~/.cursor/mcp.json` (create if it doesn't exist):

**With OpenAI:**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "OPENAI_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

**With OpenRouter (Recommended for flexibility):**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "OPENROUTER_API_KEY": "sk-or-v1-your-key-here",
        "LLM_MODEL": "openai/gpt-4o-mini"
      }
    }
  }
}
```

**With Local Ollama (Privacy-focused):**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "LLM_BASE_URL": "http://localhost:11434/v1",
        "LLM_MODEL": "codellama"
      }
    }
  }
}
```

**Restart Cursor**

Completely quit and restart Cursor IDE.

### Option 2: Install via npm

```bash
npm install -g deca-guard-mcp-server
```

Then configure `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "decaguard": {
      "command": "deca-guard-mcp-server",
      "env": {
        "OPENAI_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### Option 3: Local Development Setup

For development or local installation:

```bash
git clone https://github.com/tomtarpey/deca-guard-mcp-server.git
cd deca-guard-mcp-server
npm install
```

Then configure `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "decaguard": {
      "command": "node",
      "args": ["/absolute/path/to/deca-guard-mcp-server/index.js"],
      "env": {
        "OPENAI_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

## Usage

After configuration, open any code file in Cursor and ask:
- "Analyze this code for security vulnerabilities"
- "Check this file for code smells"
- "Review this code for quality and security issues"

## Available Tools

### 1. analyze_code_smells
Detects maintainability issues:
- Long methods
- Duplicated code
- Large classes
- Feature envy
- Primitive obsession
- Dead code
- Magic numbers
- Nested conditionals

### 2. analyze_security_vulnerabilities
Scans for security issues:
- SQL/Command injection
- XSS vulnerabilities
- Hardcoded secrets
- Insecure cryptography
- Broken authentication
- Path traversal
- Insecure deserialization
- Input validation issues
- Sensitive data exposure

### 3. analyze_code_quality_and_security
Combined analysis in a single call.

## Supported Languages
- JavaScript
- TypeScript
- Python
- Java
- Go
- Rust

## Configuration Options

### Using Different LLM Providers

DecaGuard supports multiple LLM providers through OpenAI-compatible APIs. Configure your provider by setting the appropriate environment variables in `mcp.json`.

#### OpenAI (Default)

```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "OPENAI_API_KEY": "sk-...",
        "LLM_MODEL": "gpt-4o-mini"
      }
    }
  }
}
```

#### OpenRouter

OpenRouter provides access to multiple models from different providers at competitive prices. Get your API key from [openrouter.ai](https://openrouter.ai).

**Basic Setup:**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "OPENROUTER_API_KEY": "sk-or-v1-...",
        "LLM_MODEL": "openai/gpt-4o-mini"
      }
    }
  }
}
```

**Example: Using Claude 3.5 Sonnet (High Quality)**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "OPENROUTER_API_KEY": "sk-or-v1-...",
        "LLM_MODEL": "anthropic/claude-3.5-sonnet"
      }
    }
  }
}
```

**Example: Using GPT-4 Turbo (Best Quality)**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "OPENROUTER_API_KEY": "sk-or-v1-...",
        "LLM_MODEL": "openai/gpt-4-turbo"
      }
    }
  }
}
```

**Example: Using Gemini Pro (Cost-Effective)**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "OPENROUTER_API_KEY": "sk-or-v1-...",
        "LLM_MODEL": "google/gemini-pro-1.5"
      }
    }
  }
}
```

**Example: Using Llama 3.1 (Open Source)**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "OPENROUTER_API_KEY": "sk-or-v1-...",
        "LLM_MODEL": "meta-llama/llama-3.1-70b-instruct"
      }
    }
  }
}
```

**Example: Using Mistral Large (Fast & Accurate)**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "OPENROUTER_API_KEY": "sk-or-v1-...",
        "LLM_MODEL": "mistralai/mistral-large"
      }
    }
  }
}
```

**Popular OpenRouter Models for Code Analysis:**

| Model | Best For | Speed | Cost |
|-------|----------|-------|------|
| `openai/gpt-4o-mini` | Fast analysis, cost-effective | ⚡⚡⚡ | $ |
| `openai/gpt-4-turbo` | Best quality analysis | ⚡⚡ | $$$ |
| `anthropic/claude-3.5-sonnet` | High quality, detailed reports | ⚡⚡ | $$$ |
| `anthropic/claude-3-haiku` | Fast, good quality | ⚡⚡⚡ | $$ |
| `google/gemini-pro-1.5` | Balanced performance | ⚡⚡ | $$ |
| `meta-llama/llama-3.1-70b-instruct` | Open source, privacy-focused | ⚡⚡ | $ |
| `mistralai/mistral-large` | Fast and accurate | ⚡⚡⚡ | $$ |
| `perplexity/llama-3.1-sonar-large-128k-online` | With web search context | ⚡⚡ | $$ |

See all available models and pricing at [openrouter.ai/models](https://openrouter.ai/models).

**Benefits of OpenRouter:**
- Access to 100+ models from different providers
- Automatic failover and load balancing
- Competitive pricing
- Single API key for multiple providers
- No need to manage multiple API keys

#### Local LLMs (Ollama, LM Studio, etc.)

Run models locally for privacy, cost savings, and offline use. Works with any OpenAI-compatible API.

**Ollama (Recommended for Local):**

1. Install Ollama from [ollama.ai](https://ollama.ai)
2. Start the server and pull a model:
```bash
ollama serve
ollama pull codellama        # Code-specific model
ollama pull llama3.1:70b     # General purpose, high quality
ollama pull mistral          # Fast and efficient
ollama pull deepseek-coder   # Code-focused model
```

3. Configure in `mcp.json`:
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "LLM_BASE_URL": "http://localhost:11434/v1",
        "LLM_MODEL": "codellama"
      }
    }
  }
}
```

**Example: Using Llama 3.1 70B (Best Quality)**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "LLM_BASE_URL": "http://localhost:11434/v1",
        "LLM_MODEL": "llama3.1:70b"
      }
    }
  }
}
```

**Example: Using DeepSeek Coder (Code-Focused)**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "LLM_BASE_URL": "http://localhost:11434/v1",
        "LLM_MODEL": "deepseek-coder"
      }
    }
  }
}
```

**LM Studio:**

1. Download and install [LM Studio](https://lmstudio.ai)
2. Load a model and start the local server
3. Configure in `mcp.json`:
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "LLM_BASE_URL": "http://localhost:1234/v1",
        "LLM_MODEL": "your-model-name"
      }
    }
  }
}
```

**vLLM (High Performance):**

For running models with high throughput:
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "LLM_BASE_URL": "http://localhost:8000/v1",
        "LLM_MODEL": "codellama/CodeLlama-34b-Instruct-hf"
      }
    }
  }
}
```

**Text Generation WebUI:**

```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "LLM_BASE_URL": "http://localhost:5000/v1",
        "LLM_MODEL": "your-model-name"
      }
    }
  }
}
```

**LocalAI:**

```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "LLM_BASE_URL": "http://localhost:8080/v1",
        "LLM_MODEL": "gpt-4"
      }
    }
  }
}
```

**Recommended Local Models for Code Analysis:**
- **CodeLlama** (`codellama`) - Specialized for code, good balance
- **DeepSeek Coder** (`deepseek-coder`) - Excellent for code understanding
- **Llama 3.1 70B** (`llama3.1:70b`) - Best quality, requires more RAM
- **Mistral** (`mistral`) - Fast and efficient
- **StarCoder** (`starcoder`) - Code generation and analysis

**Benefits of Local LLMs:**
- Complete privacy - code never leaves your machine
- No API costs
- Works offline
- No rate limits
- Full control over model selection

#### Anthropic Claude

Direct integration with Anthropic's Claude models.

**Example: Claude 3.5 Sonnet (Recommended)**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "ANTHROPIC_API_KEY": "sk-ant-...",
        "LLM_BASE_URL": "https://api.anthropic.com/v1",
        "LLM_MODEL": "claude-3-5-sonnet-20241022"
      }
    }
  }
}
```

**Example: Claude 3 Opus (Highest Quality)**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "ANTHROPIC_API_KEY": "sk-ant-...",
        "LLM_BASE_URL": "https://api.anthropic.com/v1",
        "LLM_MODEL": "claude-3-opus-20240229"
      }
    }
  }
}
```

**Example: Claude 3 Haiku (Fast & Cost-Effective)**
```json
{
  "mcpServers": {
    "decaguard": {
      "command": "npx",
      "args": ["-y", "deca-guard-mcp-server"],
      "env": {
        "ANTHROPIC_API_KEY": "sk-ant-...",
        "LLM_BASE_URL": "https://api.anthropic.com/v1",
        "LLM_MODEL": "claude-3-haiku-20240307"
      }
    }
  }
}
```

**Available Claude Models:**
- `claude-3-5-sonnet-20241022` - Best balance of quality and speed
- `claude-3-opus-20240229` - Highest quality, slower
- `claude-3-sonnet-20240229` - Good quality, balanced
- `claude-3-haiku-20240307` - Fastest, most cost-effective

### Environment Variables Reference

| Variable | Description | Default |
|----------|-------------|---------|
| `OPENAI_API_KEY` | OpenAI API key | - |
| `OPENROUTER_API_KEY` | OpenRouter API key (takes priority) | - |
| `ANTHROPIC_API_KEY` | Anthropic API key | - |
| `LLM_BASE_URL` | Custom base URL for LLM API | Auto-detected for OpenRouter |
| `LLM_MODEL` | Model name to use | `gpt-4o-mini` or `openai/gpt-4o-mini` (OpenRouter) |

## Troubleshooting

### Server not starting
- Check that Node.js (v18+) is installed: `node --version`
- Verify the command in mcp.json is correct
- Check logs in Cursor's developer console

### Tools not appearing
- Restart Cursor completely
- Verify mcp.json syntax is valid JSON
- Check that API key is set correctly

### Analysis taking too long
- Use a faster model (e.g., gpt-4o-mini)
- Consider analyzing smaller code snippets
- Check your API rate limits

## Development

### Test the server locally
```bash
npm test
```

### Run in development mode (with auto-reload)
```bash
npm run dev
```

## Publishing

For maintainers, to publish a new version to npm:

```bash
npm version patch|minor|major
npm publish
```

The `prepublishOnly` script will automatically verify the package before publishing.

## License
MIT

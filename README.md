# DecaGuard MCP Server

AI-powered code smell detection and security analysis server using the Model Context Protocol (MCP).

## Quick Start

### Option 1: Using npx (Recommended)

No installation required! Use directly via npx:

**Configure Cursor IDE**

Edit `~/.cursor/mcp.json` (create if it doesn't exist):

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

OpenRouter provides access to multiple models from different providers. Get your API key from [openrouter.ai](https://openrouter.ai).

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

**Popular OpenRouter Models:**
- `openai/gpt-4o-mini` - Fast and cost-effective
- `anthropic/claude-3.5-sonnet` - High quality analysis
- `google/gemini-pro-1.5` - Good balance
- `meta-llama/llama-3.1-70b-instruct` - Open source option

See all available models at [openrouter.ai/models](https://openrouter.ai/models).

#### Local LLMs (Ollama, LM Studio, etc.)

Run models locally for privacy and cost savings. Works with any OpenAI-compatible API.

**Ollama:**
```bash
# Install and run Ollama
ollama serve
ollama pull codellama  # or llama2, mistral, etc.
```

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

**LM Studio:**
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

**Other Local Providers:**
- **vLLM**: `http://localhost:8000/v1`
- **Text Generation WebUI**: `http://localhost:5000/v1`
- **LocalAI**: `http://localhost:8080/v1`

#### Anthropic Claude

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

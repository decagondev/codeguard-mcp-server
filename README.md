# CodeGuard MCP Server

AI-powered code smell detection and security analysis server using the Model Context Protocol (MCP).

## Quick Start

### 1. Installation
```bash
mkdir codeguard-mcp-server
cd codeguard-mcp-server
npm init -y
npm install @modelcontextprotocol/sdk openai
```

### 2. Copy Files
- Copy `index.js` to your project root
- Copy `.env.example` to `.env` and add your API key
- Make index.js executable: `chmod +x index.js`

### 3. Configure Cursor IDE
Edit `~/.cursor/mcp.json` (create if it doesn't exist):

```json
{
  "mcpServers": {
    "codeguard": {
      "command": "node",
      "args": ["/absolute/path/to/codeguard-mcp-server/index.js"],
      "env": {
        "OPENAI_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### 4. Restart Cursor
Completely quit and restart Cursor IDE.

### 5. Test
Open any code file in Cursor and ask:
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

**Anthropic Claude:**
```json
"env": {
  "ANTHROPIC_API_KEY": "sk-ant-...",
  "LLM_BASE_URL": "https://api.anthropic.com/v1",
  "LLM_MODEL": "claude-sonnet-4-20250514"
}
```

**Local Ollama:**
```json
"env": {
  "LLM_BASE_URL": "http://localhost:11434/v1",
  "LLM_MODEL": "codellama"
}
```

## Troubleshooting

### Server not starting
- Check that Node.js is installed: `node --version`
- Verify the path in mcp.json is absolute
- Check logs in Cursor's developer console

### Tools not appearing
- Restart Cursor completely
- Verify mcp.json syntax is valid
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

## License
MIT

import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { spawn } from 'child_process';

async function testDecaGuardServer() {
  console.log('🧪 Testing DecaGuard MCP Server...\n');

  // Start the server
  const serverProcess = spawn('node', ['./index.js'], {
    env: { ...process.env },
  });

  // Create client
  const transport = new StdioClientTransport({
    command: 'node',
    args: ['./index.js'],
  });

  const client = new Client(
    {
      name: 'test-client',
      version: '1.0.0',
    },
    {
      capabilities: {},
    }
  );

  try {
    await client.connect(transport);
    console.log('✅ Connected to server\n');

    // List tools
    const tools = await client.listTools();
    console.log('📋 Available tools:');
    tools.tools.forEach((tool) => {
      console.log(`  - ${tool.name}: ${tool.description.substring(0, 80)}...`);
    });
    console.log('');

    // Test code with issues
    const testCode = `
function processUserData(userId, email, password) {
  const API_KEY = "sk-1234567890abcdef";
  const query = "SELECT * FROM users WHERE id = " + userId;
  db.execute(query);
  
  if (email.includes("@")) {
    if (password.length > 8) {
      if (password.includes("!")) {
        console.log(password);
        return true;
      }
    }
  }
  return false;
}
    `.trim();

    // Test security analysis
    console.log('🔒 Testing security analysis...');
    const securityResult = await client.callTool({
      name: 'analyze_security_vulnerabilities',
      arguments: {
        code: testCode,
        language: 'javascript',
        filePath: 'test.js',
      },
    });

    const securityData = JSON.parse(securityResult.content[0].text);
    console.log(`Found ${securityData.summary.totalVulnerabilities} vulnerabilities`);
    console.log(`Security Score: ${securityData.summary.securityScore}/100\n`);

    // Test code smell analysis
    console.log('🔍 Testing code smell analysis...');
    const smellResult = await client.callTool({
      name: 'analyze_code_smells',
      arguments: {
        code: testCode,
        language: 'javascript',
        filePath: 'test.js',
      },
    });

    const smellData = JSON.parse(smellResult.content[0].text);
    console.log(`Found ${smellData.summary.totalIssues} code smells\n`);

    console.log('✅ All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await client.close();
    serverProcess.kill();
  }
}

testDecaGuardServer();

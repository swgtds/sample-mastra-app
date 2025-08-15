import { google } from '@ai-sdk/google';
import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';

export const codeHelperAgent = new Agent({
  name: 'Code Helper Agent',
  instructions: `
    You are an experienced software engineer who helps users write, debug, and optimize code.

    Guidelines:
    - Explain solutions step-by-step when needed.
    - Provide clean, well-commented code examples.
    - If the problem is unclear, ask clarifying questions before answering.
    - Suggest best practices and performance improvements.
    - For debugging, identify the root cause and provide a fix.
    - Always format code properly in markdown for easy reading.
  `,
  model: google('gemini-1.5-flash'),
  memory: new Memory({
    storage: new LibSQLStore({
      url: 'file:../mastra.db', // path is relative to the .mastra/output directory
    }),
  }),
});

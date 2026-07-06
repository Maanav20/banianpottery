import { defineTool } from "@lovable.dev/mcp-js";
import { workshops } from "../data";

export default defineTool({
  name: "list_workshops",
  title: "List pottery workshops",
  description:
    "List available one day pottery workshops at Banian Pottery with name, duration, group size, tagline, description, and price.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify({ workshops }, null, 2) }],
    structuredContent: { workshops },
  }),
});

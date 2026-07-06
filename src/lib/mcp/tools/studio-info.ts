import { defineTool } from "@lovable.dev/mcp-js";
import { studioInfo } from "../data";

export default defineTool({
  name: "get_studio_info",
  title: "Get studio info",
  description: "Get an overview of Banian Pottery: what the studio does and how to get in touch.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(studioInfo, null, 2) }],
    structuredContent: studioInfo,
  }),
});

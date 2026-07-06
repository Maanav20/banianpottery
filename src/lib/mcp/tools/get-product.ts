import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { catalog } from "../data";

export default defineTool({
  name: "get_product",
  title: "Get pottery piece details",
  description: "Get full details for a single pottery piece by its numeric catalog id.",
  inputSchema: {
    id: z.number().int().min(1).describe("Catalog id (1 to 45)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const product = catalog.find((p) => p.id === id);
    if (!product) {
      return { content: [{ type: "text", text: `No product with id ${id}` }], isError: true };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(product, null, 2) }],
      structuredContent: { product },
    };
  },
});

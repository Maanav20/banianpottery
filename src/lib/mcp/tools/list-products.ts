import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { catalog } from "../data";

export default defineTool({
  name: "list_products",
  title: "List pottery catalog",
  description:
    "List handcrafted pottery pieces from the Banian Pottery catalog with name, dimensions, weight, and availability status. Optionally filter by status or search text in the piece name.",
  inputSchema: {
    status: z
      .enum(["available", "sold-out", "defect"])
      .optional()
      .describe("Filter by availability status."),
    search: z
      .string()
      .optional()
      .describe("Case insensitive substring match against the piece name."),
    limit: z
      .number()
      .int()
      .min(1)
      .max(100)
      .optional()
      .describe("Maximum number of items to return. Default 50."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ status, search, limit }) => {
    const needle = search?.trim().toLowerCase();
    const filtered = catalog.filter((p) => {
      if (status && p.status !== status) return false;
      if (needle && !p.name.toLowerCase().includes(needle)) return false;
      return true;
    });
    const items = filtered.slice(0, limit ?? 50);
    return {
      content: [{ type: "text", text: JSON.stringify({ count: items.length, total: filtered.length, items }, null, 2) }],
      structuredContent: { count: items.length, total: filtered.length, items },
    };
  },
});

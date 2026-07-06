import { defineMcp } from "@lovable.dev/mcp-js";
import listProductsTool from "./tools/list-products";
import getProductTool from "./tools/get-product";
import listWorkshopsTool from "./tools/list-workshops";
import studioInfoTool from "./tools/studio-info";

export default defineMcp({
  name: "banian-pottery-mcp",
  title: "Banian Pottery",
  version: "0.1.0",
  instructions:
    "Tools for Banian Pottery: browse the handcrafted ceramics catalog, look up individual pieces, list upcoming pottery workshops, and get studio info and contact details.",
  tools: [listProductsTool, getProductTool, listWorkshopsTool, studioInfoTool],
});

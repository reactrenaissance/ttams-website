import { defineType } from "sanity"

const articleType = defineType ({
    name: "article",
    type: "document",
    title: "Articles",
    fields: [
      { name: "title", type: "string", title: "Title" },
      { name: "content", type: "text", title: "Content" },
      { name: "lastUpdated", type: "datetime", title: "Last Updated" }
    ]
  });
  
  export default articleType;
  
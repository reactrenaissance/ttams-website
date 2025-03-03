import { defineType } from "sanity";

const tariffType = defineType({
    name: "tariff",
    type: "document",
    title: "Tariffs & Fees",
    fields: [
      { name: "service", type: "string", title: "Service Name" },
      { name: "price", type: "number", title: "Price (£)" }
    ]
  });
  
  export default tariffType;
  
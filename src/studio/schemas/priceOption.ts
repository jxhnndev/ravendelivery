export default {
  name: "priceOption",
  title: "Price Option",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "additionalPriceMainPrice",
      title: "Additional Price Without Tax",
      type: "number"
    },
    {
      name: "additionalPriceTax",
      title: "Additional Price Tax",
      type: "number"
    }, 
    {
      name: "additionalPrice",
      title: "Additional Price",
      type: "number"
    } 
  ]
};
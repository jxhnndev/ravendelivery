export default {
  name: "specialOffer",
  title: "Special Offer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        },
    },
    {
        name: 'endDate',
        title: 'Offer end date',
        type: 'date',
        description: "Specify date when this special offer expires",
        validation: (Rule: any) => Rule.required()
    },
    {
        name: 'buttonTitle',
        title: 'Button Title',
        type: 'string',
    },
  ]
};
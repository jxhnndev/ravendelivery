export default {
  name: "allergen",
  title: "Allergen",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "code",
      title: "Code",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    }
  ]
};
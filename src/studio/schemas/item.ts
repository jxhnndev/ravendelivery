export default {
    name: 'item',
    title: 'Item',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'array',
            of: [{type: 'number'}]
        },
        {
            name: 'menuPrice',
            title: 'Daily Menu Price',
            type: 'array',
            of: [{type: 'number'}]
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }]
        },
        {
            name: "allergens",
            title: "Allergens",
            type: "array",
            of: [{ type: "reference", to: { type: "allergen" } }]
        },
        {
            title: 'Featured',
            name: 'featured',
            type: 'boolean',
            description: "Feature this item on landing page"
        },
    ]
}
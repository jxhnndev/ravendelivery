export default {
    name: 'product',
    title: 'Product',
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
            type: 'gallery',
            title: 'Gallery',
            name: 'gallery'
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
            name: "mainPrice",
            title: "Main Price",
            type: "number"
        },
        {
            title: 'Tax',
            name: 'tax',
            type: 'number',
        },
        {
            title: 'Tax Price',
            name: 'taxPrice',
            type: 'number',
        },
        {
            name: "priceOptions",
            title: "Price Options",
            type: "array",
            of: [{ type: "reference", to: { type: "priceOption" } }]
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            title: 'Featured',
            name: 'featured',
            type: 'boolean',
            description: "Feature this product on landing page"
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }]
        },
    ]
}
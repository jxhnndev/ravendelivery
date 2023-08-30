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
            name: "mainPrice",
            title: "Main Price",
            type: "number"
        },
        {
            name: 'tax',
            title: 'Tax',
            type: 'number',
        },
        {
            name: 'mainPriceTaxed',
            title: 'Main Price Taxed',
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
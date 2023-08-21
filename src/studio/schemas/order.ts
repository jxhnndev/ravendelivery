export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
            name: "intent_id",
            title: "Intent ID",
            type: "string",
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            description: "Final Price including shipping and taxes"
        },
        {
            name: 'shippingPrice',
            title: 'shippingPrice',
            type: 'number',
            description: "Shipping price, including shipping tax"
        },
        {
            title: 'Tax',
            name: 'tax',
            type: 'number',
            description: "Total items tax"
        },
        {
            title: 'Tax Price',
            name: 'taxPrice',
            type: 'number',
            description: "Price including taxes, excluding shipping"
        },
        {
            name: 'itemsPrice',
            title: 'itemsPrice',
            type: 'number',
        },
        {
            name: 'paymentMethod',
            title: 'paymentMethod',
            type: 'string',
        },
        {
            name: "products",
            title: "Products",
            type: 'array',
            of: [
                {
                title: 'Order Item',
                type: 'orderItem',
                },
            ],
        },
        {
            title: 'Payment Status',
            name: 'paymentStatus',
            type: 'string',
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string'
        },
        {
            name: 'orderedBy',
            title: 'Ordered By',
            type: 'reference',
            to: { type: 'user' }
        },
        {
            title: 'DeliveredAt',
            name: 'deliveredAt',
            type: 'datetime',
        },
        {
            title: 'Paid Date',
            name: 'paidAt',
            type: 'datetime',
        },
    ]
}
export default {
    name: 'dailyMenu',
    title: 'Daily Menu',
    type: 'document',
    fields: [
        {
            name: 'day',
            title: 'Day',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'day',
                maxLength: 90,
            }
        },
        {
            name: "foods",
            title: "Foods",
            type: "array",
            of: [{ type: "reference", to: { type: "item" } }]
        },
        {
            name: 'message',
            title: 'Message',
            type: 'string',
        },
    ]
}
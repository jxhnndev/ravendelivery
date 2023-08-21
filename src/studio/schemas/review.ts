import { CommentIcon } from '@sanity/icons'

export default {
    name: 'review',
    type: 'document',
    title: 'Review',
    icon: CommentIcon,
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        title: 'Approved',
        name: 'approved',
        type: 'boolean',
        description: "Reviews won't show on the site without approval"
      },   
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        options: {
          list: [
            1, 2, 3, 4, 5
          ]
        },
        layout: 'radio'
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'text',
      },
      {
        name: 'product',
        type: 'reference',
        to: [
          {type: 'product'}
        ]
      }
    ],
    preview: {
      select: {
        name: 'name',
        comment: 'comment',
        product: 'product.name'
      },
      prepare({name, comment, product}: any) {
        return {
          title: `${name} on ${product}`,
          subtitle: comment
        }
      }
    }
  }
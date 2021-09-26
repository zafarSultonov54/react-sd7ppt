import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('Product', {
  title: 'Product',
  description: 'A product.',

  attributes: {
    title: {
      title: 'Title',
    },
    description: {
      title: 'Description',
    },
    orderCode: {
      title: 'Order code',
      description: 'Must start with model number',
    },
    price: {
      title: 'Price in USD',
    },
    tags: {
      title: 'Tags',
    },
    image: {
      title: 'Image',
    },
  },

  properties: ['title', 'description', 'orderCode', 'price', 'tags', 'image'],
  descriptionForContent: (obj) => obj.get('orderCode'),
  hideInSelectionDialogs: true,
});

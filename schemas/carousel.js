// schema.js

export default {
  name: 'carousel',
  type: 'document',
  title: 'Carousel',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'carouselImage',
          type: 'object',
          title: 'Carousel Image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'imageFile',
              type: 'image',
              title: 'Image File',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'imageFileMobile',
              type: 'image',
              title: 'Image File (Mobile)',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}

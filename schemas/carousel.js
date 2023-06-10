export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'carouselImage',
          title: 'Carousel Image',
          type: 'object',
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'imageFile',
              title: 'Image File',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'resolutions',
              title: 'Resolutions',
              type: 'array',
              of: [
                {
                  type: 'string',
                  options: {
                    list: [
                      {title: '640', value: '640w'},
                      {title: '768', value: '768w'},
                      {title: '1024', value: '1024w'},
                      {title: '1280', value: '1280w'},
                    ],
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              media: 'imageFile',
            },
          },
        },
      ],
    },
  ],
}

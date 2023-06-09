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
              fields: [
                {
                  name: 'resolutions',
                  type: 'array',
                  title: 'Resolutions',
                  of: [
                    {
                      type: 'string',
                      title: 'Resolution',
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
            },
          ],
        },
      ],
    },
  ],
}

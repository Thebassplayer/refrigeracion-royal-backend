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
                          {title: '640', value: '640'},
                          {title: '768', value: '768'},
                          {title: '1024', value: '1024'},
                          {title: '1280', value: '1280'},
                        ],
                      },
                    },
                  ],
                },
              ],
              preview: {
                select: {
                  imageUrl: 'asset.url',
                  resolutions: 'resolutions',
                },
                prepare(selection) {
                  const {imageUrl, resolutions} = selection
                  const resolution = resolutions && resolutions.length > 0 ? resolutions[0] : null
                  const url = imageUrl && resolution ? `${imageUrl}?w=${resolution}w` : imageUrl

                  return {
                    title: url,
                    imageUrl: url,
                  }
                },
              },
            },
          ],
        },
      ],
    },
  ],
}

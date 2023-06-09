export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Carousel Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Carousel Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Carousel Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

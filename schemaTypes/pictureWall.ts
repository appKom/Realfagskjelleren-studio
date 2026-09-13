import {defineField, defineType} from 'sanity'

export const pictureWallType = defineType({
  name: 'pictureWall',
  title: 'Picture wall',
  type: 'document',

  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',

      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              description: 'Describe the image for accessibility',
              validation: (Rule) => Rule.required(),
            }),
          ],

          preview: {
            select: {
              title: 'alt',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Picture wall',
      }
    },
  },
})
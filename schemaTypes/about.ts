import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',

  fields: [
    defineField({
      name: 'introTitle',
      title: 'Intro title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'introSubtitle',
      title: 'Intro subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'introText',
      title: 'Intro text',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'introImage',
      title: 'Intro image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'introImageAlt',
      title: 'Intro image alt text',
      type: 'string',
      description: 'Describe the image for accessibility',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'historyTitle',
      title: 'History title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'historyText',
      title: 'History text',
      type: 'text',
      rows: 15,
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      media: 'introImage',
    },
    prepare({media}) {
      return {
        title: 'About',
        media,
      }
    },
  },
})
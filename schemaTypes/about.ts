import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',

  fields: [
    defineField({
      name: 'text',
      title: 'About text',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required(),
    }),
  ],
})
import {defineField, defineType} from 'sanity'

export const eventType = defineType({
	name: 'event',
	title: 'Event',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'date',
			title: 'Date & Time',
			type: 'datetime',
			description: 'Format: YYYY-MM-DD HH:mm',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			initialValue: 'Info coming soon...',
			validation: (Rule) => Rule.required(),
		}),		
		defineField({
			name: 'coverImage',
			title: 'Image',
			type: 'image',
			options: {hotspot: true},
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description: "Forms the end of the event URL. Must be unique.",
			options: {source: 'title', maxLength: 96},
			validation: (Rule) => Rule.required(),
		}),
	],
})

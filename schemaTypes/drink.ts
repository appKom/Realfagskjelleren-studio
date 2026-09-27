import {defineField, defineType} from 'sanity'

export const drinkType = defineType({
	name: 'Drinks',
	title: 'Drink',
	type: 'document',
	fields: [
        defineField({
			name: 'Realfagsimage',
			title: 'Imagerealfag',
			type: 'image',
			options: {hotspot: true},
		}),
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'pris',
			title: 'Pris',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			initialValue: 'Beskrivelse kommer senere...',
			validation: (Rule) => Rule.required(),
		}),		
		
	
	
	],
})

import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'homeRecognitions',
  title: 'Home Recognitions Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Ej: Nuestros Reconocimientos'
    }),
    defineField({
      name: 'items',
      title: 'Awards & Partners',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'title', title: 'Name', type: 'string' },
            { name: 'meta', title: 'Date/Details', type: 'string', description: 'Ej: Noviembre de 2017' },
            { name: 'description', title: 'Short Description', type: 'text' },
            { name: 'image', title: 'Logo', type: 'image', options: { hotspot: true } }
          ]
        })
      ]
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Recognitions Section',
        subtitle: 'Configuración de reconocimientos y socios'
      }
    }
  }
})

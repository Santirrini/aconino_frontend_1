import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'homePrograms',
  title: 'Home Programs Section',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Ej: 35 años trabajando por mejorar la calidad de vida de niños, niñas y jóvenes en condición de discapacidad.'
    }),
    defineField({
      name: 'clinicalFocus',
      title: 'Clinical Focus',
      type: 'text',
      description: 'Ej: Tratamientos y terapias con el Modelo de Práctica Contemporáneo de Neurodesarrollo y protocolo intensivo PediaSuit.'
    }),
    defineField({
      name: 'familySupport',
      title: 'Family Support',
      type: 'string',
      description: 'Ej: Orientación y apoyo a familias.'
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
      description: 'Ej: CONTÁCTANOS'
    }),
    defineField({
      name: 'items',
      title: 'Program Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'url', title: 'URL', type: 'string' }
          ]
        })
      ]
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Programs Section',
        subtitle: 'Configuración de la sección de programas'
      }
    }
  }
})

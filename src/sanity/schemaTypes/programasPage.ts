import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'programasPage',
  title: 'Página de Programas',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Programas'
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          rows: 2,
          initialValue: 'Conoce nuestros programas de habilitación y rehabilitación integral.'
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Imagen de Fondo',
          type: 'image',
          options: { hotspot: true }
        })
      ]
    }),
    defineField({
      name: 'programs',
      title: 'Programas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título del Programa',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Descripción',
              type: 'text',
              rows: 3
            }),
            defineField({
              name: 'ageRange',
              title: 'Rango de Edad',
              type: 'string',
              description: 'Ej: 0-3 años'
            }),
            defineField({
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: 'title',
                maxLength: 96
              }
            }),
            defineField({
              name: 'image',
              title: 'Imagen',
              type: 'image',
              options: { hotspot: true }
            })
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'cta',
      title: 'CTA Final',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: '¿Quieres saber más sobre nuestros programas?'
        }),
        defineField({
          name: 'buttonText',
          title: 'Texto del Botón',
          type: 'string',
          initialValue: 'CONTÁCTANOS'
        }),
        defineField({
          name: 'buttonLink',
          title: 'Enlace del Botón',
          type: 'string',
          initialValue: '/contacto'
        })
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Página de Programas',
        subtitle: 'Contenido editable de la página de programas'
      }
    }
  }
})

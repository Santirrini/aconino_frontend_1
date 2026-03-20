import { defineType, defineField, defineArrayMember } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export default defineType({
  name: 'homePage',
  title: 'Home Page - Página Principal',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero - Sección Principal',
      type: 'object',
      fields: [
        defineField({
          name: 'backgroundType',
          title: 'Tipo de Fondo',
          type: 'string',
          options: {
            list: [
              { title: 'Imagen', value: 'image' },
              { title: 'Video', value: 'video' }
            ],
            layout: 'radio'
          },
          initialValue: 'image'
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Imagen de Fondo',
          type: 'image',
          options: { hotspot: true },
          hidden: ({ parent }: { parent?: { backgroundType?: string } }) => parent?.backgroundType === 'video'
        }),
        defineField({
          name: 'backgroundVideo',
          title: 'Video de Fondo',
          type: 'file',
          options: { accept: 'video/*' },
          hidden: ({ parent }: { parent?: { backgroundType?: string } }) => parent?.backgroundType === 'image' || !parent?.backgroundType
        }),
        defineField({
          name: 'slogan',
          title: 'Slogan',
          type: 'string',
          description: 'Ej: 35 años apoyando la inclusión'
        }),
        defineField({
          name: 'impact',
          title: 'Texto de Impacto',
          type: 'string',
          description: 'Ej: +35 años apoyando la inclusión!'
        }),
      ]
    }),
    defineField({
      name: 'programs',
      title: 'Sección de Programas',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          description: 'Ej: 35 años trabajando por mejorar la calidad de vida de niños, niñas y jóvenes en condición de discapacidad.'
        }),
        defineField({
          name: 'clinicalFocus',
          title: 'Enfoque Clínico',
          type: 'text',
          description: 'Ej: Tratamientos y terapias con el Modelo de Práctica Contemporáneo de Neurodesarrollo y protocolo intensivo PediaSuit.'
        }),
        defineField({
          name: 'familySupport',
          title: 'Apoyo Familiar',
          type: 'string',
          description: 'Ej: Orientación y apoyo a familias.'
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Texto del CTA',
          type: 'string',
          description: 'Ej: CONTÁCTANOS'
        }),
        defineField({
          name: 'items',
          title: 'Programas',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                { name: 'title', title: 'Título', type: 'string' },
                { name: 'description', title: 'Descripción', type: 'text' },
                { name: 'image', title: 'Imagen', type: 'image', options: { hotspot: true } },
                { name: 'url', title: 'URL', type: 'string' }
              ]
            })
          ]
        }),
      ]
    }),
    defineField({
      name: 'news',
      title: 'Sección de Noticias',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          description: 'Ej: Últimas noticias'
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Texto del CTA',
          type: 'string',
          description: 'Ej: VER TODO'
        }),
      ]
    }),
    defineField({
      name: 'recognitions',
      title: 'Sección de Reconocimientos',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          description: 'Ej: Nuestros Reconocimientos'
        }),
        defineField({
          name: 'items',
          title: 'Reconocimientos',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                { name: 'title', title: 'Nombre', type: 'string' },
                { name: 'meta', title: 'Fecha/Detalles', type: 'string', description: 'Ej: Noviembre de 2017' },
                { name: 'description', title: 'Descripción', type: 'text' },
                { name: 'image', title: 'Logo', type: 'image', options: { hotspot: true } }
              ]
            })
          ]
        }),
      ]
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
        subtitle: 'Configuración completa de la página principal'
      }
    }
  }
})
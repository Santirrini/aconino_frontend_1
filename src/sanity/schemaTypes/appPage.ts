import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'appPage',
  title: 'Página de App',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSlides',
      title: 'Slides del Hero',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Imagen',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string',
            }),
            defineField({
              name: 'overlayOpacity',
              title: 'Opacidad del Overlay',
              type: 'number',
              initialValue: 50,
              validation: (Rule) => Rule.min(0).max(100),
            }),
          ],
          preview: {
            select: { title: 'alt', media: 'image' },
            prepare({ title, media }) {
              return { title: title || 'Slide sin descripción', subtitle: 'Imagen del hero', media }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'infoSection',
      title: 'Sección Info',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Título', type: 'string', initialValue: '¿Qué es aconiñoapp?' }),
        defineField({ name: 'text1', title: 'Texto Principal', type: 'text', rows: 3 }),
        defineField({ name: 'text2', title: 'Texto Secundario', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'quoteSection',
      title: 'Sección Cita',
      type: 'object',
      fields: [
        defineField({ name: 'quote', title: 'Cita', type: 'text', rows: 4 }),
        defineField({ name: 'author', title: 'Autor', type: 'string' }),
        defineField({
          name: 'avatar',
          title: 'Avatar',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'benefitsSection',
      title: 'Sección Beneficios',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Título', type: 'string', initialValue: '¿Cuáles son los beneficios de nuestra aplicación?' }),
        defineField({
          name: 'benefits',
          title: 'Lista de Beneficios',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'downloadUrl', title: 'URL de Descarga (Google Play)', type: 'url' }),
        defineField({
          name: 'phoneImage',
          title: 'Imagen del Teléfono',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'resultsSection',
      title: 'Sección Resultados',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Título', type: 'string', initialValue: '¿Qué resultados puedo esperar?' }),
        defineField({ name: 'text1', title: 'Texto Principal', type: 'text', rows: 3 }),
        defineField({ name: 'text2', title: 'Texto Secundario', type: 'text', rows: 3 }),
        defineField({ name: 'videoUrl', title: 'URL del Video (YouTube)', type: 'url' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Página de App', subtitle: 'Configuración de la página de la aplicación' }
    },
  },
})

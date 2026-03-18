import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'curso',
  title: 'Curso',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Curso',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dates',
      title: 'Fechas',
      type: 'string',
      description: 'Ej: "31 octubre - 3 noviembre 2024"',
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      type: 'string',
      description: 'Ej: "Bogotá, Colombia"',
    }),
    defineField({
      name: 'countryCode',
      title: 'Código de País',
      type: 'string',
      description: 'Código ISO de 2 letras: CO, VE, PE, EC, MX, AR, BR, CL, US, ES',
    }),
    defineField({
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          { title: 'Finalizado', value: 'finalizado' },
          { title: 'Próximamente', value: 'proximamente' },
          { title: 'Inscripciones Abiertas', value: 'inscripciones_abiertas' },
        ],
        layout: 'radio',
      },
      initialValue: 'proximamente',
    }),
    defineField({
      name: 'description',
      title: 'Descripción Corta',
      type: 'text',
      rows: 3,
      description: 'Descripción para la tarjeta del curso (visible en el grid)',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Imagen Destacada',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'year',
      title: 'Año',
      type: 'number',
      description: 'Año del curso para agrupar en el grid',
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor Principal',
      type: 'string',
    }),
    defineField({
      name: 'benefits',
      title: 'Beneficios',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista de beneficios (ej: "Material de apoyo incluido")',
    }),
    defineField({
      name: 'body',
      title: 'Contenido Rico',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Pie de foto',
            },
          ],
        },
      ],
      description: 'Contenido de la página de detalle del curso',
    }),
    defineField({
      name: 'detailUrl',
      title: 'URL Externa',
      type: 'url',
      description: 'Si el curso es externo, link a la página del curso',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Destacado',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'dates',
      media: 'featuredImage',
    },
  },
})
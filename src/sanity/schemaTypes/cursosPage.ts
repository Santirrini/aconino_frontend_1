import { defineType, defineField } from 'sanity'

const iconOptions = [
  { title: 'Cerebro', value: 'FaBrain' },
  { title: 'Globo', value: 'FaGlobeAmericas' },
  { title: 'Manos', value: 'FaHandsHelping' },
  { title: 'Graduación', value: 'FaGraduationCap' },
]

const colorOptions = [
  { title: 'Azul', value: 'from-blue-500 to-indigo-600' },
  { title: 'Verde', value: 'from-emerald-400 to-teal-600' },
  { title: 'Ámbar', value: 'from-amber-400 to-orange-500' },
  { title: 'Púrpura', value: 'from-purple-500 to-pink-600' },
]

export default defineType({
  name: 'cursosPage',
  title: 'Página de Cursos',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Título del Hero',
      type: 'string',
      initialValue: 'Cursos y Capacitaciones',
    }),
    defineField({
      name: 'heroSlides',
      title: 'Slides del Carrusel',
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
              return { title: title || 'Slide sin descripción', subtitle: 'Imagen del carrusel', media }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'historiaTitle',
      title: 'Título de Historia',
      type: 'string',
      initialValue: 'Historia del Neurodesarrollo Bobath',
    }),
    defineField({
      name: 'historiaSubtitle',
      title: 'Subtítulo de Historia',
      type: 'string',
      initialValue: 'Un recorrido de innovación y esperanza en la neurorehabilitación',
    }),
    defineField({
      name: 'historiaEvents',
      title: 'Eventos del Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'year', title: 'Año/Fase', type: 'string' }),
            defineField({ name: 'title', title: 'Título', type: 'string' }),
            defineField({ name: 'description', title: 'Descripción', type: 'text' }),
            defineField({
              name: 'icon',
              title: 'Icono',
              type: 'string',
              options: { list: iconOptions },
            }),
            defineField({
              name: 'color',
              title: 'Color',
              type: 'string',
              options: { list: colorOptions },
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'year' },
          },
        },
      ],
    }),
    defineField({
      name: 'instructorsTitle',
      title: 'Título de Instructores',
      type: 'string',
      initialValue: 'Aconiño agradece',
    }),
    defineField({
      name: 'instructorsIntro',
      title: 'Texto Introductorio de Instructores',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'instructorGroups',
      title: 'Grupos de Instructores',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'organization', title: 'Organización', type: 'string' }),
            defineField({
              name: 'instructors',
              title: 'Instructores',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: {
            select: { title: 'organization' },
            prepare({ title }) {
              return { title }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA Final',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({ name: 'description', title: 'Descripción', type: 'text' }),
        defineField({ name: 'buttonText', title: 'Texto del Botón', type: 'string' }),
        defineField({ name: 'buttonLink', title: 'Link del Botón', type: 'url' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Página de Cursos', subtitle: 'Configuración completa de la página' }
    },
  },
})

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'cursosHero',
  title: 'Hero de Cursos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      description: 'Ej: Cursos y Capacitaciones',
      initialValue: 'Cursos y Capacitaciones'
    }),
    defineField({
      name: 'slides',
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
              description: 'Sube la imagen para este slide (se recomienda 1920x1080 o mayor)'
            }),
            defineField({
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string',
              description: 'Descripción de la imagen para accesibilidad'
            }),
            defineField({
              name: 'overlayOpacity',
              title: 'Opacidad del Overlay',
              type: 'number',
              description: 'Opacidad de la capa oscura sobre la imagen (0-100)',
              initialValue: 50,
              validation: (Rule) => Rule.min(0).max(100)
            })
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'image'
            },
            prepare({ title, media }) {
              return {
                title: title || 'Slide sin descripción',
                subtitle: 'Imagen del carrusel',
                media
              }
            }
          }
        }
      ],
      description: 'Agrega las imágenes que quieres mostrar en el carrusel del Hero de Cursos'
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero de Cursos',
        subtitle: 'Configuración del carrusel de la página de cursos'
      }
    }
  }
})

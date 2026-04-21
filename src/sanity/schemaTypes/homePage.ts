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
          description: 'Ej: +35 años apoiando la inclusión!'
        }),
        defineField({
          name: 'heroSlides',
          title: 'Fotos del Carrusel del Hero',
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
                  title: 'Opacidad del Overlay (0-100)',
                  type: 'number',
                  initialValue: 50,
                  validation: (Rule: any) => Rule.min(0).max(100),
                }),
              ],
              preview: {
                select: { title: 'alt', media: 'image' },
                prepare({ title, media }: { title?: string; media?: any }) {
                  return { title: title || 'Slide sin descripción', subtitle: 'Imagen del carrusel', media }
                },
              },
            },
          ],
          description: 'Agrega hasta 3 fotos para el carrusel del Hero. Si se agregan, se usará el carrusel en vez de la imagen única.',
        }),
      ]
    }),
    defineField({
      name: 'about',
      title: 'Sección About - Sobre Nosotros',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          initialValue: '35 años trabajando por mejorar la calidad de vida de niños, niñas y jóvenes en condición de discapacidad'
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
          initialValue: 'Tratamientos y terapias con el Modelo de práctica contemporáneo de Neurodesarrollo y protocolo intensivo Pediasuit Orientación y apoyo a las familias'
        }),
        defineField({
          name: 'image',
          title: 'Imagen Principal',
          type: 'image',
          options: { hotspot: true },
          description: 'Imagen que aparecerá al lado de los textos de la sección.'
        }),
        defineField({
          name: 'experienceLabel',
          title: 'Etiqueta de Experiencia (Ej: Tradición)',
          type: 'string',
          initialValue: 'Tradición'
        }),
        defineField({
          name: 'experienceValue',
          title: 'Valor de Experiencia (Ej: 35 AÑOS)',
          type: 'string',
          initialValue: '35 AÑOS'
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Texto del Botón',
          type: 'string',
          initialValue: 'CONTÁCTANOS'
        }),
        defineField({
          name: 'ctaLink',
          title: 'Enlace del Botón',
          type: 'string',
          initialValue: '/contactanos'
        }),
      ]
    }),
    defineField({
      name: 'programs',
      title: 'Sección de Programas',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Título de la Sección',
          type: 'string',
          initialValue: 'Nuestros Programas'
        }),
        defineField({
          name: 'sectionDescription',
          title: 'Descripción de la Sección',
          type: 'text',
          initialValue: 'Programas terapéuticos especializados para el desarrollo integral de niños y jóvenes'
        }),
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
                { name: 'category', title: 'Categoría/Edad', type: 'string', description: 'Ej: 0 a 3 años, 3 a 14 años' },
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
    defineField({
      name: 'testimonials',
      title: 'Sección de Testimonios',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          description: 'Ej: Lo que dicen nuestras familias'
        }),
        defineField({
          name: 'items',
          title: 'Testimonios',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                { name: 'name', title: 'Nombre', type: 'string', description: 'Ej: María, mamá de Sofía' },
                { name: 'quote', title: 'Testimonio', type: 'text', description: 'Texto del testimonio' },
                { name: 'image', title: 'Foto', type: 'image', options: { hotspot: true } }
              ]
            })
          ]
        }),
      ]
    }),
    defineField({
      name: 'cta',
      title: 'Sección CTA (Fondo Azul)',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título CTA',
          type: 'string',
          initialValue: '35 años apoiando la inclusión'
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Texto del Botón',
          type: 'string',
          initialValue: 'CONTÁCTANOS'
        }),
        defineField({
          name: 'ctaLink',
          title: 'Enlace del Botón',
          type: 'string',
          initialValue: '/contactanos'
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Imagen de Fondo',
          type: 'image',
          options: { hotspot: true },
          description: 'Sube aquí la imagen de fondo para esta sección. Se recomienda una imagen azul o con overlay azul.'
        }),
      ]
    }),
    defineField({
      name: 'impact',
      title: 'Sección de Impacto',
      type: 'object',
      fields: [
        defineField({
          name: 'headerTitle',
          title: 'Título del Header',
          type: 'string',
          description: 'Ej: Tu apoyo transforma vidas',
          initialValue: 'Tu apoyo transforma vidas'
        }),
        defineField({
          name: 'headerDescription',
          title: 'Descripción del Header',
          type: 'text',
          description: 'Texto que aparece debajo del título',
          initialValue: 'Cada aporte cuenta. Con tu ayuda logramos que más niños reciban la atención terapéutica que necesitan para cumplir sus sueños.'
        }),
        defineField({
          name: 'ctaButtonText',
          title: 'Texto del Botón CTA',
          type: 'string',
          initialValue: 'Ver más'
        }),
        defineField({
          name: 'stats',
          title: 'Estadísticas',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                { name: 'value', title: 'Valor (Ej: 150+)', type: 'string' },
                { name: 'label', title: 'Etiqueta (Ej: Niños atendidos)', type: 'string' }
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
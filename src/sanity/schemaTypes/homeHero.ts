import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeHero',
  title: 'Home Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'backgroundType',
      title: 'Background Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' }
        ],
        layout: 'radio'
      },
      initialValue: 'image'
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Sube aquí la imagen de fondo para el Hero.',
      hidden: ({ parent }: { parent?: { backgroundType?: string } }) => parent?.backgroundType === 'video'
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'file',
      options: { accept: 'video/*' },
      description: 'Video de fondo si el tipo es Video.',
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
      title: 'Impact Text',
      type: 'string',
      description: 'Ej: +35 años apoyando la inclusión!'
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Hero Section',
        subtitle: 'Configuración del Hero de la página principal'
      }
    }
  }
})

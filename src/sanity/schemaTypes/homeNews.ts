import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeNews',
  title: 'Home News Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Ej: Últimas noticias'
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
      description: 'Ej: VER TODO'
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home News Section',
        subtitle: 'Configuración de la sección de noticias'
      }
    }
  }
})

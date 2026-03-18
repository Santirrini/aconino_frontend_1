import { defineType, defineField } from 'sanity'
import { MenuIcon } from '@sanity/icons'

export default defineType({
  name: 'navigation',
  title: 'Navegación del Sitio',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      initialValue: 'Main Navigation'
    }),
    defineField({
      name: 'navItems',
      title: 'Elementos de Navegación',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Etiqueta', type: 'string' }),
            defineField({ name: 'href', title: 'URL', type: 'string' }),
            defineField({ 
              name: 'hasDropdown', 
              title: 'Tiene Submenú', 
              type: 'boolean',
              initialValue: false 
            }),
            defineField({
              name: 'subLinks',
              title: 'Subenlaces',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Etiqueta', type: 'string' },
                    { name: 'href', title: 'URL', type: 'string' }
                  ]
                }
              ]
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'ctaButton',
      title: 'Botón CTA del Header',
      type: 'object',
      fields: [
        { name: 'label', title: 'Etiqueta', type: 'string', description: 'Ej: PAGO EN LÍNEA' },
        { name: 'href', title: 'URL', type: 'string' }
      ]
    })
  ]
})

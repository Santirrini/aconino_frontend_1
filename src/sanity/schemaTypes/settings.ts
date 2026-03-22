import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export default defineType({
  name: 'settings',
  title: 'Global Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
        description: 'Ej: acn - Asociación Aconiño',
        options: { hotspot: true },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'headerCTA',
        title: 'Header CTA Button',
        type: 'string',
        description: 'Ej: PAGO EN LÍNEA'
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number (PBX)',
      type: 'string',
      description: 'Ej: (601) 6601475',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mobilePhone',
      title: 'Mobile Phone',
      type: 'string',
      description: 'Ej: 313 391 0760'
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      description: 'Botón Escríbenos',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
        name: 'footerInfo',
        title: 'Footer Additional Info',
        type: 'object',
        fields: [
            { name: 'appDownload', type: 'string', description: 'Ej: Enlace disponible en Google Play para la App' },
            { name: 'controlEntity', type: 'string', description: 'Ej: Vigilado por la Superintendencia de Salud (Supersalud)' },
            { name: 'copyright', type: 'string', description: 'Ej: 1990-2024 Asociación Aconiño. Todos los derechos reservados.' },
            { name: 'designBy', type: 'string', description: 'Ej: Design by Dyerapita.' }
        ]
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'string' },
            { name: 'url', type: 'url' }
          ]
        }
      ]
    }),
    defineField({
        name: 'footerLinks',
        title: 'Footer Links (Legal/Transparencia)',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'label', type: 'string' },
              { name: 'url', type: 'string' }
            ]
          }
        ]
      }),
      defineField({
        name: 'appDownloadUrl',
        title: 'URL de Descarga App (Google Play)',
        type: 'url',
        description: 'Enlace disponible en Google Play para la App'
      }),
  ],
})

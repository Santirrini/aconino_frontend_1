import { defineType, defineField } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export default defineType({
  name: 'documentoLegal',
  title: 'Documento Legal',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título del Documento',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'ESAL', value: 'esal' },
          { title: 'Transparencia', value: 'transparencia' },
          { title: 'Protección de Datos Personales', value: 'proteccion_datos' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'archivo',
      title: 'Archivo PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
    defineField({
      name: 'enlaceExterno',
      title: 'Enlace Externo',
      type: 'url',
      description: 'Alternativa al archivo PDF si el documento está en otra URL',
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción breve',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'orden',
      title: 'Orden de visualización',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'categoria',
    },
  },
})
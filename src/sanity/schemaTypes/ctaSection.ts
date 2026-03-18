import { defineType, defineField } from 'sanity'
import { BillIcon } from '@sanity/icons'

export default defineType({
  name: 'ctaSection',
  title: 'CTA Section (Fondo Azul)',
  type: 'document',
  icon: BillIcon,
  fields: [
    defineField({ 
       name: 'title', 
       title: 'Título CTA', 
       type: 'string', 
       initialValue: '35 años apoyando la inclusión' 
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
      title: 'Imagen de Fondo (hero-background-blue)',
      type: 'image', 
      options: { hotspot: true }, 
      description: 'Sube aquí la imagen de fondo para esta sección. Se recomienda una imagen azul o con overlay azul.',
    }),
  ],
})

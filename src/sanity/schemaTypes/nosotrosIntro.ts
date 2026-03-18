import { defineType, defineField } from 'sanity'
import { InfoOutlineIcon } from '@sanity/icons'

export default defineType({
  name: 'nosotrosIntro',
  title: 'Nosotros Intro (Quienes Somos - Identidad)',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    defineField({ 
       name: 'subtitle', 
       title: 'Subtítulo (Ej: Historia Aconiño)', 
       type: 'string', 
       initialValue: 'Historia Aconiño' 
    }),
    defineField({ 
       name: 'title', 
       title: 'Título (Ej: Nuestra Identidad)', 
       type: 'string', 
       initialValue: 'Nuestra Identidad' 
    }),
    defineField({ 
      name: 'image', 
      title: 'Imagen Principal',
      type: 'image', 
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
        }
      ]
    }),
    defineField({ 
       name: 'description', 
       title: 'Descripción (Párrafos)', 
       type: 'array', 
       of: [{ type: 'block' }],
       description: 'Contenido de texto de la sección.'
    }),
    defineField({ 
       name: 'stats', 
       title: 'Estadísticas', 
       type: 'array',
       of: [
         {
           type: 'object',
           fields: [
             { name: 'value', type: 'string', title: 'Valor (Ej: +30)' },
             { name: 'label', type: 'string', title: 'Etiqueta (Ej: Años de Exp.)' },
             { name: 'color', type: 'string', title: 'Color (secondary, accent)', options: { list: ['secondary', 'accent'] } }
           ]
         }
       ]
    }),
  ],
})

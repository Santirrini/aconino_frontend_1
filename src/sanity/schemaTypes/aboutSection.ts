import { defineType, defineField } from 'sanity'
import { InfoOutlineIcon } from '@sanity/icons'

export default defineType({
  name: 'aboutSection',
  title: 'About Section (Sobre nosotros)',
  type: 'document',
  icon: InfoOutlineIcon,
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
  ],
})

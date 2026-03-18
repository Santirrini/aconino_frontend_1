import { defineType, defineField } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export default defineType({
  name: 'quienesSomos',
  title: 'Quiénes Somos - Página Completa',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'identidad',
      title: 'Nuestra Identidad',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Historia Aconiño'
        }),
        defineField({
          name: 'title',
          title: 'Título',
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
          title: 'Descripción',
          type: 'array',
          of: [{ type: 'block' }],
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
                { name: 'color', type: 'string', title: 'Color', options: { list: ['secondary', 'accent'] } }
              ]
            }
          ]
        }),
      ]
    }),
    defineField({
      name: 'mision',
      title: 'Nuestra Misión',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Nuestro Propósito'
        }),
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Misión'
        }),
        defineField({
          name: 'image',
          title: 'Imagen',
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
          title: 'Descripción',
          type: 'array',
          of: [{ type: 'block' }],
        }),
      ]
    }),
    defineField({
      name: 'vision',
      title: 'Visión',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Nuestro Futuro'
        }),
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Visión'
        }),
        defineField({
          name: 'image',
          title: 'Imagen',
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
          name: 'visionText',
          title: 'Visión - Texto Principal',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'visionTextSecondary',
          title: 'Visión - Texto Secundario',
          type: 'text',
          rows: 4,
        }),
      ]
    }),
    defineField({
      name: 'historia',
      title: 'Historia',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Nuestro Legado'
        }),
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Historia'
        }),
        defineField({
          name: 'image',
          title: 'Imagen',
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
          name: 'events',
          title: 'Eventos Históricos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'year', type: 'string', title: 'Año' },
                { name: 'title', type: 'string', title: 'Título' },
                { name: 'description', type: 'text', title: 'Descripción', rows: 3 },
              ]
            }
          ]
        }),
      ]
    }),
    defineField({
      name: 'hero',
      title: 'Hero - Sección Principal',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Conócenos'
        }),
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Quiénes Somos'
        }),
        defineField({
          name: 'image',
          title: 'Imagen de Fondo',
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
      ]
    }),
    defineField({
      name: 'fundadores',
      title: 'Fundadores',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Nombre',
              type: 'string',
            }),
            defineField({
              name: 'role',
              title: 'Rol/Descripción',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Foto',
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
          ]
        }
      ]
    }),
    defineField({
      name: 'semillas',
      title: 'Semillas - Niños del Programa',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Nombre',
              type: 'string',
            }),
            defineField({
              name: 'age',
              title: 'Edad',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Foto',
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
          ]
        }
      ]
    }),
    defineField({
      name: 'junta',
      title: 'Junta Directiva',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Conoce a quienes lideran'
        }),
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Junta Directiva'
        }),
        defineField({
          name: 'photo',
          title: 'Foto Grupal',
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
          name: 'roles',
          title: 'Cargos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'position', type: 'string', title: 'Cargo' },
                { 
                  name: 'people', 
                  title: 'Personas', 
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        { name: 'name', type: 'string', title: 'Nombre' },
                        { name: 'description', type: 'text', title: 'Descripción', rows: 3 },
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        }),
      ]
    }),
    defineField({
      name: 'equipo',
      title: 'Equipo Terapéutico',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Nuestro Equipo'
        }),
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Equipo de Trabajo'
        }),
        defineField({
          name: 'image',
          title: 'Foto del Equipo',
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
      ]
    }),
    defineField({
      name: 'admin',
      title: 'Administración',
      type: 'object',
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Gestión Administrative'
        }),
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Administración'
        }),
        defineField({
          name: 'roles',
          title: 'Cargos Administrativos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'position', type: 'string', title: 'Cargo' },
                { 
                  name: 'people', 
                  title: 'Personas', 
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        { name: 'name', type: 'string', title: 'Nombre' },
                        { name: 'description', type: 'text', title: 'Descripción', rows: 3 },
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        }),
      ]
    }),
  ],
})

import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'programasPage',
  title: 'Página de Programas',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Programas'
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          rows: 2,
          initialValue: 'Conoce nuestros programas de habilitación y rehabilitación integral.'
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Imagen de Fondo',
          type: 'image',
          options: { hotspot: true }
        })
      ]
    }),
    defineField({
      name: 'programs',
      title: 'Programas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título del Programa',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Descripción',
              type: 'text',
              rows: 3
            }),
            defineField({
              name: 'ageRange',
              title: 'Rango de Edad',
              type: 'string',
              description: 'Ej: 0-3 años'
            }),
            defineField({
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: 'title',
                maxLength: 96
              }
            }),
            defineField({
              name: 'image',
              title: 'Imagen',
              type: 'image',
              options: { hotspot: true }
            })
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'interventionModel',
      title: 'Modelo de Intervención',
      type: 'object',
      fields: [
        defineField({
          name: 'mainTitle',
          title: 'Título Principal',
          type: 'string',
          initialValue: 'Nos centramos más en la actividad y menos en la discapacidad'
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Potenciar habilidades, no solo tratar dificultades'
        }),
        defineField({
          name: 'introText',
          title: 'Texto Introductorio',
          type: 'text',
          rows: 4,
          initialValue: 'En Aconiño trabajamos desde un enfoque interdisciplinario centrado en el niño y su familia, integrando fisioterapia, terapia ocupacional, fonoaudiología y psicología para promover el desarrollo integral, mejorar la funcionalidad, la comunicación, la autonomía y la participación social del usuario.'
        })
      ]
    }),
    defineField({
      name: 'principles',
      title: 'Principios',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Descripción',
              type: 'text',
              rows: 3
            })
          ],
          preview: {
            select: {
              title: 'title'
            }
          }
        })
      ]
    }),
    defineField({
      name: 'targetAudience',
      title: 'Público Objetivo',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icono',
              type: 'string',
              description: 'Emoji o nombre del icono'
            }),
            defineField({
              name: 'label',
              title: 'Etiqueta',
              type: 'string'
            })
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'icon'
            }
          }
        })
      ]
    }),
    defineField({
      name: 'maxSatisfaction',
      title: 'Máxima Satisfacción',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Nuestra máxima satisfacción es cuando:'
        }),
        defineField({
          name: 'items',
          title: 'Elementos',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'string'
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'whatWeDo',
      title: 'Qué Hacemos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'step',
              title: 'Paso',
              type: 'number'
            }),
            defineField({
              name: 'title',
              title: 'Título',
              type: 'string'
            }),
            defineField({
              name: 'description',
              title: 'Descripción',
              type: 'text',
              rows: 3
            })
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'step'
            }
          }
        })
      ]
    }),
    defineField({
      name: 'objectivesByArea',
      title: 'Objetivos por Área',
      type: 'object',
      fields: [
        defineField({
          name: 'motorGruesa',
          title: 'Motricidad Gruesa',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'description',
                  title: 'Descripción',
                  type: 'text',
                  rows: 2
                })
              ],
              preview: {
                select: {
                  title: 'description'
                }
              }
            })
          ]
        }),
        defineField({
          name: 'motorFina',
          title: 'Motricidad Fina',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'description',
                  title: 'Descripción',
                  type: 'text',
                  rows: 2
                })
              ],
              preview: {
                select: {
                  title: 'description'
                }
              }
            })
          ]
        }),
        defineField({
          name: 'comunicacion',
          title: 'Comunicación',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'description',
                  title: 'Descripción',
                  type: 'text',
                  rows: 2
                })
              ],
              preview: {
                select: {
                  title: 'description'
                }
              }
            })
          ]
        }),
        defineField({
          name: 'psicologia',
          title: 'Psicología',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'description',
                  title: 'Descripción',
                  type: 'text',
                  rows: 2
                })
              ],
              preview: {
                select: {
                  title: 'description'
                }
              }
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'whyChooseUs',
      title: 'Por Qué Elegirnos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Texto',
              type: 'string'
            })
          ],
          preview: {
            select: {
              title: 'text'
            }
          }
        })
      ]
    }),
    defineField({
      name: 'cta',
      title: 'CTA Final',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: '¿Quieres saber más sobre nuestros programas?'
        }),
        defineField({
          name: 'buttonText',
          title: 'Texto del Botón',
          type: 'string',
          initialValue: 'CONTÁCTANOS'
        }),
        defineField({
          name: 'buttonLink',
          title: 'Enlace del Botón',
          type: 'string',
          initialValue: '/contacto'
        })
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Página de Programas',
        subtitle: 'Contenido editable de la página de programas'
      }
    }
  }
})

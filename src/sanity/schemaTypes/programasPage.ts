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
      initialValue: [
        { _key: '1', title: 'Intervención interdisciplinaria', description: 'Fisioterapeutas, terapeutas ocupacionales, fonoaudiólogos y psicólogos trabajamos coordinadamente.' },
        { _key: '2', title: 'Centrada en el usuario y su familia', description: 'Colaboración entre profesionales, paciente y familia en todo el proceso.' },
        { _key: '3', title: 'Objetivos funcionales', description: 'Trabajamos habilidades que permiten mayor independencia en actividades diarias.' },
        { _key: '4', title: 'Intervención personalizada', description: 'Diseñamos el tratamiento específicamente para cada usuario tras evaluación.' }
      ],
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
      initialValue: [
        { _key: '1', icon: '👶', label: 'Bebés con alto riesgo neurológico' },
        { _key: '2', icon: '🧒', label: 'Niños con alteraciones motoras' },
        { _key: '3', icon: '🗣️', label: 'Niños con alteraciones de lenguaje' },
        { _key: '4', icon: '🧠', label: 'Pacientes con síndromes genéticos' },
        { _key: '5', icon: '👦', label: 'Jóvenes en proceso de transición' },
        { _key: '6', icon: '👪', label: 'Familias y cuidadores principales' }
      ],
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
          initialValue: 'Nuestra máxima satisfacción es cuando un niño logra:'
        }),
        defineField({
          name: 'items',
          title: 'Elementos',
          type: 'array',
          initialValue: [
            "Jugar alegremente",
            "Aprender cosas nuevas cada día",
            "Comunicarse de forma efectiva con su entorno",
            "Relacionarse adecuadamente con pares y adultos",
            "Participar libremente en todos los roles esperados"
          ],
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
      initialValue: [
        { _key: '1', step: 1, title: 'Valoración interdisciplinaria', description: 'Evaluación exhaustiva por parte de todo el equipo.' },
        { _key: '2', step: 2, title: 'Fijación de objetivos', description: 'Acuerdo de metas funcionales centradas en la familia.' },
        { _key: '3', step: 3, title: 'Plan terapéutico', description: 'Diseño del programa personalizado de intervención.' },
        { _key: '4', step: 4, title: 'Entrenamiento a cuidadores', description: 'Orientación para aplicar estrategias en el hogar.' },
        { _key: '5', step: 5, title: 'Intervención y seguimiento', description: 'Sesiones regulares evaluando la evolución continua.' },
        { _key: '6', step: 6, title: 'Reevaluación semestral', description: 'Informes detallados del progreso alcanzado.' },
        { _key: '7', step: 7, title: 'Alta terapéutica', description: 'Egreso cuando se cumplen todos los objetivos propuestos.' }
      ],
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
          initialValue: [
            { _key: '1', description: 'Mejorar el control postural en diversas posiciones.' },
            { _key: '2', description: 'Adquirir y perfeccionar transiciones de movimiento.' },
            { _key: '3', description: 'Optimizar la marcha y los desplazamientos funcionales.' },
            { _key: '4', description: 'Desarrollar equilibrio, fuerza muscular y coordinación.' }
          ],
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
          initialValue: [
            { _key: '1', description: 'Estimular alcances dirigidos y precisos.' },
            { _key: '2', description: 'Mejorar los diferentes tipos de agarre y manipulación.' },
            { _key: '3', description: 'Promover la independencia en habilidades de vestido y aseo.' },
            { _key: '4', description: 'Potenciar el desempeño grafomotor y el planeamiento visual.' }
          ],
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
          initialValue: [
            { _key: '1', description: 'Fomentar y desarrollar la intención comunicativa.' },
            { _key: '2', description: 'Mejorar el lenguaje comprensivo y expresivo.' },
            { _key: '3', description: 'Implementar Sistemas Aumentativos y Alternativos de Comunicación (SAAC).' },
            { _key: '4', description: 'Facilitar un proceso de deglución y alimentación seguro.' }
          ],
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
          initialValue: [
            { _key: '1', description: 'Ofrecer apoyo emocional profundo a la familia.' },
            { _key: '2', description: 'Desarrollar y guiar pautas de crianza positivas.' },
            { _key: '3', description: 'Fomentar la madurez emocional y conductual.' },
            { _key: '4', description: 'Acompañar los procesos de inclusión y adaptación escolar.' }
          ],
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
      initialValue: [
        { _key: '1', text: 'Trayectoria ininterrumpida de más de tres décadas.' },
        { _key: '2', text: 'Excelencia, empatía y calidez humana inigualables.' },
        { _key: '3', text: 'Compromiso genuino con el desarrollo integral.' },
        { _key: '4', text: 'Ambiente adecuado con recursos terapéuticos modernos.' }
      ],
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

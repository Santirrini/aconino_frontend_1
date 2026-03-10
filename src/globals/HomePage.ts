import { GlobalConfig } from 'payload';

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: '35 años',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue: 'apoyando la inclusión!',
          required: true,
        },
        {
          name: 'backgroundType',
          type: 'select',
          defaultValue: 'video',
          options: [
            { label: 'Video', value: 'video' },
            { label: 'Image', value: 'image' },
          ],
        },
        {
          name: 'videoUrl',
          type: 'text',
          defaultValue: 'https://www.w3schools.com/html/mov_bbb.mp4',
          admin: {
            condition: (_, siblingData) => siblingData.backgroundType === 'video',
          },
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData.backgroundType === 'image',
          },
        },
      ],
    },
    {
      name: 'about',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: '35 años trabajando por mejorar la calidad de vida de niños, niñas y jóvenes en condición de discapacidad',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Tratamientos y terapias con el Modelo de práctica contemporáneo de Neurodesarrollo y protocolo intensivo Pediasuit Orientación y apoyo a las familias',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'CONTÁCTANOS',
        },
        {
          name: 'ctaLink',
          type: 'text',
          defaultValue: '/contacto',
        },
        {
          name: 'statsValue',
          type: 'text',
          defaultValue: '+35',
        },
        {
          name: 'statsLabel',
          type: 'textarea',
          defaultValue: 'años\napoyando la\ninclusión!',
        },
      ],
    },
    {
      name: 'programs',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Nuestros Programas',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Programa terapéutico integral para apoyar el desarrollo psicomotor.',
        },
        {
          name: 'list',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'slug',
              type: 'text',
              required: true,
              admin: {
                description: 'Debe coincidir con un slug de la colección Programs (ej: pediasuit)',
              },
            },
          ],
        },

      ],
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: '35 años apoyando la inclusión',
        },
        {
          name: 'buttonText',
          type: 'text',
          defaultValue: 'CONTÁCTANOS',
        },
        {
          name: 'buttonLink',
          type: 'text',
          defaultValue: '/contacto',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'recognitions',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Nuestros Reconocimientos',
        },
        {
          name: 'list',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'meta',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
  ],
};
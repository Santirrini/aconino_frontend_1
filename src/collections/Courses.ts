import { CollectionConfig } from 'payload';

export const Courses: CollectionConfig = {
    slug: 'courses',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'year', 'status', 'location', 'updatedAt'],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'dates',
            type: 'text',
            label: 'Dates (e.g., "5, 6, 7, 13 y 14 de Julio de 2024")',
        },
        {
            name: 'duration',
            type: 'text',
            label: 'Duration (e.g., 40 hours)',
        },
        {
            name: 'location',
            type: 'text',
            label: 'Location (e.g., "Bogotá, Colombia")',
        },
        {
            name: 'countryCode',
            type: 'select',
            label: 'Country',
            options: [
                { label: '🇨🇴 Colombia', value: 'CO' },
                { label: '🇻🇪 Venezuela', value: 'VE' },
                { label: '🇵🇪 Perú', value: 'PE' },
                { label: '🇪🇨 Ecuador', value: 'EC' },
                { label: '🇲🇽 México', value: 'MX' },
                { label: '🇦🇷 Argentina', value: 'AR' },
                { label: '🇧🇷 Brasil', value: 'BR' },
                { label: '🇨🇱 Chile', value: 'CL' },
                { label: '🇺🇸 Estados Unidos', value: 'US' },
                { label: '🇪🇸 España', value: 'ES' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'status',
            type: 'select',
            label: 'Status',
            defaultValue: 'upcoming',
            options: [
                { label: 'Próximo', value: 'upcoming' },
                { label: 'Finalizado', value: 'finalizado' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'year',
            type: 'number',
            label: 'Year',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'organization',
            type: 'text',
            label: 'Organization (optional)',
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Short Description',
        },
        {
            name: 'content',
            type: 'richText',
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'detailUrl',
            type: 'text',
            label: 'External Detail URL (optional)',
            admin: {
                description: 'If provided, "Más información" links here instead of the detail page.',
            },
        },
    ],
};

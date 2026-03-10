import { CollectionConfig } from 'payload';

export const Programs: CollectionConfig = {
    slug: 'programs-pages',
    labels: {
        singular: 'Program',
        plural: 'Programs',
    },
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'ageRange', 'updatedAt'],
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
            name: 'ageRange',
            type: 'text',
            label: 'Age Range (e.g., 0-3 years)',
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
            name: 'icon',
            type: 'select',
            options: [
                { label: 'Graduation Cap', value: 'graduation-cap' },
                { label: 'Heart', value: 'heart' },
                { label: 'Star', value: 'star' },
                { label: 'User', value: 'user' },
            ],
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
        },
    ],
};

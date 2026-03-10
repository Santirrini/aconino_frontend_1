import { CollectionConfig } from 'payload';

export const Courses: CollectionConfig = {
    slug: 'courses',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'duration', 'updatedAt'],
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
            name: 'duration',
            type: 'text',
            label: 'Duration (e.g., 40 hours)',
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
    ],
};

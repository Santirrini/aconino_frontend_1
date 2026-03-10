import { GlobalConfig } from 'payload';

export const HeaderConfig: GlobalConfig = {
    slug: 'header-config',
    label: 'Configuración del Menú',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'navLinks',
            type: 'array',
            label: 'Enlaces de Navegación',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    label: 'Nombre del Menú',
                    required: true,
                },
                {
                    name: 'href',
                    type: 'text',
                    label: 'Enlace (Manual)',
                    defaultValue: '#',
                    admin: {
                        description: 'Usa # si es un menú desplegable (dropdown)',
                    },
                },
                {
                    name: 'hasDropdown',
                    type: 'checkbox',
                    label: '¿Tiene sub-menú?',
                    defaultValue: false,
                },
                {
                    name: 'dropdownType',
                    type: 'select',
                    label: 'Tipo de Sub-menú',
                    defaultValue: 'manual',
                    options: [
                        { label: 'Manual (Lista fija)', value: 'manual' },
                        { label: 'Dinámico (Inyectar de colección)', value: 'dynamic' },
                    ],
                    admin: {
                        condition: (_, siblingData) => siblingData.hasDropdown === true,
                    },
                },
                {
                    name: 'collectionSource',
                    type: 'select',
                    label: 'Colección Fuente',
                    options: [
                        { label: 'Programas', value: 'programs-pages' },
                        { label: 'Cursos', value: 'courses' },
                        { label: 'Páginas Genéricas', value: 'pages' },
                    ],
                    admin: {
                        condition: (_, siblingData) => siblingData.hasDropdown === true && siblingData.dropdownType === 'dynamic',
                    },
                },
                {
                    name: 'subLinks',
                    type: 'array',
                    label: 'Sub-enlaces Manuales',
                    admin: {
                        condition: (_, siblingData) => siblingData.hasDropdown === true && siblingData.dropdownType === 'manual',
                    },
                    fields: [
                        {
                            name: 'name',
                            type: 'text',
                            label: 'Nombre',
                            required: true,
                        },
                        {
                            name: 'href',
                            type: 'text',
                            label: 'Enlace',
                            required: true,
                        },
                    ],
                },
            ],
        },
    ],
};

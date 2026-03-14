export const contactConfig = {
    hero: {
        title: "Contáctanos",
        subtitle: "Estamos aquí para escucharte y apoyarte en el desarrollo integral de tus seres queridos."
    },
    branches: [
        {
            name: "Sede Principal",
            address: "Calle 147 No. 7 - 70",
            city: "Bogotá, Colombia",
            phones: ["+57 601 258 0000", "+57 313 391 0760"],
            email: "info@aconino.org",
            schedule: "Lunes a Viernes: 8:00 AM - 5:00 PM",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2443!2d-74.0326!3d4.7214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f856616a29737%3A0xc3c6f6e52290453!2sAsociaci%C3%B3n%20Aconi%C3%B1o!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
        },
        {
            name: "Sede Rehabilitación",
            address: "Carrera 7 No. 147 - 50",
            city: "Bogotá, Colombia",
            phones: ["+57 601 258 1111"],
            email: "rehabilitacion@aconino.org",
            schedule: "Lunes a Viernes: 7:00 AM - 4:00 PM",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2443!2d-74.0326!3d4.7214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f856616a29737%3A0xc3c6f6e52290453!2sAsociaci%C3%B3n%20Aconi%C3%B1o!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
        }
    ]
};

export const blogCategories = [
    { id: "1", name: "Inclusión", slug: "inclusion" },
    { id: "2", name: "Neurodesarrollo", slug: "neurodesarrollo" },
    { id: "3", name: "Noticias", slug: "noticias" },
    { id: "4", name: "Eventos", slug: "eventos" }
];

export const staticBlogPosts = [
    {
        id: "1",
        title: "La importancia del juego en el neurodesarrollo",
        slug: "importancia-juego-neurodesarrollo",
        excerpt: "Descubre cómo el juego estructurado ayuda a los niños con discapacidad sensoriomotora a desarrollar nuevas habilidades.",
        content: "Contenido detallado del artículo...",
        date: "2024-03-10",
        author: "Equipo Aconiño",
        category: "Neurodesarrollo",
        featuredImage: "https://images.unsplash.com/photo-1587654538025-47575db4d176?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "Próximo Taller de Certificación Bobath",
        slug: "taller-certificacion-bobath-2024",
        excerpt: "Abrimos inscripciones para nuestro taller anual de certificación internacional en el Concepto Bobath.",
        content: "Contenido detallado del artículo...",
        date: "2024-03-05",
        author: "Dirección Académica",
        category: "Eventos",
        featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
    }
];

export const apoyanosConfig = {
    hero: {
        badge: "CONSTRUYENDO EL FUTURO",
        title: "Apoya la Construcción del Centro Día",
        subtitle: "Un espacio diseñado para brindar autonomía y bienestar a jóvenes y adultos con discapacidad.",
        backgroundImage: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
        quickStats: [
            { label: "Beneficiarios", value: "200+" },
            { label: "Ubicación", value: "Bogotá" }
        ]
    },
    progress: {
        title: "Avance de la Obra",
        description: "Estamos en la fase de acabados y equipamiento. Tu donación nos permite completar este sueño.",
        currentProgress: 75,
        goalAmount: 500000000,
        materialsNeeded: [
            { name: "Sillas Ergonómicas", needed: 50, donated: 20 },
            { name: "Pantallas de TV", needed: 10, donated: 4 },
            { name: "Material de Construcción", needed: 100, donated: 75 }
        ]
    },
    donationOptions: {
        title: "Formas de Apoyar",
        options: [
            { title: "Donación Unica", description: "Aporta el monto que desees para la construcción.", link: "/donar" },
            { title: "Plan Padrino", description: "Apadrina a un joven para sus terapias mensuales.", link: "/donar" }
        ]
    },
    corporateDonation: {
        title: "Alianzas Corporativas",
        description: "Tu empresa puede ser parte del cambio a través de donaciones directas o programas de voluntariado.",
        benefits: [
            "Certificado de donación",
            "Mención en nuestra placa de honor",
            "Impacto social medible"
        ]
    },
    faq: {
        title: "Preguntas Frecuentes",
        items: [
            { question: "¿Es deducible de impuestos?", answer: "Sí, emitimos certificados de donación válidos ante la DIAN." },
            { question: "¿Cómo puedo visitar la obra?", answer: "Contáctanos para programar una visita guiada." }
        ]
    },
    finalCTA: {
        title: "Juntos podemos lograrlo",
        description: "Cada aporte, sin importar el tamaño, nos acerca un paso más a la meta.",
        buttonText: "DONAR AHORA"
    }
};

// Quienes Somos Content
export const quienesSomosContent = {
    hero: {
        title: "Nuestra Historia",
        subtitle: "Tres décadas impulsando el neurodesarrollo en Colombia.",
        backgroundImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop"
    },
    intro: {
        label: "Trayectoria",
        title: "Más de 30 años transformando vidas",
        paragraphs: [
            { text: "La Asociación Aconiño nació en 1990 con el firme propósito de brindar una atención integral a niños y jóvenes con discapacidad sensoriomotora.", isHighlighted: true },
            { text: "Desde entonces, hemos sido pioneros en la implementación de técnicas avanzadas como el Concepto Bobath y otras terapias innovadoras." }
        ],
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop",
        stats: [
            { value: "+30", label: "Años de Experiencia" },
            { value: "+5000", label: "Niños Atendidos" }
        ]
    },
    mision: {
        title: "Nuestra Misión",
        paragraphs: [
            { text: "Brindar rehabilitación integral de alta calidad, promoviendo la inclusión y el bienestar de niños y jóvenes con discapacidad." }
        ],
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
    },
    vision: {
        title: "Nuestra Visión",
        mainText: "Ser el centro de referencia líder en neurorehabilitación infantil en Colombia.",
        secondaryText: "Reconocidos por nuestra excelencia clínica, humanismo y capacidad de innovación."
    },
    historia: {
        title: "Nuestra Cronología",
        subtitle: "Momentos clave que definieron nuestro camino",
        events: [
            { year: "1990", title: "Fundación", description: "Un grupo de profesionales decide unir fuerzas para crear Aconiño." },
            { year: "2010", title: "Nueva Sede", description: "Inauguración de nuestras instalaciones principales en Bogotá." }
        ]
    },
    fundadores: {
        introText: "Nuestros fundadores sentaron las bases de lo que hoy es Aconiño.",
        row1: {
            people: [
                { name: "Nombre Fundador 1", role: "Cargo / Especialidad", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" }
            ]
        },
        row2: {
            people: [
                { name: "Nombre Fundador 2", role: "Cargo / Especialidad", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" }
            ]
        }
    },
    semillas: {
        title: "Proyecto Semillas",
        description: "Un programa dedicado a la atención temprana y prevención.",
        image: "https://images.unsplash.com/photo-1502082559145-83bef550e1c2?q=80&w=800&auto=format&fit=crop"
    },
    juntaDirectiva: {
        title: "Junta Directiva",
        groupPhoto: "https://images.unsplash.com/photo-1556761175-5973bc0f3844?q=80&w=1200&auto=format&fit=crop",
        photoCaption: "Nuestros líderes comprometidos con la causa.",
        members: [
            { name: "Juan Pérez", role: "Presidente" },
            { name: "María Rodríguez", role: "Secretaria" }
        ]
    },
    equipoProfesional: {
        title: "Nuestro Equipo Terapéutico",
        introText: "Especialistas altamente calificados en diversas disciplinas.",
        members: [
            { name: "Dr. Roberto Gómez", role: "Fisioterapeuta Bobath", photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop" }
        ]
    },
    administrativos: {
        title: "Equipo Administrativo",
        introText: "El soporte vital que hace posible nuestra operación diaria.",
        members: [
            { name: "Ana Lucía", role: "Directora Administrativa", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" }
        ]
    }
};

// Default Programs
export const defaultPrograms = [
    {
        id: 'default-3',
        title: "Atención temprana",
        description: "de 0 a 3 años. Programa terapéutico integral para apoyar el desarrollo sicomotor a través de la estimulación temprana y adecuada de sistemas multisensoriales.",
        slug: "atencion-temprana",
        ageRange: "0-3 años",
        featuredImage: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 'default-2',
        title: "Protocolo Intensivo Pediasuit Niños y jóvenes",
        description: "de 2 a 18 años. Protocolo Pediasuit es un programa terapéutico intensivo para apoyar el desarrollo sicomotor a través de la estimulación de sistemas multisensoriales.",
        slug: "pediasuit",
        ageRange: "2-18 años",
        featuredImage: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 'default-1',
        title: "Apoyo a dificultades en el aprendizaje a niños",
        description: "de 3 a 14 años. Programa terapéutico de apoyo a las actividades escolares para potencializar las habilidades motoras, cognitivas y de lenguaje.",
        slug: "apoyo-aprendizaje",
        ageRange: "3-14 años",
        featuredImage: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 'default-4',
        title: "Visión a niños y jóvenes",
        description: "de 3 a 18 años. Programa terapéutico integral para apoyar el desarrollo sicomotor y evitar en lo posible la aparición de patrones atípicos.",
        slug: "atencion-ninos-jovenes",
        ageRange: "3-18 años",
        featuredImage: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
    }
];

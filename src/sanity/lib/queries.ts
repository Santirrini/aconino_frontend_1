import { defineQuery } from 'groq'

// Query for navigation
export const NAVIGATION_QUERY = defineQuery(`
  *[_type == "navigation"][0] {
    title,
    navItems[] {
      label,
      href,
      hasDropdown,
      subLinks[] {
        label,
        href
      }
    },
    ctaButton {
      label,
      href
    }
  }
`)

// Query for global settings (Header/Footer)
export const SETTINGS_QUERY = defineQuery(`
  *[_type == "settings"][0] {
    title,
    "logoUrl": logo.asset->url,
    phoneNumber,
    mobilePhone,
    email,
    address,
    socialLinks,
    footerLinks,
    appDownloadUrl,
    headerCTA,
    footerInfo {
      appDownload,
      controlEntity,
      copyright,
      designBy
    }
  }
`)

// Query para Home Hero Section (documento separado)
export const HOME_HERO_QUERY = defineQuery(`
  *[_type == "homeHero"][0] {
    backgroundType,
    "backgroundImageUrl": backgroundImage.asset->url,
    "backgroundVideoUrl": backgroundVideo.asset->url,
    slogan,
    impact
  }
`)

// Query para Home Programs Section (documento separado)
export const HOME_PROGRAMS_QUERY = defineQuery(`
  *[_type == "homePrograms"][0] {
    subtitle,
    clinicalFocus,
    familySupport,
    ctaLabel,
    items[] {
      _key,
      title,
      description,
      url,
      "imageUrl": image.asset->url
    }
  }
`)

// Query para Home Recognitions Section (documento separado)
export const HOME_RECOGNITIONS_QUERY = defineQuery(`
  *[_type == "homeRecognitions"][0] {
    title,
    items[] {
      _key,
      title,
      meta,
      description,
      "imageUrl": image.asset->url
    }
  }
`)

// Query para Home Page (documento unificado)
export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "homePage"][0] {
    hero {
      backgroundType,
      "backgroundImageUrl": backgroundImage.asset->url,
      "backgroundVideoUrl": backgroundVideo.asset->url,
      slogan,
      impact
    },
    programs {
      subtitle,
      clinicalFocus,
      familySupport,
      ctaLabel,
      items[] {
        _key,
        title,
        description,
        url,
        "imageUrl": image.asset->url
      }
    },
    news {
      title,
      ctaLabel
    },
    recognitions {
      title,
      items[] {
        _key,
        title,
        meta,
        description,
        "imageUrl": image.asset->url
      }
    }
  }
`)

// Query para Home News Section (documento separado) - DEPRECATED
export const HOME_NEWS_QUERY = defineQuery(`
  *[_type == "homeNews"][0] {
    title,
    ctaLabel
  }
`)

// Query para Cursos Hero (carrusel de imágenes)
export const CURSOS_HERO_QUERY = defineQuery(`
  *[_type == "cursosHero"][0] {
    title,
    slides[] {
      _key,
      "imageUrl": image.asset->url,
      alt,
      overlayOpacity
    }
  }
`)

// Query para la sección About (Sobre Nosotros)
export const ABOUT_SECTION_QUERY = defineQuery(`
  *[_type == "aboutSection"][0] {
    title,
    description,
    "imageUrl": image.asset->url,
    statsValue,
    statsLabel,
    ctaLabel,
    ctaLink
  }
`)

// Query para la sección de CTA (Fondo Azul)
export const CTA_SECTION_QUERY = defineQuery(`
  *[_type == "ctaSection"][0] {
    title,
    ctaLabel,
    ctaLink,
    "backgroundImageUrl": backgroundImage.asset->url
  }
`)

// Query para la sección Intro de Quienes Somos (Nuestra Identidad)
export const NOSOTROS_INTRO_QUERY = defineQuery(`
  *[_type == "nosotrosIntro"][0] {
    subtitle,
    title,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    description,
    stats[] {
      value,
      label,
      color
    }
  }
`)

// Query para global de Quienes Somos (todas las secciones)
export const QUIENES_SOMOS_QUERY = defineQuery(`
  *[_type == "quienesSomos"][0] {
    identidad {
      subtitle,
      title,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      description,
      stats[] {
        value,
        label,
        color
      }
    },
    mision {
      subtitle,
      title,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      description
    },
    vision {
      subtitle,
      title,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      visionText,
      visionTextSecondary
    },
    historia {
      subtitle,
      title,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      events[] {
        year,
        title,
        description
      }
    },
    hero {
      subtitle,
      title,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    },
    fundadores[] {
      name,
      role,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    },
    semillas[] {
      name,
      age,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    },
    junta {
      subtitle,
      title,
      "photoUrl": photo.asset->url,
      "photoAlt": photo.alt,
      roles[] {
        position,
        name,
        description,
        people[] {
          name,
          description
        }
      }
    },
    equipo {
      subtitle,
      title,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    },
    admin {
      subtitle,
      title,
      roles[] {
        position,
        name,
        description,
        people[] {
          name,
          description
        }
      }
    }
  }
`)

// Query para las últimas noticias (solo posts con imagen, ordenados por fecha de creacion)
export const LATEST_POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(mainImage)] | order(_createdAt desc) [0...12] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    _createdAt,
    excerpt,
    "mainImageUrl": mainImage.asset->url
  }
`)

// Query para un post individual por slug
export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    body,
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    author-> {
      _id,
      name,
      "imageUrl": image.asset->url
    },
    categories[]-> {
      _id,
      title,
      "slug": slug.current
    }
  }
`)

// Query para todos los posts (listado paginado)
export const ALL_POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    author-> {
      name
    }
  }
`)

// Query para contar total de posts
export const POSTS_COUNT_QUERY = defineQuery(`
  count(*[_type == "post"])
`)

// Query para posts por categoría
export const POSTS_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    author-> {
      name
    }
  }
`)

// Query para contar posts por categoría
export const POSTS_COUNT_BY_CATEGORY_QUERY = defineQuery(`
  count(*[_type == "post" && $categorySlug in categories[]->slug.current])
`)

// Query para todas las categorías
export const ALL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }
`)

// Query para posts recientes (sidebar)
export const RECENT_POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(mainImage)] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "mainImageUrl": mainImage.asset->url
  }
`)

// Query para la página de Programas
export const PROGRAMAS_PAGE_QUERY = defineQuery(`
  *[_type == "programasPage"][0] {
    hero {
      title,
      subtitle,
      "backgroundImageUrl": backgroundImage.asset->url
    },
    programs[] {
      _key,
      title,
      description,
      ageRange,
      "slug": slug.current,
      "imageUrl": image.asset->url
    },
    cta {
      title,
      buttonText,
      buttonLink
    }
  }
`)

// Query for all courses
export const ALL_CURSOS_QUERY = defineQuery(`
  *[_type == "curso"] | order(year desc) {
    _id,
    title,
    "slug": slug.current,
    dates,
    location,
    countryCode,
    status,
    description,
    "featuredImage": featuredImage.asset->url,
    year,
    instructor,
    isFeatured,
    detailUrl
  }
`)

// Query for a course by slug
export const CURSO_BY_SLUG_QUERY = defineQuery(`
  *[_type == "curso" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    dates,
    location,
    countryCode,
    status,
    description,
    body,
    "featuredImage": featuredImage.asset->url,
    "featuredImageAlt": featuredImage.alt,
    benefits,
    detailUrl,
    year,
    instructor
  }
`)

// Query for the cursos page configuration
export const CURSOS_PAGE_QUERY = defineQuery(`
  *[_type == "cursosPage"][0] {
    heroTitle,
    heroSlides[] {
      _key,
      "imageUrl": image.asset->url,
      alt,
      overlayOpacity
    },
    historiaTitle,
    historiaSubtitle,
    historiaEvents[] {
      _key,
      year,
      title,
      description,
      color,
      icon
    },
    instructorsTitle,
    instructorsIntro,
    instructorGroups[] {
      _key,
      organization,
      instructors
    },
    cta {
      title,
      description,
      buttonText,
      buttonLink
    }
  }
`)

// Query for the app page configuration
export const APP_PAGE_QUERY = defineQuery(`
  *[_type == "appPage"][0] {
    heroSlides[] {
      _key,
      "imageUrl": image.asset->url,
      alt,
      overlayOpacity
    },
    infoSection {
      title,
      text1,
      text2
    },
    quoteSection {
      quote,
      author,
      "avatarUrl": avatar.asset->url
    },
    benefitsSection {
      title,
      benefits,
      downloadUrl,
      "phoneImageUrl": phoneImage.asset->url
    },
    resultsSection {
      title,
      text1,
      text2,
      videoUrl
    }
  }
`)

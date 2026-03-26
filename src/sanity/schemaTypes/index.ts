import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import page from './page'
import settings from './settings'
import navigation from './navigation'
import ctaSection from './ctaSection'
import aboutSection from './aboutSection'
import nosotrosIntro from './nosotrosIntro'
import quienesSomos from './quienesSomos'
import homePage from './homePage'
import curso from './curso'
import cursosPage from './cursosPage'
import appPage from './appPage'
import programasPage from './programasPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    page,
    settings,
    navigation,
    ctaSection,
    aboutSection,
    nosotrosIntro,
    quienesSomos,
    homePage,
    curso,
    cursosPage,
    appPage,
    programasPage,
  ],
}

import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import page from './page'
import settings from './settings'
import navigation from './navigation'
import nosotrosIntro from './nosotrosIntro'
import quienesSomos from './quienesSomos'
import homePage from './homePage'
import curso from './curso'
import cursosPage from './cursosPage'
import appPage from './appPage'
import programasPage from './programasPage'
import documentoLegal from './documentoLegal'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    page,
    settings,
    navigation,
    nosotrosIntro,
    quienesSomos,
    homePage,
    curso,
    cursosPage,
    appPage,
    programasPage,
    documentoLegal,
  ],
}

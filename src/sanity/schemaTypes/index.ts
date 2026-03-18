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
import homeHero from './homeHero'
import homePrograms from './homePrograms'
import homeRecognitions from './homeRecognitions'
import homeNews from './homeNews'
import cursosHero from './cursosHero'
import programasPage from './programasPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, page, settings, navigation, ctaSection, aboutSection, nosotrosIntro, quienesSomos, homeHero, homePrograms, homeRecognitions, homeNews, cursosHero, programasPage],
}

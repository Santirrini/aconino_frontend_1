import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = imageUrlBuilder(client)

type SanityImageSource = {
  _type?: string
  asset: {
    _ref?: string
    _type?: string
  }
  hotspot?: {
    x?: number
    y?: number
    height?: number
    width?: number
  }
}

export function urlForImage(source: SanityImageSource) {
  return builder.image(source)
}

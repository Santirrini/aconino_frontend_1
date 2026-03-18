'use client'

/**
 * This route is responsible for the Sanity Studio UI.
 * It's located at /studio/[[...tool]]
 * It's a Client Component loaded with ssr: false immediately to avoid Next.js 15 dual React rendering.
 */

import dynamic from 'next/dynamic'
import config from '../../../../sanity.config'

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

export default function StudioPage() {
  return <NextStudio config={config} />
}

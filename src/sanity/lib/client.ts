import { createClient } from '@sanity/client'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'myf1eg8e'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-03-14'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // CDN enabled for read queries (performance)
})

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
})

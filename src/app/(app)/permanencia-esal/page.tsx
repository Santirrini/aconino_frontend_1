import { client } from "@/sanity/lib/client"
import { DOCUMENTOS_POR_CATEGORIA_QUERY } from "@/sanity/lib/queries"
import DocumentosLegalesPage, { CATEGORIAS_INFO } from "@/components/DocumentosLegalesPage"

export const metadata = {
  title: "Permanencia ESAL - Asociación Aconiño",
  description: "Documentos relacionados con la permanencia y regulación de Entidades Sin Ánimo de Lucro.",
}

export default async function PermanenciaESALPage() {
  const info = CATEGORIAS_INFO.esal
  const documentos = await client.fetch(DOCUMENTOS_POR_CATEGORIA_QUERY, { categoria: "esal" })

  return (
    <DocumentosLegalesPage
      titulo={info.titulo}
      subtitulo={info.subtitulo}
      descripcion={info.descripcion}
      categoria="esal"
      documentos={documentos || []}
      icono={info.icono}
    />
  )
}
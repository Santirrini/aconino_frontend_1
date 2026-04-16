import { client } from "@/sanity/lib/client"
import { DOCUMENTOS_POR_CATEGORIA_QUERY } from "@/sanity/lib/queries"
import DocumentosLegalesPage, { CATEGORIAS_INFO } from "@/components/DocumentosLegalesPage"

export const metadata = {
  title: "Transparencia - Asociación Aconiño",
  description: "Documentos de transparencia e información pública conforme a la normativa vigente.",
}

export default async function TransparenciaPage() {
  const info = CATEGORIAS_INFO.transparencia
  const documentos = await client.fetch(DOCUMENTOS_POR_CATEGORIA_QUERY, { categoria: "transparencia" })

  return (
    <DocumentosLegalesPage
      titulo={info.titulo}
      subtitulo={info.subtitulo}
      descripcion={info.descripcion}
      categoria="transparencia"
      documentos={documentos || []}
      icono={info.icono}
    />
  )
}
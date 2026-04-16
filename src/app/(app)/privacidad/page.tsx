import { client } from "@/sanity/lib/client"
import { DOCUMENTOS_POR_CATEGORIA_QUERY } from "@/sanity/lib/queries"
import DocumentosLegalesPage, { CATEGORIAS_INFO } from "@/components/DocumentosLegalesPage"

export const metadata = {
  title: "Protección de Datos Personales - Asociación Aconiño",
  description: "Políticas y documentos relacionados con la protección de datos personales y privacidad.",
}

export default async function PrivacidadPage() {
  const info = CATEGORIAS_INFO.proteccion_datos
  const documentos = await client.fetch(DOCUMENTOS_POR_CATEGORIA_QUERY, { categoria: "proteccion_datos" })

  return (
    <DocumentosLegalesPage
      titulo={info.titulo}
      subtitulo={info.subtitulo}
      descripcion={info.descripcion}
      categoria="proteccion_datos"
      documentos={documentos || []}
      icono={info.icono}
    />
  )
}
# Spec: Rediseño de Donation Sidebar "Centro de Impacto"

**Estado:** 🏗️ En Revisión
**Fecha:** 2026-03-18
**Autor:** Gemini CLI

## 1. Visión General
Transformar el actual `DonationWidget` (modal) en un **Sidebar Lateral (DonationSidebar)** que funcione como un "gancho" profesional y emocional para maximizar las donaciones. El diseño será híbrido: directo en la acción pero rico en narrativa de impacto.

## 2. Objetivos de Negocio
*   **Maximizar Conversión:** Reducir la fricción mediante una interfaz de "un solo vistazo".
*   **Storytelling de Impacto:** Traducir montos monetarios en beneficios tangibles (materiales, terapias).
*   **Profesionalismo:** Alinear la estética con el estándar de la industria (Fintech/Non-profit) y el sistema de diseño de Aconiño.
*   **Escalabilidad:** Permitir añadir nuevas causas o categorías de donación sin tocar el núcleo del componente.

## 3. Arquitectura del Componente (`DonationSidebar.tsx`)

### 3.1 Estructura Modular
El sidebar se dividirá en sub-componentes internos para facilitar el mantenimiento:

1.  **`SidebarHeader`**: Selector de pestañas (Tabs) con gradientes dinámicos.
    *   `Tab: Construcción` (Materiales del Centro Día).
    *   `Tab: Plan Padrino` (Terapias y Bienestar).
2.  **`ImpactStory`**: Visualización del progreso actual.
    *   Imagen/Ilustración dinámica.
    *   Barra de progreso minimalista ("Faltan 10 bultos...").
3.  **`DonationGrid`**: Rejilla de botones de monto (Cards).
    *   Cada card incluye: Monto + Icono + Micro-descripción.
4.  **`CustomAmountInput`**: Campo de entrada con "Calculadora de Impacto" en tiempo real.
5.  **`SidebarFooter`**: Botón de acción principal ("¡QUIERO APOYAR!"), logos de seguridad y enlace a donación empresarial.

### 3.2 Comportamiento y Animaciones (Framer Motion)
*   **Entrada:** `x: '100%' -> 0` con un `spring` suave.
*   **Interacción:** Hover states en las tarjetas de monto con sutil elevación y cambio de color perimetral.
*   **Feedback:** Al seleccionar un monto, el botón de acción debe iluminarse con un pulso de color `accent`.

## 4. Diseño Visual y Estilos

### 4.1 Colores y Tipografía
*   **Fondo:** White / Gray-50.
*   **Gradientes:** Uso de `from-primary to-secondary` para Construcción y `from-secondary to-accent` (o similar) para Plan Padrino.
*   **Tipografía:** 
    *   Títulos: `font-black text-primary uppercase`.
    *   Montos: `font-bold text-2xl`.
    *   Impacto: `font-medium text-sm text-gray-500`.

### 4.2 Responsividad
*   **Escritorio:** Sidebar lateral derecho (ancho: 450px - 500px).
*   **Móvil:** Pantalla completa (Full-screen overlay) con scroll interno.

## 5. Implementación Técnica
*   **Estrategia de Datos:** Los montos e impactos se cargarán desde un archivo de configuración centralizado (`src/data/donation-options.ts`).
*   **Estado Global:** Integración con `DonationProvider.tsx` para manejar la apertura/cierre y el monto seleccionado.
*   **Validación:** Asegurar que el input de "Otro monto" solo acepte valores numéricos positivos.

## 6. Próximos Pasos (Plan de Acción)
1.  Crear estructura de archivos modular.
2.  Implementar la lógica de Tabs y visualización de impacto.
3.  Desarrollar la rejilla de donaciones dinámica.
4.  Refactorizar `DonationProvider` para soportar el nuevo Sidebar.
5.  Añadir animaciones finales y pulido visual.

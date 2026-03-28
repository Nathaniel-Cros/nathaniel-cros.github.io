# Project Context

## Propósito
- Construir un portfolio-lab personal para un engineer senior frontend/fullstack.
- Unificar CV, trabajo seleccionado y exploraciones técnicas en una sola experiencia.
- Mostrar criterio técnico, claridad de producto y calidad visual sin parecer un template genérico.

## Posicionamiento
- Perfil: engineer senior con foco en frontend craft, visión fullstack y criterio de producto.
- Señal principal: combina ejecución, arquitectura y sensibilidad por UX.
- Tono del sitio: sobrio, preciso, premium y contemporáneo.

## Objetivos
- Presentar experiencia, stack y casos de estudio con jerarquía clara.
- Separar contenido y UI para actualizar copy y datos sin reestructurar la app.
- Reutilizar componentes desde el inicio para mantener consistencia visual.
- Dejar la sección Labs como espacio para experimentos, prototipos y piezas exploratorias.

## Límites
- Mantener la app ligera y sin dependencias innecesarias.
- Priorizar una experiencia single-page clara antes de abrir rutas o páginas secundarias.
- Evitar ornamentos visuales que compitan con el contenido profesional.

## Internacionalización
El proyecto soporta múltiples idiomas mediante una estructura centralizada en `/languages`.
Cada idioma define sus textos en archivos separados (ej: `es`, `en`), y se accede a través de un índice común (`messages`).
Esto permite:
- Escalar a nuevos idiomas fácilmente
- Mantener consistencia de contenido
- Evitar duplicación de lógica en componentes
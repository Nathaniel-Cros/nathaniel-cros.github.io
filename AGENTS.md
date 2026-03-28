# AGENTS.md

## Stack
- Vue 3 (Composition API)
- Vite
- Tailwind CSS

## Reglas
- Mantener separación entre data y UI
- Usar componentes reutilizables
- No hardcodear contenido si puede ir en /data
- No agregar dependencias innecesarias
- Mantener código limpio, simple y escalable

## Diseño
- Dark, minimalista, editorial y premium
- Jerarquía clara y buen uso de whitespace
- Animaciones sutiles, no invasivas

## Flujo de trabajo
- Trabajar por fases
- No hacer cambios grandes sin explicar
- Explicar decisiones importantes al finalizar
- Validar build después de cambios relevantes

## Contexto
- Revisar /context (project.md, design.md, content.md) antes de implementar cambios relevantes
- Alinear decisiones con esos archivos

## Internacionalización (i18n)
- Todo el contenido textual debe gestionarse desde `/languages`
- Usar `messages` como punto central de acceso
- No hardcodear textos dentro de componentes
- Mantener consistencia en claves entre idiomas (ej: `hero.title`, `hero.subtitle`)
- Si se agregan nuevos textos, deben incluirse en todos los idiomas existentes
# Portafolio - Nathaniel Ruiz

Sitio estatico de una sola pagina listo para GitHub Pages.

## Estructura

- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/img/`
- `assets/cv/cv.pdf`

## Personalizacion rapida

1. Reemplaza el email en `index.html` (buscar `oscnathanielrp@gmail.com`).
2. Actualiza los textos marcados con `TODO` dentro de `index.html`.
3. Copia tus capturas en `assets/img/` usando los nombres sugeridos en cada card.
4. Coloca tu CV en `assets/cv/cv.pdf`.
5. (Opcional) Sustituye `assets/img/favicon.svg` por tu propio favicon.

## Publicar en GitHub Pages

1. Sube este repo a GitHub con el nombre `nathaniel-cros.github.io`.
2. En GitHub, ve a **Settings > Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama `main` (o `master`) y la carpeta `/root`.
5. Guarda. En pocos minutos el sitio estara disponible en `https://nathaniel-cros.github.io/`.

## Desarrollo local

Abre `index.html` directamente en el navegador o usa un servidor estatico sencillo.

```
python3 -m http.server 8080
```

Luego visita `http://localhost:8080`.

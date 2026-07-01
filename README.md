# Sembradores de Fe — Sitio web (Astro)

Sitio de la **Asociación Católica Sembradores de Fe (SDF)** — Barranquilla, Colombia.
Construido con código propio limpio en Astro, con una capa de theming por tokens
para cambiar colores, tipografías y assets desde un solo lugar.

El contenido proviene del *Proyecto de Vida Apostólica · Reglas de Vida*
(v2.0, 1 de abril de 2019) y de las presentaciones institucionales (Misión,
Visión y el material de Koinonías). La estructura de navegación se inspiró
inicialmente en un sitio de referencia y se reconstruyó por completo.

## Stack

- [Astro](https://astro.build) — HTML estático, cero JS por defecto
- CSS con custom properties (design tokens) — sin dependencias de UI

## Empezar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist estático
```

## Re-tematización (colores, fuentes, assets)

Toda la identidad visual vive en **un solo archivo**:

1. **Colores y tipografía** → `src/styles/tokens.css`
   Paleta actual: azul mariano (`--c-brand-*`) + dorado litúrgico (`--c-accent-*`),
   tomada del logo oficial. Cambia las variables y todo el sitio se actualiza.
2. **Fuentes** → `tokens.css` (`--font-*`) + el `<link>` de Google Fonts en
   `src/layouts/BaseLayout.astro` (Playfair Display, Lato, Josefin Sans).
3. **Assets** → `public/assets/`
   - `logos/logo-redondo.png` — logo oficial a color (usado en el header)
   - `logos/1.png` … `5.png` — variantes de logo
4. **Navegación y datos** → `src/data/site.ts`

## Contenido

Todo el texto de las páginas vive en `src/data/pages.ts` (data-driven): una
entrada por página, renderizada por `src/pages/[...slug].astro`. Para editar o
añadir una página, se edita ese archivo de datos (no hay que tocar HTML).

## Estructura

```
src/
├── styles/tokens.css     ← identidad visual (única fuente)
├── data/
│   ├── site.ts           ← nav + config del sitio
│   └── pages.ts          ← contenido de todas las páginas
├── layouts/BaseLayout.astro
├── components/           ← Header, Footer, Hero, FeatureGrid, PlaceholderForm
└── pages/
    ├── index.astro       ← portada
    └── [...slug].astro   ← genera todas las páginas desde pages.ts
```

## Páginas

Inicio · Nuestra Identidad (Misión/Visión) · Nuestro Carisma · Historia ·
Compromiso Apostólico · Koinonías · Espiritualidad · Formación · Consagración ·
Comunión y Colaboración · Comunidades Externas · Organización · Reglas de Vida ·
Contacto.

## Pendientes sugeridos

- Conectar el formulario de contacto a un backend o servicio real.
- Reemplazar los datos de contacto/redes en `src/data/site.ts`.
- La presentación general `.ppt` es principalmente imágenes; si se necesita su
  contenido, conviene convertirla con LibreOffice a imágenes/PDF.

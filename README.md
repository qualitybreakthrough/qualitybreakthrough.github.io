# qa-site — starter Jekyll para GitHub Pages

## Publicar en 5 pasos

1. Crea un repositorio en GitHub llamado `tu-usuario.github.io` (sustituye por tu usuario real).
2. Sube todo el contenido de esta carpeta a la raíz del repo (no dentro de una subcarpeta).
3. Edita `_config.yml`: cambia `url` por tu dominio real (`https://tu-usuario.github.io`).
4. En GitHub → Settings → Pages → Source, selecciona la rama `main` y carpeta `/ (root)`.
5. Espera 1-2 minutos. Tu sitio estará en `https://tu-usuario.github.io`.

## Añadir una entrada nueva

Crea un archivo en `_posts/` con el nombre `AAAA-MM-DD-titulo-corto.md`:

```
---
title: "Título del post"
status: pass   # pass | fail | pending
tags: [qa, testing]
---

Contenido en Markdown.
```

## Probar en local (opcional)

Requiere Ruby instalado.

```bash
gem install bundler jekyll
bundle init
echo 'gem "jekyll"' >> Gemfile
bundle install
bundle exec jekyll serve
```

Abre `http://localhost:4000`.

## Estructura

```
_config.yml       configuración del sitio
_layouts/         plantillas HTML (default.html, post.html)
_posts/           entradas del blog
assets/css/       estilos
index.html        página principal con listado de casos
```

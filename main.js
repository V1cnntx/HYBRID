# Hybrid Culture — Assets

Coloca aquí tus archivos de imagen y video para la presentación.

## Estructura sugerida

```
assets/
  ├── hero-bg.jpg          → Foto/video de fondo del hero (1920x1080)
  ├── crossfit-phone.mp4   → Video para mockup de celular (categoría Crossfit)
  ├── gym-phone.mp4        → Video para mockup de celular (categoría Gym)
  ├── street-phone.mp4     → Video para mockup de celular (categoría Street)
  ├── logo.svg             → Logo vectorial de la marca
  └── og-image.jpg         → Imagen para Open Graph (1200x630)
```

## Para agregar imágenes a los mockups de celular

En `js/main.js`, función `populateCategories()`, reemplaza el placeholder SVG por:

```html
<img src="/brands/hybrid-culture/assets/crossfit-phone.jpg" alt="Crossfit collection" />
```

O para video autoplay:
```html
<video autoplay muted loop playsinline>
  <source src="/brands/hybrid-culture/assets/crossfit-phone.mp4" type="video/mp4" />
</video>
```

## Formatos recomendados
- Imágenes: WebP o JPEG optimizado (< 300KB por imagen)
- Videos: MP4 H.264 (< 5MB por video), resolución 9:16 para teléfonos
- Logo: SVG preferiblemente

# AudioLibros

Sitio web de suscripción a audiolibros hecho con React, Vite y Tailwind CSS.
Trabajo final de _Programación Web II_.

🔗 **Sitio publicado:** _próximamente_

## Funcionalidades

- **Inicio:** libros clásicos obtenidos de la [API de Open Library](https://openlibrary.org/developers/api) (título, autor, año y portada).
- **Servicios:** planes de suscripción armados a partir de un array local de objetos literales, cada uno con imagen.
- **Perfil:** quiénes somos, misión y por qué elegir la plataforma.
- **Contacto:** formulario funcional que envía mails con EmailJS, con un mapa de Google Maps embebido.
- Enrutamiento con React Router y diseño adaptable a celular.

## Tecnologías

React · Vite · Tailwind CSS · React Router · EmailJS · API de Open Library · GitHub Pages

## Cómo correrlo en tu computadora

```bash
npm install
npm run dev
```

Creá un archivo `.env.local` en la raíz del proyecto con tus claves de EmailJS:

```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

---

👩‍💻 **Eliana Ayarachi** · [GitHub](https://github.com/ayarachi)

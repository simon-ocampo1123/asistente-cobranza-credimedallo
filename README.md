# Asistente de Cobranza · CrediMedallo Hogar S.A.S.

Proyecto integrador · IA para la Vida y los Negocios · IUBello 2026-2.
Negocio y datos inventados. Los clientes se identifican solo por código (C-001 a C-020).

## Archivos
- `index.html`: el chat (vista del cliente y «Vista de Laura»).
- `config.js`: configuración del modelo y lectura segura de API Key.
- `netlify.toml`: configuración para despliegue estático en Netlify.
- `politicas_cobro_credimedallo.txt`: políticas de cobro (fuente de verdad).
- `base_cartera_credimedallo.xlsx`: base de cartera con 20 clientes (fuente de verdad).

El chat lee las políticas y la base desde estos archivos cada vez que se abre.
Para cambiar un dato, edita el .txt o el .xlsx y vuelve a subirlos.

## Probar en el computador
Abrir `index.html` con doble clic directo puede bloquear la lectura de archivos por CORS.
Usa un servidor local en esta carpeta:

```bash
python -m http.server 8000
# o también:
npx serve .
```

y abre `http://localhost:8000`. En VS Code también sirve la extensión «Live Server».

## Despliegue en Netlify
1. Conecta este repositorio en [Netlify](https://app.netlify.com/):
   - **Add new site** → **Import an existing project** → **GitHub**.
   - Selecciona el repositorio `asistente-cobranza-credimedallo`.
   - Rama: `main`.
   - Build command: *(dejar vacío)*.
   - Publish directory: `.` *(raíz)*.
2. Haz clic en **Deploy site**.
3. Al abrir el sitio desplegado en Netlify, haz clic en el botón **🔑 API Key** o **🔑 Ingresar API Key** para pegar tu clave de Google Gemini (se guarda localmente en tu navegador sin exponerse en el repositorio). También puedes acceder con `https://tu-sitio.netlify.app/?key=TU_API_KEY`.

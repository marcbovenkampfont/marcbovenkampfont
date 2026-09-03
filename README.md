# Portfolio Profesional - Marc van der Biest

Portfolio profesional desarrollado con React + TypeScript + SCSS.

## 🚀 Tecnologías

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **SCSS** - Preprocesador CSS
- **Vite** - Herramienta de construcción y desarrollo rápido

## 📦 Instalación

```bash
npm install
```

## 🛠️ Comandos disponibles

### Modo desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en http://localhost:5173 (o siguiente puerto disponible)

### Construir para producción
```bash
npm run build
```
Genera los archivos optimizados en la carpeta `dist/`

### Vista previa de producción
```bash
npm run preview
```
Sirve la versión de producción localmente para pruebas

### Linting
```bash
npm run lint
```
Ejecuta ESLint para verificar la calidad del código

## 📁 Estructura del proyecto

```
marcbovenkampfont/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Header.scss
│   │   ├── Navigation.tsx
│   │   ├── Navigation.scss
│   │   ├── Footer.tsx
│   │   ├── Footer.scss
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectCard.scss
│   │   ├── TimelineItem.tsx
│   │   ├── TimelineItem.scss
│   │   ├── SkillsCategory.tsx
│   │   ├── SkillsCategory.scss
│   │   └── sections/        # Secciones de contenido
│   │       ├── Inicio.tsx
│   │       ├── Inicio.scss
│   │       ├── Proyectos.tsx
│   │       ├── Proyectos.scss
│   │       ├── Experiencia.tsx
│   │       ├── Experiencia.scss
│   │       ├── Habilidades.tsx
│   │       ├── Habilidades.scss
│   │       ├── Contacto.tsx
│   │       └── Contacto.scss
│   ├── styles/              # Estilos globales
│   │   ├── index.scss
│   │   └── App.scss
│   ├── App.tsx              # Componente principal
│   └── main.tsx             # Punto de entrada
├── images/                  # Imágenes del proyecto
├── index.html               # HTML base
├── package.json             # Dependencias y scripts
├── tsconfig.json            # Configuración TypeScript
├── vite.config.ts           # Configuración Vite
└── README.md

```

## 🎨 Características

- ✅ **Componentes modulares** - Arquitectura basada en componentes reutilizables
- ✅ **TypeScript** - Tipado estático para mayor seguridad y autocompletado
- ✅ **SCSS** - Estilos organizados con preprocesador CSS
- ✅ **Responsive Design** - Adaptable a todos los dispositivos
- ✅ **Navegación por secciones** - Sistema de navegación entre secciones
- ✅ **Indicador de scroll** - Barra de progreso visual
- ✅ **Animaciones suaves** - Transiciones y efectos visuales

## 📱 Secciones

1. **Inicio** - Presentación personal
2. **Proyectos** - Portfolio de proyectos destacados
3. **Experiencia** - Timeline de experiencia profesional
4. **Habilidades** - Skills técnicos organizados por categorías
5. **Contacto** - Información de contacto

## 🌐 Despliegue en GitHub Pages

El proyecto ya queda preparado para publicar en GitHub Pages.

1. Asegura que el repositorio en GitHub se llame `marcbovenkampfont`.

2. Ejecuta el deploy:
   ```bash
   npm run deploy
   ```

3. En GitHub ve a **Settings > Pages** y selecciona:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`

4. Tu web quedará publicada en:
   - `https://<tu-usuario>.github.io/marcbovenkampfont/`

Notas:
- El script `predeploy` ejecuta el build automáticamente antes de publicar.
- La configuración `base` de Vite está ajustada a `/marcbovenkampfont/` para que las rutas funcionen correctamente en GitHub Pages.

## 📝 Notas

- El proyecto usa Vite para un desarrollo rápido y builds optimizados
- Todos los componentes están tipados con TypeScript para mayor seguridad
- Los estilos están modularizados usando SCSS con scope por componente
- Las imágenes deben estar en la carpeta `images/` en la raíz del proyecto

## 🔧 Desarrollo

El proyecto está configurado con:
- Hot Module Replacement (HMR) para desarrollo rápido
- ESLint para mantener calidad de código
- TypeScript strict mode para máxima seguridad de tipos

---

Desarrollado con ❤️ por Marc van der Biest

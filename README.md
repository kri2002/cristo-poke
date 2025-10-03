# cristo-poke

Prueba técnica de desarrollo con la API de Pokémon.

## Descripción General

**cristo-poke** es una aplicación web moderna construida con React y Vite que permite a los usuarios explorar el mundo de los Pokémon. La aplicación consume datos de la [PokeAPI](https://pokeapi.co/) para mostrar una Pokédex interactiva. Los usuarios pueden navegar a través de una lista paginada de Pokémon, buscar criaturas específicas por su nombre o ID, y ver información detallada de cada una.

El proyecto está diseñado con un enfoque en la componentización, la reutilización de lógica a través de custom hooks y un diseño responsivo gracias a Tailwind CSS.

## Características Principales

* **Galería de Pokémon**: Visualiza una lista paginada de Pokémon con sus imágenes y tipos.
* **Búsqueda en Tiempo Real**: Un buscador con *debounce* para encontrar Pokémon por nombre o número de ID sin sobrecargar la API.
* **Vista Detallada**: Al hacer clic en un Pokémon, se abre un modal con sus estadísticas base, imagen y la opción de reproducir su grito característico.
* **Paginación**: Navegación sencilla entre las diferentes páginas de la lista de Pokémon.
* **Diseño Responsivo**: La interfaz se adapta a diferentes tamaños de pantalla, desde móviles hasta ordenadores de escritorio.
* **Animaciones Fluidas**: Se utilizan animaciones sutiles con `framer-motion` para mejorar la experiencia de usuario.
* **Pruebas Unitarias**: El proyecto incluye pruebas para componentes y hooks, garantizando la fiabilidad del código.

## Tecnologías Utilizadas

* **Framework**: [React](https://reactjs.org/)
* **Bundler**: [Vite](https://vitejs.dev/)
* **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
* **Routing**: [React Router](https://reactrouter.com/)
* **Peticiones HTTP**: [Axios](https://axios-http.com/)
* **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
* **Testing**: [Jest](https://jestjs.io/) y [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Instalación y Puesta en Marcha

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1.  **Clonar el repositorio** (si aplica)
    ```bash
    git clone <url-del-repositorio>
    cd cristo-poke
    ```

2.  **Instalar dependencias**
    El proyecto utiliza `pnpm` como gestor de paquetes. Para instalar todas las dependencias, ejecuta:
    ```bash
    pnpm install
    ```

## Scripts Disponibles

Una vez instaladas las dependencias, puedes utilizar los siguientes scripts definidos en el archivo `package.json`:

* **`pnpm dev`**: Inicia la aplicación en modo de desarrollo con hot-reloading. Podrás acceder a ella en [http://localhost:5173](http://localhost:5173).

* **`pnpm build`**: Compila y empaqueta la aplicación para producción. Los archivos optimizados se generarán en la carpeta `dist/`.

* **`pnpm preview`**: Sirve el contenido de la carpeta `dist/` para previsualizar la versión de producción de forma local.

* **`pnpm test`**: Ejecuta la suite de pruebas automatizadas utilizando Jest y React Testing Library.

## Estructura del Proyecto

El código fuente se encuentra principalmente en el directorio `src/` y está organizado de la siguiente manera:

````

src/
├── assets/         \# Archivos estáticos como imágenes y SVGs.
├── components/     \# Componentes reutilizables de React.
│   ├── common/     \# Componentes genéricos (Navbar, Loader, Pagination).
│   └── pokemon/    \# Componentes específicos de Pokémon (Card, List, Modal).
├── hooks/          \# Custom Hooks para la lógica de estado (usePokedex, useDebounce).
├── pages/          \# Componentes que representan las páginas de la aplicación (HomePage, PokedexPage).
├── services/       \# Módulos para interactuar con APIs externas (pokeapi.js).
├── App.jsx         \# Componente principal que define las rutas.
├── main.jsx        \# Punto de entrada de la aplicación.
└── index.css       \# Archivo principal de estilos con directivas de Tailwind CSS.

````

## Pruebas (Testing)

El proyecto cuenta con pruebas unitarias y de integración para asegurar el correcto funcionamiento de los componentes y la lógica de negocio. Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
pnpm test
````

```
```
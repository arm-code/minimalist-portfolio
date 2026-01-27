# Minimalist Portfolio

Un portafolio minimalista desarrollado con React, TypeScript y Vite, con autenticación mediante Supabase.

## Configuración de las variables de entorno

### 1. Crear el archivo de variables de entorno
- Copiar el archivo `.env.local.template` y renombrarlo a `.env.local`
- El archivo `.env.local` no se subirá al repositorio (está en `.gitignore`)

### 2. Obtener las credenciales de Supabase
1. Ve a tu proyecto en [Supabase](https://supabase.com/dashboard)
2. Navega a **Settings** → **API**
3. Copia los siguientes valores:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **Anon/Public Key** → `VITE_SUPABASE_PUBLISHABLE_KEY`

### 3. Configurar el archivo `.env.local`
Reemplaza los valores en el archivo `.env.local`:

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=tu-clave-publica-aqui
```

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview
```

## Autenticación

Este proyecto utiliza **Supabase Authentication** con magic links:
- Los usuarios se autentican mediante enlaces mágicos enviados por email
- No requiere contraseñas
- La sesión se mantiene automáticamente
- El componente `AuthPage` maneja todo el flujo de autenticación

## Estructura del proyecto

```
src/
├── components/       # Componentes reutilizables
├── pages/           # Páginas del portfolio
│   ├── AuthPage.tsx # Página de autenticación
│   └── ...
├── utils/           # Utilidades
│   ├── supabaseClient.ts  # Cliente de Supabase
│   └── useAuth.ts         # Hook de autenticación
└── ...
```

## Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Supabase** - Backend as a Service (autenticación)
- **React Icons** - Iconos
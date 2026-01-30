/// <reference types="vite/client" />

// Image type declarations
declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const value: string;
    export default value;
}

declare module '*.gif' {
    const value: string;
    export default value;
}

declare module '*.webp' {
    const value: string;
    export default value;
}

// Environment variables type declarations
interface ImportMetaEnv {
    readonly VITE_SUPABASE_URL: string;
    readonly VITE_SUPABASE_PUBLISHABLE_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}


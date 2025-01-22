import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        cors: {
            origin: ["http://localhost:8000", "http://127.0.0.1:8000"], // Permite ambos orígenes
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            allowedHeaders: ["Content-Type", "Authorization"],
            preflightContinue: true,
        },
        host: "127.0.0.1", // Asegúrate de usar la misma IP que el servidor de Laravel
    },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            },
            manifest: {
                name: 'Prosperify',
                short_name: 'Prosperify',
                description: 'An amazing app for managing personal finances',
                theme_color: '#ff0000',
                background_color: '#ffffff',
                display: 'minimal-ui',
                lang: 'pt-BR',
                start_url: '.'
            }
        })
    ]
})

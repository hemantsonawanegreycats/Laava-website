import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://laavafin.com', // Replace with your actual domain when you know it
      dynamicRoutes: [
        '/disclaimer',
        '/terms-of-use',
        '/privacy-policy',
        '/cookies',
        '/investorgrievance',
        '/regulatory-information',
        '/about',
        '/features',
        '/how-it-works',
        '/pricing',
        '/faq',
        '/blog',
        '/insights',
        '/contact'
      ]
    })
  ],
})

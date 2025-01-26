import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        container: {
            center: true
        },
        extend: {
            backgroundImage: {
                globe: "url('/pictures/wallpapers/globe.png')",
                wallpaper1: "url('/pictures/wallpapers/1.png')",
                wallpaper2: "url('/pictures/wallpapers/2.png')",
                wallpaper3: "url('/pictures/wallpapers/3.jpg')",
                wallpaper4: "url('/pictures/wallpapers/4.webp')",
                wallpaper5: "url('/pictures/wallpapers/5.jpg')",
                wallpaper6: "url('/pictures/wallpapers/2.2.png')",
                wallpaper7: "url('/pictures/wallpapers/2.1.png')",
                wallpaper8: "url('/pictures/wallpapers/8.jpg')",
                grid: `
                linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
              `
            },
            backgroundSize: {
                gridSize20: '20px 20px',
                gridSize40: '40px 40px' // Adjust this value for grid spacing
            },
            colors: {
                whitesmoke: '#f7f6f6',
                text: '#1e293b',
                highlight: '#475569',
                semihighlight: '#ffffff',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                }
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: `calc(var(--radius) - 4px)`
            }
        }
    },
    plugins: []
} satisfies Config;

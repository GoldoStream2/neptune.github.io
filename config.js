// Configuration file for Neptune Scripts website
// Feel free to edit these values to customize the website

export const config = {
    // General settings
    siteName: "Neptune Scripts",
    siteDescription: "Exécuteur de scripts premium pour Roblox",
    
    // Social links
    discordInviteLink: "https://discord.gg/neptunescripts",
    telegramLink: "https://t.me/neptunescripts",
    twitterLink: "https://twitter.com/neptunescripts",
    youtubeLink: "https://youtube.com/neptunescripts",
    
    // Pricing
    pricingBasic: "Gratuit",
    pricingPremium: "€9.99",
    pricingLifetime: "€79.99",
    
    // Features configuration
    features: {
        aimbot: true,
        esp: true,
        speedHack: true,
        antiDetection: true,
        customScripts: true
    },
    
    // Scripts database
    popularScripts: [
        {
            name: "AimBot Pro",
            description: "Visée automatique avancée avec détection à travers les murs et personnalisation complète.",
            isPremium: true,
            views: 2400,
            code: "loadstring(game:HttpGet('https://neptunescripts.com/scripts/aimbot.lua'))()"
        },
        {
            name: "ESP Ultimate",
            description: "Visualisation des joueurs à travers les murs avec options de couleur et distance.",
            isPremium: false,
            views: 3800,
            code: "loadstring(game:HttpGet('https://neptunescripts.com/scripts/esp.lua'))()"
        },
        {
            name: "Speed Hack",
            description: "Modification de la vitesse de déplacement avec contrôle précis et touche de raccourci.",
            isPremium: true,
            views: 1900,
            code: "loadstring(game:HttpGet('https://neptunescripts.com/scripts/speed.lua'))()"
        }
    ],
    
    // Color theme
    theme: {
        primary: "#00c3ff",
        secondary: "#ff00d4",
        dark: "#121212",
        darker: "#0a0a0a",
        light: "#f5f5f5"
    },
    
    // 3D background configuration
    backgroundEffect: {
        enabled: true,
        particleCount: 1000,
        particleSize: 0.02,
        particleColor: "#00c3ff",
        rotationSpeed: 0.002
    }
};


export const siteConfig = {
    name: import.meta.env.VITE_APP_NAME || "QuickOrder",
    contact: {
        phone: import.meta.env.VITE_CONTACT_PHONE || "+91 73046 50706",
        rawPhone: import.meta.env.VITE_RAW_PHONE || "7304650706",
        email: import.meta.env.VITE_CONTACT_EMAIL || "quick.order001@gmail.com",
        whatsapp: `https://wa.me/${import.meta.env.VITE_RAW_PHONE || "7304650706"}`,
    },
    pricing: {
        original: import.meta.env.VITE_PRICE_ORIGINAL || "2,999",
        discounted: import.meta.env.VITE_PRICE_DISCOUNTED || "1,599",
    }
};

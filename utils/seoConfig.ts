// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://thehouseexclusive.com", // Change this to your production URL.
	description:
		"Somos una empresa dedicada a la personalización de prendas de vestir, deseamos poder brindarle diseños exlusivos a nuestros clientes, con la mejor calidad en material y confección profesional. Estamos ubicados en la ciudad de Cartago y podemos realizar envíos a nivel nacional, todo desde precios acequibles", // Change this to be your website's description.
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630", // Change this to your website's thumbnail.
		alt: "Personalización, diseño exclusivo y la mejor calidad de material y proceso de confección, cobertura a nivel nacional", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "thehouseexclusive.com", // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "thehouseexclusive.com", // Change this to your website's name.
	short_name: "thehouseexclusive.com", // Change this to your website's short name.
	description:
		"Somos una empresa dedicada a la personalización de prendas de vestir, deseamos poder brindarle diseños exlusivos a nuestros clientes, con la mejor calidad en material y confección profesional. Estamos ubicados en la ciudad de Cartago y podemos realizar envíos a nivel nacional, todo desde precios acequibles", // Change this to your websites description.
	theme_color: "#30E130", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}

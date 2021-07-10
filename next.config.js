const withImages = require("next-images");

module.exports = withImages({
	images: {
		domains: [
			"assets.vercel.com",
			"picsum.photos",
			"rickandmortyapi.com",
			"pbs.twimg.com",
		],
	},
	webpack(config, options) {
		return config;
	},
	i18n: {
		locales: ["en", "fr", "no"],
		defaultLocale: "en",
        localeDetection: false,
	},
});

const withImages = require("next-images");
const nextTranslate = require('next-translate')

module.exports = nextTranslate({
	images: {
		domains: [
			"assets.vercel.com",
			"picsum.photos",
			"rickandmortyapi.com",
			"pbs.twimg.com",
		],
	},
	webpack(config, { isServer, webpack }) {
		return config;
	},

	// i18n: {
	// 	locales: ["en", "fr", "no"],
	// 	defaultLocale: "en",
    //     localeDetection: false,
	// 	pages: {
	// 		"*": ["common"]
	// 	  }
	// },
});

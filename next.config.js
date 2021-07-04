// const withImages = require('next-images')

// module.exports = {
// 	images: {
// 	  domains: ['assets.vercel.com', 'picsum.photos', 'rickandmortyapi.com'],
// 	},
//   }

// module.exports = withImages()


const withImages = require("next-images");

module.exports = withImages({
    images: {
        domains: ['assets.vercel.com', 'picsum.photos', 'rickandmortyapi.com'],
    },
    webpack(config, options) {
        return config;
    }
});
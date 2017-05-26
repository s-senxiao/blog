var publicPath = './public',
    viewsPath = './views',
    distPublicPath = './dist/public',
    distViewsPath = './dist/views';

module.exports = {
    publicPath: publicPath,
    viewsPath: viewsPath,
    distPublicPath: distPublicPath,
    distViewsPath: distViewsPath,

    jade: {
        srcPath: viewsPath + '/**/*.jade',
        distPath: distViewsPath,
        revPath: './build/rev/**/*.json'
    },

    style: {
        srcPath: publicPath + '/styles/**/*.css',
        distPath: distPublicPath + '/styles',
        revPath: './build/rev/style'
    },

    sass: {
        srcPath: publicPath + '/styles/**/*.scss',
        distPath: distPublicPath + '/styles',
        revPath: './build/rev/style'
    },

    script: {
        srcPath: publicPath + '/scripts/**/*.js',
        distPath: distPublicPath + '/scripts',
        revPath: './build/rev/script'
    },

    image: {
        srcPath: publicPath + '/images/**/*.{jpg,jpeg,png,gif,ico,svg}',
        distPath: distPublicPath + '/images',
        revPath: './build/rev/image'
    },

    // font: {
    //   src: publicPath + '/**/*.css',
    // }

};
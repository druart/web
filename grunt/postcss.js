module.exports = {	
    options: {
        map: true,
        processors: [
            require('autoprefixer')({ browsers: ['last 2 versions', 'ie 6-8', 'Firefox > 20']  }),
            require('cssnano'),
            require('pixrem')
        ]
    },
    dist: {
        src: './css/style-post.css',
        dest: './css/style.css'
    }
};
module.exports = {
    options: {
    },
    dev: {
        options: {
            outputStyle: 'expanded'
        },
        files: {
            './css/style-post.css': './css/style.scss'
        }
    },
    production: {
        options: {
            outputStyle: 'compressed'
        },
        files: {
            './css/style.min.css': './css/style-post.css'
        }
    }
};
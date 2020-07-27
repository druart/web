module.exports = {
    options: {
        // the banner is inserted at the top of the output
         banner: '/*! <%= grunt.template.today("dd-mm-yyyy") %> */\n',
    },
    production: {
        files: {
            './js/main.min.js': './js/main.js'
        }
    }
};
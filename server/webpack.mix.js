const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps()
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./tailwind.config.js')
        ]
    })
    .webpackConfig({
        stats: {
            children: true,
        },
    })
    .browserSync({
        proxy: '192.168.0.100',
        port: 80,
        files: [
            'app/**/*',
            'public/**/*',
            'resources/views/**/*',
            'resources/lang/**/*',
            'routes/**/*'
        ],
        notify: {
            styles: {
                top: 'auto',
                bottom: '0'
            }
        },
    })
    .disableSuccessNotifications();
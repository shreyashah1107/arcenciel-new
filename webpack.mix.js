const mix = require('laravel-mix');

mix.sass('resources/sass/style.scss', 'public/css')
   .options({ autoprefixer: false, processCssUrls: false })
   .js('resources/js/custom.js', 'public/js')
   .sourceMaps();
   // .browserSync({
   //    proxy: ''
   // });
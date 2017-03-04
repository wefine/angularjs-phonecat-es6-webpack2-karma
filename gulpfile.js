let gulp = require('gulp');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let babel = require('gulp-babel');

let gulpWebpack = require('webpack-stream');
let webpack = require('webpack');

let templateCache = require('gulp-angular-templatecache');


gulp.task('es6', () => {
    return gulp.src('dist/**/*.bundle.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('template', function () {
    return gulp.src('src/app/**/*.template.html')
        .pipe(templateCache({
            filename: 'templates.module.js',
            standalone: true,
            moduleSystem: 'ES6'
        }))
        .pipe(gulp.dest('src/app'));
});

gulp.task('webpack', function () {
    gulp.src('src/app/index.module.js')
        .pipe(gulpWebpack(require('./webpack.config.js'), webpack))
        .pipe(gulp.dest('dist/'));
});

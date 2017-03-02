let gulp = require('gulp');
let templateCache = require('gulp-angular-templatecache');

gulp.task('default', function () {
    return gulp.src('src/app/**/*.template.html')
        .pipe(templateCache({
            filename: 'templates.module.js',
            standalone: true,
            moduleSystem: 'ES6'
        }))
        .pipe(gulp.dest('src/app'));
});
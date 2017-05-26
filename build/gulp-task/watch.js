var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass');

module.exports = function() {
    gulp.task('watch', function() {
        gulp.run('browser-sync', ['sass:watch']);
    });

    gulp.task('browser-sync', function() {
        browserSync.init(null, {
            proxy: 'http://localhost:3000',
            files: ['public/**/*.*', 'views/**/*.*', 'submodule/**/*.*'],
            browser: false,
            notify: false,
            port: 5000
        });
    });

    gulp.task('sass', function() {
        return gulp.src('./public/styles/**/*.scss')
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(gulp.dest('./public/styles'));
    });

    gulp.task('sass:watch', function() {
        gulp.watch('./public/styles/**/*.scss', ['sass'])
    });
};
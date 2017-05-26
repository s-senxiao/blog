var gulp = require('gulp'),
    rev = require('gulp-rev');

var config = require('../config').image;

module.exports = function() {
    return gulp.src(config.srcPath)
        .pipe(rev())
        .pipe(gulp.dest(config.distPath))
        .pipe(rev.manifest())
        .pipe(gulp.dest(config.revPath))
};
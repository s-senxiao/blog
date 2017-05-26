var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    revCollector = require('gulp-rev-collector');

var config = require('../config').sass;

module.exports = function() {
    return gulp.src([config.revPath + '/../**/*.json', config.srcPath])
        .pipe(sass())
        .pipe(revCollector())
        .pipe(rev())
        .pipe(gulp.dest(config.distPath))
        .pipe(rev.manifest())
        .pipe(gulp.dest(config.revPath))
};
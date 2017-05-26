var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector');

var config = require('../config').style;

module.exports = function() {
    return gulp.src([config.revPath + '/../**/*.json', config.srcPath])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(minifyCss())
        // .pipe(rename({
        //   suffix: '.min'
        // }))
        .pipe(rev())
        .pipe(gulp.dest(config.distPath))
        .pipe(rev.manifest())
        .pipe(gulp.dest(config.revPath))
};
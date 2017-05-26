var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector');

var config = require('../config').script;

module.exports = function() {
    return gulp.src([config.revPath + '/../**/*.json', config.srcPath])
        .pipe(revCollector())
        .pipe(uglify())
        // .pipe(rename({
        //   suffix: '.min'
        // }))
        .pipe(rev())
        .pipe(gulp.dest(config.distPath))
        .pipe(rev.manifest())
        .pipe(gulp.dest(config.revPath))

};
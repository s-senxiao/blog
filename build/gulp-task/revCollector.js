var gulp = require('gulp'),
    revCollector = require('gulp-rev-collector');

var config = require('../config');

module.exports = function() {
    return gulp.src([config.jade.revPath, config.jade.srcPath])
        .pipe(revCollector({
            replaceReved: true,
            dirReplacements: {}
        }))
        .pipe(gulp.dest(config.jade.distPath))
};
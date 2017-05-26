// 输出目录为 ./dist
// 通过执行./build/index.js文件里的函数引入所有需要的task
// config目录定义了task中需要的文件路径，便于管理路径




var gulp = require('gulp'),
    runSequence = require('gulp-run-sequence');

var gulpImport = require('./build/index');

gulpImport(['clean', 'style', 'sass', 'script', 'image', 'revCollector']);

gulp.task('build', function() {
  //按顺序同步执行task
  runSequence('clean', 'image', ['style', 'sass', 'script'], 'revCollector')
});

//watch
(require('./build/gulp-task/watch'))();

gulp.task('watch', function () {
  gulp.run('browser-sync', ['sass:watch']);
});
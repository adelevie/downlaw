var gulp = require('gulp');
var react = require('gulp-react');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var browserify = require('gulp-browserify');

// comment the next line if you don't want the js to be minified.
gutil.env.type = 'production';

gulp.task('default', function () {
  return gulp.src('src/app.jsx')
    .pipe(react())
    .pipe(browserify({insertGlobals : true, debug : gutil.env.type !== 'production'}))
    .pipe(gutil.env.type === 'production' ? uglify({outSourceMap: true}) : gutil.noop())
    .pipe(gulp.dest('build'));
});
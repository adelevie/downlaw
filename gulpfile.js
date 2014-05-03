var gulp = require('gulp');
var react = require('gulp-react');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

// comment the next line if you don't want the js to be minified.
gutil.env.type = 'production';

gulp.task('default', function () {
  return gulp.src('src/app.jsx')
    .pipe(react())
    .pipe(gutil.env.type === 'production' ? uglify({outSourceMap: true}) : gutil.noop())
    .pipe(gulp.dest('build'));
});
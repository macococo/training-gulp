var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  minifyCss = require('gulp-minify-css'),
  imagemin = require('gulp-imagemin'),
  rimraf = require('rimraf');

var path = {
  js: ['../vendor/**/*.js'],
  css: ['../vendor/**/*.css']
}

gulp.task('clean', function(cb){
  rimraf('dist/', cb);
});

gulp.task('bench-concat', ['clean'], function() {
  gulp.src(path.js)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('bench-uglify', ['clean'], function() {
  gulp.src(path.js)
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('bench-cssmin', ['clean'], function() {
  gulp.src(path.css)
    .pipe(minifyCss())
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('bench-imagemin', ['clean'], function() {
  gulp.src(['../images/**/*.{png,jpg,gif}'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('default', ['bench-concat', 'bench-uglify', 'bench-cssmin', 'bench-imagemin']);
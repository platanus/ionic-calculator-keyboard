var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),
  bump = require('gulp-bump'),
  notify = require('gulp-notify'),
  git = require('gulp-git'),
  size = require('gulp-size'),
  ngannotate = require('gulp-ng-annotate');

var paths = {
  js_src: [
    './src/calculator.js',
    './src/calculator-srv.js',
    './src/calculator-keyboard-srv.js'
  ],
  css_src: ['./src/*.css'],
  dist: ['./dist/*.js'],
};

var sourceMinJS = 'calculator-keyboard.min.js';
var sourceMinCSS = 'calculator-keyboard.min.js';

gulp.task('lint', function() {
  return gulp.src(paths.js_src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-js', ['lint'], function() {
  return gulp.src(paths.js_src)
    .pipe(ngannotate())
    .pipe(uglify())
    .pipe(concat(sourceMinJS))
    .pipe(size())
    .pipe(gulp.dest('dist'))
    .pipe(notify('JS Build finished'));
});

gulp.task('build-css', function() {
  return gulp.src(paths.css_src)
    .pipe(gulp.dest('dist'))
    .pipe(concat(sourceMinCSS))
    .pipe(notify('CSS Build finished'));
});

gulp.task('build',['build-js', 'build-css'], function(){
  console.log('Build finished');
});

gulp.task('bump', function() {
  return gulp.src(['./package.json'])
    .pipe(bump({
      type: gulp.env.type
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('publish', ['bump'], function() {
  var pkg = require('./package.json');
  var msg = 'Bumps version ' + pkg.version;
  gulp.src('./*.json')
    .pipe(git.add())
    .pipe(git.commit(msg));

  setTimeout(function() {
    git.tag('v' + pkg.version, msg, function() {});
  }, 1000);
});

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('browserify', function(){

  /* example init */
  gulp.src('src/js/example-init.js')
  .pipe(browserify({transform: 'reactify', debug: true}))
  .pipe(concat('example-init.js'))
  .pipe(gulp.dest('dist/js'));

  /* rixif for require */
  gulp.src('src/js/rixif.js')
  .pipe(browserify({transform: 'reactify', debug: false}))
  .pipe(concat('rixif.js'))
  .pipe(gulp.dest('dist/js'));

});

gulp.task('copyHTML', function(){
  gulp.src('src/index.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('copyHTMLstats', function(){
  gulp.src('src/indexStats.html')
  .pipe(rename('index.html'))
  .pipe(gulp.dest('dist'));
});

gulp.task('copyJSandCSS', function(){
  gulp.src('src/css/*')
  .pipe(gulp.dest('dist/css'));

  gulp.src('dist/js/rixif.js')
  .pipe(rename('index.js'))
  .pipe(gulp.dest('./'));
});

gulp.task('dev',['browserify','copyJSandCSS','copyHTMLstats']);

gulp.task('watch', function(){
  gulp.watch('src/**/*.*', ['dev']);
});

// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --enable-precise-memory-info



var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();
    plugins.minifycss = require('gulp-minify-css');
var config = {
  coffee : {
    src : 'src/coffee/**/*.coffee',
    dest : 'src/scripts'
  },
   sass : {
    src  : 'src/sass/**/*.scss',
    dest : 'src/styles'
  },
  usemin : {
    src : 'src/*.html',
    dest : 'build/'
  },
  images : {
    src  : 'src/images/**/*',
    dest : 'build/images'
  }
}

// Scripts
gulp.task('scripts', function() {
  gulp.src(config.coffee.src)
    .pipe(plugins.coffee())
    .on('error', plugins.util.log)
    .pipe(gulp.dest(config.coffee.dest))
    .pipe(plugins.notify({ message: 'Scripts done Master!' }));
});

// Styles
gulp.task('styles', function() {
  gulp.src(config.sass.src)
    .pipe(plugins.compass({
      config_file : './config.rb',
      css : config.sass.dest,
      sass : 'src/sass',
      errLogToConsole: true
    }))
    .on('error', plugins.util.log)
    .pipe(gulp.dest(config.sass.dest))
    .pipe(plugins.notify({ message: 'Styles done Master!' }));
});

// Images
gulp.task('images', function() {
  return gulp.src(config.images.src)
  .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
  .pipe(gulp.dest(config.images.dest))
  .pipe(plugins.notify({ message: 'Images done Master!' }));
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['./build'], {read: false})
  .pipe(plugins.rimraf());
});

// Usemin
gulp.task('usemin', function() {
  gulp.src(config.usemin.src)
    .pipe(plugins.usemin({
      js : [plugins.uglify(), plugins.rev()],
      css : [plugins.minifycss(), plugins.rev()]
    }))
    .pipe(gulp.dest(config.usemin.dest));
});

// Webserver
gulp.task('webserver', function() {
  gulp.src('src')
    .pipe(plugins.webserver({
      livereload: true,
      directoryListing : false,
      open: true
    }));
});

gulp.task('default', ['clean','webserver','watch'], function() {
  gulp.start('styles', 'scripts');
});

gulp.task('build', ['clean'], function() {
  gulp.start('usemin', 'images');
});

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch(config.sass.src, ['styles']);
  // Watch .coffee files
  gulp.watch(config.coffee.src, ['scripts']);
});

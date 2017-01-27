var gulp        = require('gulp');
var browserify  = require('browserify');
var watchify    = require('watchify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');

module.exports = function jscompile(is_watch){
  var bundler;

  if(is_watch){
    bundler = watchify(browserify('src/main.js').transform(babelify, {"presets": ["es2015", "react"]}));
  }else{
    bundler = browserify('src/main.js').transform(babelify, {"presets": ["es2015", "react"]});
  }

  function bundle(){
    return bundler
      .bundle()
      .on("error", function (err) { console.log("Error : " + err.message); })
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(gulp.dest('dest'));
  }

  bundler.on('update',function(){
    bundle();
  });

  bundler.on('log',function(message){
    console.log( message );
  });

  return bundle();
}
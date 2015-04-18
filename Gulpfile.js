var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
 
gulp.task('browserify', function() {
    return browserify('./assets/js/app.js')
        .transform(babelify, { stage: 0 })
        .bundle()
        .on('error', function(e){
            console.log(e.message);
 
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('assets/js'));
});
 
gulp.task('watch', function() {
    gulp.watch('**/*.js', ['browserify']);
});

const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))


function buildStyles()
{
    return src('stylisize.scss')
            .pipe(sass())
            .pipe(dest('css'))
}

function watchTask()
{
    watch(['stylisize.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)


/*
const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');

// Concat and minify CSS files
gulp.task('build-css', () => {
    return gulp.src('css/*.css')
    .pipe(concat('stylisize.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('build/css'));
});

gulp.task("session-start", (cb) => {
    return gulp.series('build-css')(cb);
});

gulp.task('default', gulp.series('session-start'));

*/
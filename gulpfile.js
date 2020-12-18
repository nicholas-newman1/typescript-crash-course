const gulp = require('gulp');
const ts = require('gulp-typescript');
const minify = require('gulp-uglify');

const copyHtml = () => {
  return gulp.src('src/*.html').pipe(gulp.dest('dist'));
};

const compileTs = () => {
  return gulp
    .src('src/ts/*.ts')
    .pipe(
      ts({
        noImplicitAny: true,
        outFile: 'main.js',
      })
    )
    .pipe(minify())
    .pipe(gulp.dest('dist'));
};

gulp.task('copyHtml', copyHtml);
gulp.task('compileTs', compileTs);

gulp.task('default', gulp.parallel(['copyHtml', 'compileTs']));

gulp.task('watch', () => {
  gulp.watch('src/ts/*.ts', compileTs);
  gulp.watch('src/*.html', copyHtml);
});

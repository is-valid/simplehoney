const gulp = require('gulp');
const browserSync = require('browser-sync');


// Static server
gulp.task('server', function () {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "C:/Users/Yaroslav/Desktop/trepa40v/practic16/3"
        }
    });

    gulp.watch('C:/Users/Yaroslav/Desktop/trepa40v/practic16/3/**/*').on('change', browserSync.reload);
});




var gulp=require('gulp');

// var cssnano=require('gulp-cssnano');
// var concat=require('gulp-concat');
// var uglify=require('gulp-uglify');
// var imgmin=require('gulp-imagemin');
// var clean=require('gulp-clean');

//同步刷新

var browserSync=require('browser-sync').create();
var fs=require('fs');

// gulp.task('css',function(){
//     gulp.src('./src/css/*.css')
//         .pipe(concat('index-merge.css'))
//         .pipe(cssnano())
//         .pipe(gulp.dest('dist/css/'))
// });

// gulp.task('js',function(){
//     gulp.src('./src/js/*.js')
//         .pipe(concat('merge.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js/'))
// })

// gulp.task('img',function(){
//     gulp.src('./src/images/*')
//         .pipe(imgmin())
//         .pipe(gulp.dest('dist/images/'))
// })

// gulp.task('clean',function(){
//     gulp.src('./dist/*',{read:false})
//         .pipe(clean())
// })

//同步刷新
gulp.task('reload',function(){
    browserSync.reload();
});

gulp.task('server',function(){
    browserSync.init({
        server:{
            baseDir:"./src"
        }
    });
    gulp.watch(['**/*.css','**/*.js','**/*.html'],['reload']);
})

gulp.task('build',['css','js','img'])
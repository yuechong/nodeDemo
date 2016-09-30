var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'), //css minifiy
    concat = require('gulp-concat'),		//concat 合并文件
    uglify = require('gulp-uglify'),        //js minifiy
    rename = require('gulp-rename'),		//rename
    imagemin = require('gulp-imagemin');	//image minifiy
    htmlmin = require('gulp-htmlmin')



//公共部分html代码fileinclude
var fileinclude = require('gulp-file-include');
gulp.task('fileinclude', function() {
  gulp.src(['html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});


//浏览器刷新
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//mini html 
gulp.task('htmlmin', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

//mini css
gulp.task('minifycss',function(){
	return gulp.src('css/*.css')
		.pipe(concat('main.css'))
	    .pipe(rename({suffix:'.min'}))
	    .pipe(minifycss())
	    .pipe(gulp.dest('dist/css'))
	    .pipe(gulp.dest('./css'));
});
gulp.task('css',function(){
	return gulp.src('css/main.css')
	    .pipe(rename({suffix:'.min'}))
	    .pipe(minifycss())
	    .pipe(gulp.dest('dist/css'))
	    .pipe(gulp.dest('./css'));
});


//mini js
gulp.task('minifyjs',function(){
	return gulp.src('js/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(gulp(gulp.dest('./js')));
});
gulp.task('js',function(){
	return gulp.src('js/main.js')
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(gulp.dest('./js'));
});



// mini image
gulp.task('minifyimg',function(){
	return gulp.src(['images/*.{jpg,png,svg}','images/**/*.{jpg,png,svg}'])
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});


//默认命令，在cmd中输入gulp
gulp.task('default',function() {
	gulp.start('browser-sync'); 
	// gulp.start('minifycss','minifyjs','minifyimg'); 
});

//watch js、css、html
//gulp.watch("html/*.html",['fileinclude','htmlmin']);
gulp.watch("public/js/*.js").on("change", reload);
gulp.watch("public/css/*.css").on("change", reload);
gulp.watch("views/*.html").on("change", reload);
gulp.watch("model/*.html").on("change", reload);
gulp.watch("index.html").on("change", reload);

var gulp         = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    sourcemaps   = require('gulp-sourcemaps'), //Подключаем Sourcemaps пакет,
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('html', function(){
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('app/'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/scss/**/*.scss') // Берем источник
        .pipe(sourcemaps.init())
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('app/**/*.html', ['html']); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('default', ['watch']);
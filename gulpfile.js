var gulp = require('gulp'),
    replace = require('gulp-replace'),
    merge = require('merge-stream'),
    concat = require('gulp-concat');

function moveAndRenameFile(origin, name, destination) {
    return gulp.src(origin)
        .pipe(concat(name))
        .pipe(gulp.dest(destination));
}

function moveFiles(origin, destination) {
    return gulp.src(origin)
        .pipe(gulp.dest(destination));
}

function renderStatics() {
    moveAndRenameFile(
        "node_modules/lunr/lunr.min.js",
        "lunr.min.js",
        "static/js/"
    );

    moveAndRenameFile(
        "node_modules/lunr/LICENSE",
        "LICENSE-LUNR",
        "licenses/"
    );

    moveAndRenameFile(
        "node_modules/@fortawesome/fontawesome-free/LICENSE.txt",
        "LICENSE-FONTAWESOME",
        "licenses/"
    );

    moveAndRenameFile(
        "node_modules/normalize.css/normalize.css",
        "normalize.css",
        "assets/sass"
    );

    moveAndRenameFile(
        "node_modules/normalize.css/LICENSE.md",
        "LICENSE-NORMALIZE",
        "licenses/"
    );

    moveAndRenameFile(
        "node_modules/hack-font/LICENSE.md",
        "LICENSE-HACK",
        "licenses/"
    );

    moveFiles(
        "node_modules/hack-font/build/web/fonts/*",
        "static/fonts/hack/"
    );

    moveFiles(
        "node_modules/@fortawesome/fontawesome-free/webfonts/*",
        "static/fonts/fontawesome/"
    );

    moveFiles(
        "node_modules/npm-font-open-sans/fonts/**/*",
        "static/fonts/opensans/"
    );

    moveAndRenameFile(
        "node_modules/npm-font-open-sans/LICENSE",
        "LICENSE-OPENSANS",
        "licenses/"
    );

    merge(
        gulp.src("assets/sass/fontArvo.scss"),
        gulp.src("node_modules/npm-font-open-sans/open-sans.scss"),
        gulp.src("node_modules/hack-font/build/web/hack.css")
    ).pipe(replace("fonts/hack", "../fonts/hack/hack"))
        .pipe(replace("#{$FontPathOpenSans}", "../fonts/opensans"))
        .pipe(concat("fonts.scss"))
        .pipe(gulp.dest("assets/sass/"));

    return gulp.src("node_modules/@fortawesome/fontawesome-free/css/all.min.css")
        .pipe(replace("../webfonts/", "../fonts/fontawesome/"))
        .pipe(concat("fontawesome.min.css"))
        .pipe(gulp.dest("static/css/"));
}

gulp.task('getStatics', function () {
    return renderStatics();
})

gulp.task('make', function () {
    renderStatics();

    gulp.src("archetypes/**/*").pipe(gulp.dest("dist/archetypes/"));
    gulp.src("assets/**/*").pipe(gulp.dest("dist/assets/"));
    gulp.src("layouts/**/*").pipe(gulp.dest("dist/layouts/"));
    gulp.src("licenses/*").pipe(gulp.dest("dist/licenses/"));
    gulp.src("static/**/*").pipe(gulp.dest("dist/static/"));
    gulp.src("LICENSE").pipe(gulp.dest("dist/"));
    gulp.src("README.md").pipe(gulp.dest("dist/"));

    return gulp.src("theme.toml").pipe(gulp.dest("dist/"));
});
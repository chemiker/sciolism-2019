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
        "node_modules/@openfonts/roboto-slab_all/files/*",
        "static/fonts/roboto-slab/"
    );

    moveAndRenameFile(
        "node_modules/@openfonts/roboto-slab_all/LICENSE.md",
        "LICENSE-ROBOTO-SLAB-ALL",
        "licenses/"
    );

    moveFiles(
        "node_modules/npm-font-open-sans/fonts/**/*",
        "static/fonts/opensans/"
    );

    moveAndRenameFile(
        "node_modules/npm-font-open-sans/LICENSE",
        "LICENSE-OPENSANS-AND-ROBOTO-SLAB",
        "licenses/"
    );

    merge(
        merge(
            gulp.src("assets/sass/open-sans-copyright.scss"),
            gulp.src("node_modules/npm-font-open-sans/open-sans.scss")
        ),
        merge(
            gulp.src("assets/sass/roboto-slab-all-copyright.scss"),
            gulp.src("node_modules/@openfonts/roboto-slab_all/index.css")
        ),
        gulp.src("node_modules/hack-font/build/web/hack.css")
    ).pipe(replace("fonts/hack", "../fonts/hack/hack"))
        .pipe(replace("./files/roboto", "../fonts/roboto-slab/roboto"))
        .pipe(replace("#{$FontPathOpenSans}", "../fonts/opensans"))
        .pipe(replace("font-family:", "font-display: swap;\n\	font-family:"))
        .pipe(concat("fonts.scss"))
        .pipe(gulp.dest("assets/sass/"));

    return gulp.src("node_modules/@fortawesome/fontawesome-free/css/all.min.css")
        .pipe(replace("../webfonts/", "../fonts/fontawesome/"))
        .pipe(replace("@font-face{font-family:", "@font-face{font-display:swap;font-family:"))
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
    gulp.src("../../resources/_gen/assets/**/main*").pipe(gulp.dest("resources/_gen/assets/"));

    return gulp.src("theme.toml").pipe(gulp.dest("dist/"));
});
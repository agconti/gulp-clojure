# gulp-clojure
A gulp plugin for compiling ClojureScript to JavaScript.

## Installation

```bash
npm install gulp-clj
```

## Usage

```js
var gulp = require('gulp')
	, cljs = require('../index')


gulp.task('default', () => {
    gulp.src('./src/**/*.clj')
        .pipe(cljs())
        .pipe(gulp.dest('./dist'))
})
```

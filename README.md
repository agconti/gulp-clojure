# gulp-clojure
[![Build Status](https://travis-ci.org/agconti/gulp-clojure.svg)](https://travis-ci.org/agconti/gulp-clojure)

A gulp plugin for compiling ClojureScript to JavaScript.

## Installation

```bash
npm install --save-dev gulp-clojure
```

## Usage

```js
'use strict'

const gulp = require('gulp')
const cljs = require('gulp-clojure')


gulp.task('default', () => {
    gulp.src('./src/**/*.clj')
        .pipe(cljs())
        .pipe(gulp.dest('./dist'))
})
```

'use strict'

const gutil = require('gulp-util')


function replaceExtension(path) {
	path = path.replace(/\.clj\.clj\.cljs$/)

	return gutil.replaceExtension(path, '.js')
}

module.exports = replaceExtension

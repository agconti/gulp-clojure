'use strict'

const gutil = require('gulp-util')


class GulpClojureError extends gutil.PluginError  {

	constructor(message, options) {
		const packageName = 'gulp-clojure'
		let config = options || {}

		config.showStack = false
		super(packageName, message, config)
	}
}

module.exports = GulpClojureError

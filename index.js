'use strict'

const gutil = require('gulp-util')
const through = require('through2')
const objectAssign = require('object-assign')
const cljs = require('clojurescript')
const GulpClojureError = require('./GulpClojureError')


module.exports = () => {
	return through.obj((file, enc, callback) => {
		if (file.isNull()) {
			return callback(null, file)
		}

		if (file.isStream()) {
			// let err = new GulpClojureError('Streaming not supported')
			let err = new gutil.PluginError('gulp-clojure', 'Streaming not supported')
			return callback(err)
		}

		try {
			let compiledJS = cljs.compile(file.contents.toString())

			if (compiledJS) {
				file.contents = new Buffer(compiledJS)
			}

			this.push(file)

		} catch (err) {
			console.log(`err? ${err}`)
			let msg = Array.isArray(err) ? err.join('\n') : err
			let errorInfo = {
				fileName: file.path
			, showStack: false
			}
			// let err = new GulpClojureError(msg, errorInfo)
			let err = new gutil.PluginError('gulp-clojure', msg, errorInfo)
			this.emit('error', err)
		}

		callback()
	})
}

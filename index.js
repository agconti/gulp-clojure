'use strict'

const gutil = require('gulp-util')
const through = require('through2')
const objectAssign = require('object-assign')
const cljs = require('clojurescript')
const GulpClojureError = require('./GulpClojureError')
const replaceExtension = require('./lib/replaceExtension')



function transform (file, enc, callback) {
	if (file.isNull()) { return callback(null, file) }

	if (file.isStream()) {
		let err = new GulpClojureError('Streaming not supported')

		this.emit('error', err)
		return callback()
	}

	if (file.extname !== '.clj') {
		let message = `Not a valid clojure file! The extension was ${file.extname}`
		let err = new GulpClojureError(message)

		this.emit('error', err)
		return callback()
	}

	try {
		let compiledJS = cljs.compile(file.contents.toString('utf-8'))

		file.contents = new Buffer(compiledJS)
	} catch (err) {
		let msg = Array.isArray(err) ? err.join('\n') : err
		let errorInfo = {
			fileName: file.path
		, showStack: false
		}

		let err = new GulpClojureError(msg, errorInfo)
		this.emit('error', err)
	}


	file.path = replaceExtension(file.path)

	this.push(file)
	callback()
}

module.exports = () => through.obj(transform)

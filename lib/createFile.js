'use strict'

const gutil = require('gulp-util')
const pathUtils = require('path')


function createFile (path, contents) {
  let base = pathUtils.dirname(path)
		, cwd =  pathUtils.dirname(base)

  return new gutil.File({path, base, cwd, contents})
}

module.exports = createFile

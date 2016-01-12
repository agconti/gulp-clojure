'use strict'

const File = require('vinyl')
const pathUtils = require('path')


function createFile (path, contents) {
  let base = pathUtils.dirname(path)
		, cwd =  pathUtils.dirname(base)

  return new File({path, base, cwd, contents})
}

module.exports = createFile

const path = require('path')

/** 
 * Reads another directory of files as files source.
 * Needs to be used before other middlewares to work with loaded files.
 *
 * @param {String} source Directory to read.
 * @return {Function}
 */
function plugin (source) {
  return function anotherSourcePlugin (files, metalsmith, done) {
    const sourcePath = path.join(metalsmith.directory(), source)
    return metalsmith.read(sourcePath, (err, newFiles) => {
      Object.assign(files, newFiles)
      done(err)
    })
  }
}

/** 
 * Expose the plugin.
 */
module.exports = plugin
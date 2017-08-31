const path = require('path')

/** 
 * Reads another directory of files as files source.
 * Needs to be used before other middlewares to work with loaded files.
 *
 * @param {String} source Directory to read.
 * @return {Function}
 */
function plugin (source, pattern) {
  return function anotherSourcePlugin (files, metalsmith, done) {
    const sourcePath = path.join(metalsmith.directory(), source)
    
    // Read directory with Metalsmith's internal read function.
    return metalsmith.read(sourcePath, (err, newFiles) => {
      
      // Filter out files by the pattern.
      Object.keys(newFiles).forEach(filename => {
        if (!filename.match(pattern)) {
          delete newFiles[filename]
        }
      })
      
      // Include the files to the files object.
      Object.assign(files, newFiles)
      
      done()
    })
  }
}

/** 
 * Expose the plugin.
 */
module.exports = plugin
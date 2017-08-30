const path = require('path')

/** 
 * Reads another directory of files as files source.
 * Needs to be used before other middlewares to work with loaded files.
 *
 * @param {Array|String} directories Directory or directories to read.
 * @return {Function}
 */
function plugin (directories) {
  const sources = Array.isArray(directories) ? directories : [ directories ]
  
  return function anotherSourcePlugin (files, metalsmith, done) {
    sources.forEach(source => {
      metalsmith.read(filesDir, (err, newFiles) => {
        if (err) {
          done(err)
        }
        
        Object.assign(files, newFiles)
      })
    })
    
    done()
  }
}

/** 
 * Expose the plugin.
 */
module.exports = plugin
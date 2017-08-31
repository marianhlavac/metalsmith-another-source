const test = require('ava')
const path = require('path')
const rimraf = require('rimraf')
const Metalsmith = require('metalsmith')

const anotherSource = require('../lib')

test.cb('metalsmith bounce-off test', t => {
  Metalsmith(__dirname)
  .source('./fixtures/source1')
  .destination('../tmp')
  
  .use((files, metalsmith, done) => {
    
    const actual = Object.keys(files).sort()
    const expected = [ 'file00', 'file01' ]
    t.deepEqual(actual, expected)
    t.end()
    
    done()
  })
  .build(err => { 
    console.error(err)
  })
})

test.cb('adding another source', t => {
  Metalsmith(__dirname)
  .source('./fixtures/source1')
  .destination('../tmp')
  
  .use(anotherSource('fixtures/source2'))
  
  .use((files, metalsmith, done) => {
    
    const actual = Object.keys(files).sort()
    const expected = [ 'file00', 'file01', 'file02', 'picture01.jpg' ]
    t.deepEqual(actual, expected)
    t.end()
    
    done()
  })
  .build(err => { 
    console.error(err)
  })
})

test.cb('adding another source and applying a pattern filter', t => {
  Metalsmith(__dirname)
  .source('./fixtures/source1')
  .destination('../tmp')
  
  .use(anotherSource('fixtures/source2', /.*\.jpg/))
  
  .use((files, metalsmith, done) => {
    
    const actual = Object.keys(files).sort()
    const expected = [ 'file00', 'file01', 'picture01.jpg' ]
    t.deepEqual(actual, expected)
    t.end()
    
    done()
  })
  .build(err => { 
    console.error(err)
  })
})

# metalsmith-another-source

A [Metalsmith](https://github.com/segmentio/metalsmith) plugin that allows you to specify more than one sources for your input files.

Useful when you need to load additional files from another directory, than your source directory.

## Installation

```bash
  $ yarn add metalsmith-another-source
```

## Usage 

Use before other middlewares to work with loaded files, so make it the first `.use` in your Metalsmith middleware chain.

```js

  const anotherSource = require('metalsmith-another-source')

  ... 
  
  Metalsmith(__dirname)
  .source('./source')
  .destination('../tmp')

  .use(anotherSource('./another-source'))
  
  ...
  
```

## API

### anotherSource(directory [, pattern])

Returns a plugin.

**directory** *(String)*  
A path to the directory to be added as another source. Is relative to Metalsmith directory set with `Metalsmith(...)`.

**pattern** *(Regexp)*  
Regexp matching files to be included. When not present, all files in directory will be included.

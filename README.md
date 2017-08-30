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

  ... 
  
  Metalsmith(__dirname)
  .source('./source')
  .destination('../tmp')

  .use(anotherSource('./another-source'))
  
  ...
  
```
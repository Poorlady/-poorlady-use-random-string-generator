# @poorlady/use-random-string-generator

> A module that provide you with random string provided

[![NPM](https://img.shields.io/npm/v/@poorlady/use-random-string-generator.svg)](https://www.npmjs.com/package/@poorlady/use-random-string-generator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @poorlady/use-random-string-generator
```

## Usage

```jsx
import React from 'react'

import { UseRandomString } from '@poorlady/use-random-string-generator'
import '@poorlady/use-random-string-generator/dist/index.css'

const App = () => {
  const { text, isLoading } = UseRandomString()

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  if (text) {
    return (
      <div>
        <h1>Text Generated:</h1>
        <p>{text}</p>
      </div>
    )
  }
  return null
}
```

## License

MIT © [Poorlady](https://github.com/Poorlady)

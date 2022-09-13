import React from 'react'

import { UseRandomString } from '@poorlady/use-random-string-generator'
import '@poorlady/use-random-string-generator/dist/index.css'

const App = () => {
  // return <ExampleComponent text="Create React Library Example 😄" />
  const { text, isLoading } = UseRandomString()
  const style = { display: 'flex', alignItems: 'center', justifyContent: 'center' }
  if (isLoading) {
    return (
      <div style={style}>
        <h1>Loading...</h1>
      </div>
    )
  }
  if (text) {
    return (
      <div style={style}>
        <div>
          <h1>Text Generated:</h1>
          <p>{text}</p>
        </div>
      </div>
    )
  }
  return null
}

export default App

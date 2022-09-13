import { useState, useEffect } from 'react'

const stringProvided = [
  'Hello World!',
  'This is a random string',
  'if you need a new one just refresh it'
]

export const UseRandomString = () => {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getRandomString = () => {
      setIsLoading(true)
      setTimeout(() => {
        const random = Math.floor(Math.random() * 3)
        const string = stringProvided[random]
        setText(string)
        setIsLoading(false)
      }, 500)
    }

    getRandomString()
  }, [])

  return { text, isLoading }
}

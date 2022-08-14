import { useState, useEffect } from 'react'
import { RoughNotation } from 'react-rough-notation'

export default function About() {
  const [state, setState] = useState(false)

  useEffect(() => {
    setState(true)
  }, [])

  return (
    <section className='mx-auto w-40'>
      <RoughNotation
        type='bracket'
        brackets={['left', 'right']}
        show={state}
        animationDelay={1000}
        animationDuration={1000}
        color='#000'
      >
        <h1 className='mx-auto w-40'>Hey</h1>
      </RoughNotation>
    </section>
  )
}

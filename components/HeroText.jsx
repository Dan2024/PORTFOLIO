import { useState, useEffect } from 'react'
import { RoughNotation } from 'react-rough-notation'

export default function HeroText() {
  const [state, setState] = useState(false)

  useEffect(() => {
    setState(true)
  }, [])

  return (
    <section className='max-w-7xl mx-auto my-11'>
      <div className='py-4'>
        <h1 className='mx-auto w-auto'>Hey, I'm Dan.</h1>
        <h1 className='mx-auto w-auto'>
          I'm a Scientist turned{' '}
          {/* <RoughNotation
              type='bracket'
              brackets={['left', 'right']}
              show={state}
              animationDelay={900}
              animationDuration={1000}
              color='#000'
            > */}
          Developer.
          {/* </RoughNotation> */}
        </h1>
      </div>
    </section>
  )
}

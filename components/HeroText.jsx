import { useState, useEffect } from 'react'
import { RoughNotation } from 'react-rough-notation'

export default function HeroText() {
  const [state, setState] = useState(false)

  useEffect(() => {
    setState(true)
  }, [])

  return (
    <section className='max-w-7xl mx-auto my-11 h-[90vh]'>
      <div className='pt-[25vh]'>
        <h1 className='mx-auto w-auto mb-5'>
          Hey, I'm{' '}
          <RoughNotation
            type='underline'
            brackets={['left', 'right']}
            strokeWidth={4}
            show={state}
            animationDelay={500}
            animationDuration={1200}
            padding={[-8, 'bottom']}
            color='#43c962'
          >
            Dan.
          </RoughNotation>
        </h1>
        <h1 className='mx-auto w-auto'>
          I'm a Scientist turned{' '}
          <RoughNotation
            type='highlight'
            brackets={['left', 'right']}
            show={state}
            strokeWidth={2}
            animationDelay={1800}
            animationDuration={1500}
            color='#43c962'
          >
            Developer.
          </RoughNotation>
        </h1>
      </div>
    </section>
  )
}

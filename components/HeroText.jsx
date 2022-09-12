import { useEffect } from 'react'
import { RoughNotation } from 'react-rough-notation'
import { useInView } from 'react-intersection-observer'

export default function HeroText() {
  const { ref, inView } = useInView()

  return (
    <section className='max-w-7xl mx-auto my-11 h-[90vh]'>
      <div className='pt-[10vh] md:pt-[20vh]'>
        <h1 ref={ref} className='mx-auto w-auto leading-snug'>
          Hey, I'm{' '}
          <RoughNotation
            type='underline'
            strokeWidth={4}
            show={inView}
            animationDelay={500}
            animationDuration={900}
            padding={[-8, 'bottom']}
            color='#61a0af'
          >
            Dan. <br></br>
          </RoughNotation>
          I'm a Scientist turned{' '}
          <RoughNotation
            type='highlight'
            show={inView}
            strokeWidth={2}
            animationDelay={1500}
            animationDuration={1000}
            color='#61a0af'
          >
            Developer.
          </RoughNotation>
        </h1>
      </div>
    </section>
  )
}

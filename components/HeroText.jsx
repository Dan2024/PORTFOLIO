import { useEffect } from 'react'
import { RoughNotation } from 'react-rough-notation'
import { useInView } from 'react-intersection-observer'

export default function HeroText() {
  const { ref, inView } = useInView()

  return (
    <section className='max-w-7xl mx-auto my-11 h-[90vh]'>
      <div className='pt-[25vh]'>
        <h1 ref={ref} className='mx-auto w-auto mb-5'>
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
            Dan.
          </RoughNotation>
        </h1>
        <h1 className='mx-auto w-auto'>
          I'm a Scientist turned{' '}
          <RoughNotation
            type='highlight'
            // brackets={['left', 'right']}
            padding={(5)[('left', 'right', 'top', 'bottom')]}
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

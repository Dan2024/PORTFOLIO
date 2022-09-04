import { useState, useEffect } from 'react'
import { RoughNotation } from 'react-rough-notation'

export default function About() {
  const [state, setState] = useState(false)

  useEffect(() => {
    setState(true)
  }, [])

  return (
    <section className='max-w-7xl mx-auto my-11 border border-sky-500'>
      <div className='py-4'>
        <div>
          <h2 className='text-base mt-4 '>
            After leaving a career in science, I embarked on a journey to learn
            software engineering. I spent 6 months with (link) boolean UK where
            i learnt the fundamentals of full stack development. Throughout this
            experience i have honed my development skills. Also exploring other
            technologies such as Next.js and typeScript.
          </h2>
        </div>
        {/* <div className='socials'>
          <a
            href='https://www.linkedin.com/in/daniel-northcott-750107204'
            target='_blank'
          >
            <button className=''>LinkedIn</button>
          </a>
          <a href='https://github.com/Dan2024' target='_blank'>
            <button className=''>GitHub</button>
          </a>
        </div> */}
      </div>
    </section>
  )
}

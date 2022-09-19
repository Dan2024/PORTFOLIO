import Image from 'next/image'
import { useState } from 'react'
import PersonalLinks from '../PersonalLinks'

export default function About() {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('short')

  const isRadioSelected = (value) => selectedRadioBtn === value
  const handleRadioClick = (e) => setSelectedRadioBtn(e.currentTarget.value)

  return (
    <>
      <div className='bg-gray-200' id='about'>
        <div className='max-w-7xl mx-auto '>
          <h2 className='pt-20'>About</h2>

          <section className='md:grid grid-cols-2-col-grid__expand-two gap-20 pt-16'>
            <div className='w-72 h-72 mx-auto md:w-96 md:h-96 relative rounded-full overflow-hidden'>
              <Image
                src='/portrait.png'
                alt='Edited picture of me'
                layout='fill'
                objectFit='cover'
                objectPosition='30% 70%'
              />
            </div>
            <div className='relative'>
              <div className='mb-10'>
                {/* small radio button */}
                <input
                  type='radio'
                  id='short-bio'
                  name='bio-length'
                  value='short'
                  className='radio-btn-bio hidden'
                  checked={isRadioSelected('short')}
                  onChange={handleRadioClick}
                />
                <label
                  htmlFor='short-bio'
                  className='w-[80%] md:w-32 md:inline-block text-center py-2 uppercase my-2 mx-auto block md:mr-5 rounded-lg bg-rich-black text-white cursor-pointer transition duration-150 ease-out hover:ease-in'
                >
                  <span>Short</span>
                </label>

                {/* medium radio button */}
                <input
                  type='radio'
                  id='medium-bio'
                  name='bio-length'
                  value='medium'
                  className='radio-btn-bio hidden'
                  checked={isRadioSelected('medium')}
                  onChange={handleRadioClick}
                />
                <label
                  htmlFor='medium-bio'
                  className='w-[80%] md:w-32 md:inline-block text-center py-2 uppercase my-2 mx-auto block md:mr-5 rounded-lg bg-rich-black text-white cursor-pointer transition duration-150 ease-out hover:ease-in'
                >
                  <span>Medium</span>
                </label>

                {/* large radio button */}
                <input
                  type='radio'
                  id='long-bio'
                  name='bio-length'
                  value='long'
                  className='radio-btn-bio hidden'
                  checked={isRadioSelected('long')}
                  onChange={handleRadioClick}
                />
                <label
                  htmlFor='long-bio'
                  className='w-[80%] md:w-32 md:inline-block text-center py-2 uppercase my-2 mx-auto block md:mr-5 rounded-lg bg-rich-black text-white cursor-pointer transition duration-150 ease-out hover:ease-in'
                >
                  <span>Long</span>
                </label>
              </div>

              {selectedRadioBtn === 'short' && (
                <p className='font-normal mt-4 '>
                  I'm an inquisitive, teachable, web-dev bootcamp grad with an{' '}
                  <span className='highlighted-text'>interest in design</span>{' '}
                  and a love for bringing both the{' '}
                  <span className='highlighted-text'>technical</span> and{' '}
                  <span className='highlighted-text'>visual</span> aspects of a
                  project to life.
                </p>
              )}
              {selectedRadioBtn === 'medium' && (
                <>
                  <p className='font-normal mt-4 '>
                    After leaving a career in science, I embarked on a journey
                    to learn software engineering where I spent{' '}
                    <span className='highlighted-text'>6 months</span> with{' '}
                    <a
                      className='text-portfolio-blue underline'
                      target='_blank'
                      rel='noreferrer'
                      href='https://boolean.co.uk/'
                    >
                      Boolean UK
                    </a>{' '}
                    . Here I honed my development skills, created projects of my
                    own and I'm now currently learning Next.js and Typescript!
                  </p>
                  <p className='font-normal mt-4 '>
                    I'm an inquisitive, teachable, web-dev bootcamp grad with an{' '}
                    <span className='highlighted-text'>interest in design</span>{' '}
                    and a love for bringing both the{' '}
                    <span className='highlighted-text'>technical</span> and{' '}
                    <span className='highlighted-text'>visual</span> aspects of
                    a project to life.
                  </p>
                </>
              )}
              {selectedRadioBtn === 'long' && (
                <>
                  <p className='font-normal mt-4 '>
                    Noticing that some of the data processing work I conducted
                    in my science career could benefit from{' '}
                    <span className='highlighted-text'>automation</span>, I
                    found out the world of software engineering could offer the{' '}
                    <span className='highlighted-text'>solutions</span> I
                    needed.
                  </p>
                  <p className='font-normal mt-4 '>
                    This was great... the problem was i didnt know how to code.
                    Further research, coupled with the desire for a career
                    change, led me to embark on a journey to learn software
                    engineering where I spent{' '}
                    <span className='highlighted-text'>6 months</span> with{' '}
                    <a
                      className='text-portfolio-blue underline'
                      target='_blank'
                      rel='noreferrer'
                      href='https://boolean.co.uk/'
                    >
                      Boolean UK
                    </a>
                    . Throughout this experience i have honed my development
                    skills, and I'm now currently learning Next.js and
                    Typescript.
                  </p>
                  <p className='font-normal mt-4 '>
                    I'm an inquisitive, teachable, web-dev bootcamp grad with an{' '}
                    <span className='highlighted-text'>interest in design</span>{' '}
                    and a love for bringing both the{' '}
                    <span className='highlighted-text'>technical</span> and{' '}
                    <span className='highlighted-text'>visual</span> aspects of
                    a project to life.
                  </p>
                </>
              )}

              <PersonalLinks />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

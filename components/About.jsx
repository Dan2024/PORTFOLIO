import Image from 'next/image'
import { useState, useEffect } from 'react'
import { RoughNotation } from 'react-rough-notation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function About() {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('short')

  const isRadioSelected = (value) => selectedRadioBtn === value
  const handleRadioClick = (e) => setSelectedRadioBtn(e.currentTarget.value)

  return (
    <>
      <div className='bg-gray-200' id='about'>
        <section className='max-w-7xl mx-auto h-[700px]'>
          <h2 className='pt-20'>About</h2>

          <div className='grid grid-cols-2-col-grid__expand-two gap-20 pt-16'>
            <div className='w-96 h-96 relative rounded-full overflow-hidden'>
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
                  className='w-32 inline-block text-center py-2 uppercase mr-5 rounded-lg bg-rich-black text-white cursor-pointer transition duration-150 ease-out hover:ease-in'
                >
                  <span>Short</span>
                </label>

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
                  className='w-32 inline-block text-center py-2 uppercase mr-5 rounded-lg bg-rich-black text-white cursor-pointer transition duration-150 ease-out hover:ease-in'
                >
                  <span>Medium</span>
                </label>

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
                  className='w-32 inline-block text-center py-2 uppercase mr-5 rounded-lg bg-rich-black text-white cursor-pointer transition duration-150 ease-out hover:ease-in'
                >
                  <span>Long</span>
                </label>
              </div>

              {selectedRadioBtn === 'short' && (
                <h3 className='font-normal mt-4 '>
                  An inquisitive, teachable, web-dev bootcamp grad with an eye
                  for design and a love for bringing both the technical and
                  visual aspects of a project to life.
                </h3>
              )}
              {selectedRadioBtn === 'medium' && (
                <>
                  <h3 className='font-normal mt-4 '>
                    After leaving a career in science, I embarked on a journey
                    to learn software engineering where I spent 6 months with{' '}
                    <a
                      className='text-[#528998]'
                      target='_blank'
                      rel='noreferrer'
                      href='https://boolean.co.uk/'
                    >
                      Boolean UK
                    </a>{' '}
                    . Here I honed my development skills, created projects of my
                    own and I'm now currently learning Next.js and Typescript!
                  </h3>
                  <h3 className='font-normal mt-4 '>
                    I'm an inquisitive, teachable, web-dev bootcamp grad with an
                    eye for design and a love for bringing both the technical
                    and visual aspects of a project to life.
                  </h3>
                </>
              )}
              {selectedRadioBtn === 'long' && (
                <>
                  <h3 className='font-normal mt-4 '>
                    Noticing that some of the data processing work I conducted
                    in my science career could benefit from automation, I found
                    out the world of software engineering could offer the
                    solutions i needed.
                  </h3>
                  <h3 className='font-normal mt-4 '>
                    This was great... the problem was i didnt know how to code.
                    Further research, coupled with the desire for a career
                    change, led me to embark on a journey to learn software
                    engineering where I spent 6 months with{' '}
                    <a
                      className='text-[#528998]'
                      target='_blank'
                      rel='noreferrer'
                      href='https://boolean.co.uk/'
                    >
                      Boolean UK
                    </a>
                    . Throughout this experience i have honed my development
                    skills, and I'm now currently learning Next.js and
                    Typescript.
                  </h3>
                  <h3 className='font-normal mt-4 '>
                    I'm an inquisitive, teachable, web-dev bootcamp grad with an
                    eye for design and a love for bringing both the technical
                    and visual aspects of a project to life.
                  </h3>
                </>
              )}

              <div className='mt-10 grid grid-cols-3-col-grid__expand-three'>
                <a
                  href='https://www.linkedin.com/in/daniel-northcott-750107204'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className='w-10 h-10 mr-5'
                  />
                </a>
                <a
                  href='https://github.com/Dan2024'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faGithub} className='h-10' />
                </a>
                <div className='spacer'></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

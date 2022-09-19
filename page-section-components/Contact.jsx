import { RoughNotation } from 'react-rough-notation'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <div>
      <div className='divider5' id='contact'></div>
      <div className='bg-black'>
        <div className='max-w-7xl mx-auto text-white child:pb-10'>
          <h2 className='pt-10'>Contact</h2>
          <div className='grid grid-cols-key-features-layout gap-5 mt-10 mx-10 child:grid child:place-content-center'>
            <div className='hover:bg- bg-[#181a1d] hover:bg-[#2e3137] h-60 rounded-xl px-4 text-center'>
              <h3 className='font-normal px-10 md:px-0'>
                Interested in{' '}
                <RoughNotation
                  type='box'
                  show={inView}
                  animationDelay={500}
                  animationDuration={900}
                  color='#61a0af'
                >
                  hiring me?
                </RoughNotation>
              </h3>
              <a
                href='https://www.linkedin.com/in/daniel-northcott-750107204'
                target='_blank'
                rel='noreferrer'
                ref={ref}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className='w-8 h-8 mx-auto mt-8 md:mt-16 text-[#707274]'
                />
              </a>
            </div>
            <div className='hover:bg- bg-[#181a1d] hover:bg-[#2e3137] h-60 rounded-xl px-4 text-center'>
              <h3 className='font-normal'>
                Have tips on how I can{' '}
                <RoughNotation
                  type='underline'
                  show={inView}
                  animationDelay={500}
                  animationDuration={900}
                  color='#61a0af'
                >
                  improve my portfolio?
                </RoughNotation>
              </h3>
              <a
                href='https://github.com/Dan2024/PORTFOLIO/issues/new'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className='w-8 h-8 mx-auto mt-8 md:mt-16 text-[#707274]'
                />
              </a>
            </div>
            <div className=' bg-[#181a1d] hover:bg-[#2e3137] h-60 rounded-xl px-4 text-center'>
              <h3 className='font-normal'>
                <RoughNotation
                  type='bracket'
                  brackets={['left', 'right']}
                  show={inView}
                  animationDelay={500}
                  animationDuration={900}
                  color='#61a0af'
                >
                  Want to check out my CV?
                </RoughNotation>
              </h3>
              <a
                href='https://docs.google.com/document/d/18Kr_xi1vsthnzlbil5jbb9VKZqobcCFiERu6q3nNPsA/edit#heading=h.xplav955co1r'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon
                  icon={faFileLines}
                  className='w-8 h-8 mx-auto mt-8 md:mt-16 text-[#707274]'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

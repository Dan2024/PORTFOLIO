import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPlus,
  faArrowTrendUp,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <div>
      <div className='divider5' id='contact'></div>
      <div className='bg-black'>
        <div className='max-w-7xl mx-auto text-white child:pb-10'>
          <h2 className='pt-10'>Contact</h2>
          <div className='grid grid-cols-key-features-layout gap-5 mt-10 mx-10 child:grid child:place-content-center'>
            <div className='hover:bg- bg-[#181a1d] hover:bg-[#2e3137] h-52 rounded-xl px-4 text-center'>
              <h3 className='font-normal'>Interested in hiring me?</h3>
              <a
                href='https://www.linkedin.com/in/daniel-northcott-750107204'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className='w-8 h-8 mx-auto mt-5 text-[#707274]'
                />
              </a>
            </div>
            <div className='hover:bg- bg-[#181a1d] hover:bg-[#2e3137] h-52 rounded-xl px-4 text-center'>
              <h3 className='font-normal'>
                Want to offer advice on how i can improve my portfolio?
              </h3>
              <a
                href='https://www.linkedin.com/in/daniel-northcott-750107204'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className='w-8 h-8 mx-auto mt-5 text-[#707274]'
                />
              </a>
            </div>
            <div className=' bg-[#181a1d] hover:bg-[#2e3137] h-52 rounded-xl px-4 text-center'>
              <h3 className='font-normal'>Want to check out my CV?</h3>
              <a
                href='https://www.linkedin.com/in/daniel-northcott-750107204'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon
                  icon={faFileLines}
                  className='w-8 h-8 mx-auto mt-5 text-[#707274]'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

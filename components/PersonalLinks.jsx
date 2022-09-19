import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function PersonalLinks() {
  return (
    <div className='mt-10 grid grid-cols-3-col-grid__expand-three'>
      <a
        href='https://www.linkedin.com/in/daniel-northcott-750107204'
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className='w-10 h-10 mx-5 md:mr-5 md:ml-0'
        />
      </a>
      <a href='https://github.com/Dan2024' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} className='h-10' />
      </a>
      <div className='spacer'></div>
    </div>
  )
}

import Link from 'next/link'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function MyWorkInfoText({
  title,
  summary,
  pageUrl,
  githubProjectLink,
  liveWebsiteLink,
}) {
  return (
    <div className='ml-5'>
      <h2>{title}</h2>
      <p>{summary}</p>
      <button>
        <Link href={pageUrl}>
          <a>More Info</a>
        </Link>
      </button>
      <div className='mt-10 grid grid-cols-3-col-grid__expand-three'>
        <a href={githubProjectLink} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon
            icon={faGithub}
            className='w-8 h-8 mr-5 text-portfolio-blue'
          />
        </a>
        {liveWebsiteLink && (
          <a href={liveWebsiteLink} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className='w-8 h-8 mr-5 text-portfolio-blue'
            />
          </a>
        )}
        <div className='spacer'></div>
      </div>
    </div>
  )
}

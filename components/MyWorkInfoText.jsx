import Link from 'next/link'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer'
import { RoughNotation } from 'react-rough-notation'

export default function MyWorkInfoText({
  title,
  summary,
  pageUrl,
  githubProjectLink,
  liveWebsiteLink,
  animatedStylingTitle,
  animatedStylingHeader,
}) {
  const { ref, inView } = useInView()

  return (
    <section className='mx-3 mb-10 md:mb-0'>
      {animatedStylingHeader && (
        <RoughNotation
          type='bracket'
          brackets={['left', 'right']}
          padding={3}
          strokeWidth={2}
          show={inView}
          animationDelay={700}
          animationDuration={900}
          color='#61a0af'
        >
          <h2>{title}</h2>
          <p ref={ref}>{summary}</p>
        </RoughNotation>
      )}
      {animatedStylingTitle && (
        <>
          <h2>
            <RoughNotation
              type='bracket'
              brackets={['top']}
              strokeWidth={2}
              padding={4}
              show={inView}
              animationDelay={800}
              animationDuration={900}
              color='#61a0af'
            >
              {title}
            </RoughNotation>
          </h2>
          <p ref={ref}>{summary}</p>
        </>
      )}
      <button className='mx-3'>
        <Link href={pageUrl}>
          <a>More Info</a>
        </Link>
      </button>
      <div className='mx-3 mt-10 grid grid-cols-3-col-grid__expand-three'>
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
    </section>
  )
}

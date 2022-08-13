// import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <>
      <div className='bg-prussian-blue child:hidden md:child:block text-white text-lg'>
        <div className='spacer'></div>
        <ul>
          <li className=''>About</li>
          <li className=''>Skills</li>
          <li className=''>Projects</li>
          <li className=''>Contact</li>
        </ul>
      </div>
      <div className='bg-prussian-blue h-[30vh] pt-[4vh]  md:h-[60vh] text-8xl text-white'>
        Hey, I'm Dan
      </div>
      <div className={styles.navbarBg}></div>
      <div className='text-white'>htejtrk</div>

      {/* next optimises image rendering */}
      {/* <div className='max-w-screen-2xl h-[80vh] relative img-container'>
      <Image
          style={{
            zIndex: '-1',
          }}
          className='image-style'
          alt='mountains'
          src='/mountains.jpeg'
          quality={100}
          layout='fill'
          objectFit='cover'
          objectPosition='bottom left'
          width='100%'
          height='100%'
          // w and h stops cumlative layout shift
          priority // bc you need image to be preloaded
          // images lazy loaded by default
          // sizes='(min-width: 75em) 33vw,
          //       (min-width: 48em) 50vw,
          //       100vw'
        />
      <ul className='hidden md:grid grid-cols-5 place-items-center bg-prussian-blue py-5 text-white text-lg'>
        <li className=''>Home</li>
        <li className=''>About</li>
        <li className=''>Skills</li>
        <li className=''>Projects</li>
        <li className=''>Contact</li>
      </ul>
      </div> */}
    </>
  )
}

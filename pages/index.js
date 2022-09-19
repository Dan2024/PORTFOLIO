import Head from 'next/head'
import About from '../page-section-components/About'
import HeroText from '../page-section-components/HeroText'
import MyWork from '../page-section-components/MyWork'
import Navbar from '../page-section-components/Navbar'
import SkillsAndTools from '../page-section-components/SkillsAndTools'
import Contact from '../page-section-components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name='description' content='My portfolio demonstrating my work' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <HeroText />
      <About />
      <SkillsAndTools />
      <MyWork />
      <Contact />
    </div>
  )
}

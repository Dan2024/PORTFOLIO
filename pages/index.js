import Head from 'next/head'
import About from '../components/page-section-components/About'
import HeroText from '../components/page-section-components/HeroText'
import MyWork from '../components/page-section-components/MyWork'
import Navbar from '../components/page-section-components/Navbar'
import SkillsAndTools from '../components/page-section-components/SkillsAndTools'
import Contact from '../components/page-section-components/Contact'

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

import Head from 'next/head'
import About from '../components/About'
import HeroText from '../components/HeroText'
import MyWork from '../components/MyWork'
import Navbar from '../components/Navbar'
import SkillsAndTools from '../components/SkillsAndTools'
import Contact from '../components/Contact'

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

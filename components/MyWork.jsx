import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame, Canvas } from '@react-three/fiber'
import { useEffect, useRef, Suspense, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {
  faLinkedin,
  faGithub,
  faReact,
  faSquareJs,
  faCss3Alt,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg

const codifeyedMonitorGLTFPath = '/glb/codifeyed-monitor-transformed.glb'
const codifeyedMonitorImgNodeName = 'Screenshot_2022-09-08_at_100114'
const codifeyedMonitorImgMaterialName = 'Screenshot 2022-09-08 at 10.01.14'

const portfolioMonitorGLTFPath = '/glb/portfolio-monitor-transformed.glb'
const portfolioMonitorImgNodeName = 'Screenshot_2022-09-08_at_100154'
const portfolioMonitorImgMaterialName = 'Screenshot 2022-09-08 at 10.01.54'

function Scene({
  monitorGLTFPath,
  monitorImgNodeName,
  monitorImgMaterialName,
}) {
  // Code to move the camera around
  const orbitControlsRef = useRef(null)

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse

      orbitControlsRef.current.dampingFactor = 0.003
      orbitControlsRef.current.enableZoom = false

      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(30))
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30))
      orbitControlsRef.current.update()
    }
  })

  const Monitor = () => {
    const { nodes, materials } = useGLTF(monitorGLTFPath)
    return (
      <group dispose={null}>
        <mesh
          geometry={nodes.Object.geometry}
          material={materials['Material.001']}
          position={[0, -2, -0.9]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          geometry={nodes[monitorImgNodeName].geometry}
          material={materials[monitorImgMaterialName]}
          position={[0, 1, 0.1]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.06}
        />
      </group>
    )
  }

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 3, 9]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(70)}
        maxPolarAngle={angleToRadians(90)}
        enableDampening={true}
        panSpeed={0.1}
      />

      {/* Monitor Object */}
      <Monitor />

      {/* Lighting */}
      <ambientLight args={['#ffffff', 0.25]} />
      <directionalLight
        args={['#ffffff', 1.5, 7, angleToRadians(45), 0.4]}
        position={[5, 1, -2]}
        lookAt={[0, 0, 0]}
        castShadow
      />
    </>
  )
}

// ------- canvas -------
export default function MyWork() {
  return (
    <div className='bg-gray-200'>
      <div className='max-w-7xl mx-auto ' id='my-work'>
        <h2 className='pb-10'>My Work</h2>
        <div className='grid grid-cols-2-col-grid__expand-two'>
          <div className='w-[500px] h-[400px]'>
            <Canvas shadows>
              <Suspense fallback={null}>
                <Scene
                  monitorGLTFPath={codifeyedMonitorGLTFPath}
                  monitorImgNodeName={codifeyedMonitorImgNodeName}
                  monitorImgMaterialName={codifeyedMonitorImgMaterialName}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className='ml-5'>
            <h2>CODIFEYED</h2>
            <p>
              A Front-End website that visualizes computer science topics, such
              as sorting algorithms and reccursion.
            </p>
            {/* <div className='mt-5 child:w-8 child:h-8 child:inline-block child:ml-2'>
              <FontAwesomeIcon icon={faHtml5} className='text-[#f06529]' />
              <FontAwesomeIcon icon={faCss3Alt} className='text-[#264de4]' />
              <FontAwesomeIcon icon={faSquareJs} className='text-[#e4cf4b]' />
              <FontAwesomeIcon icon={faReact} className='text-[#61DBFB]' />
              <img
                src='https://p5js.org/assets/img/p5js.svg'
                alt='p5.js'
                className='h-8'
              />
            </div> */}
            <button className=''>
              <Link href='/codifeyed'>More Info</Link>
            </button>
            <div className='mt-10 grid grid-cols-3-col-grid__expand-three'>
              <a
                href='https://github.com/Dan2024/CODIFEYED'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faGithub} className='w-8 h-8 mr-5' />
              </a>
              <a
                href='https://www.linkedin.com/in/daniel-northcott-750107204'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className='w-8 h-8 mr-5'
                />
              </a>
              <div className='spacer'></div>
            </div>
          </div>
          <div className='w-[500px] h-[400px]'>
            <Canvas shadows>
              <Suspense fallback={null}>
                <Scene
                  monitorGLTFPath={portfolioMonitorGLTFPath}
                  monitorImgNodeName={portfolioMonitorImgNodeName}
                  monitorImgMaterialName={portfolioMonitorImgMaterialName}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className='ml-5'>
            <h2>Portfolio Website</h2>
            <p>
              My personal portfolio website focused on front-end design,
              experimenting with webGL, React Three Fiber and Next.js.
            </p>
            {/* <div className='mt-5 child:w-12 child:h-10 child:inline-block child:ml-2'>
              <FontAwesomeIcon icon={faHtml5} className='text-[#f06529]' />
              <FontAwesomeIcon icon={faCss3Alt} className='text-[#264de4]' />
              <FontAwesomeIcon icon={faSquareJs} className='text-[#e4cf4b]' />
              <img
                src='https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png'
                alt='next.js'
                className=''
              />
              <img
                src='https://ucarecdn.com/22a0a69b-689f-46c9-866b-57650f31fde9/'
                alt='three.js'
                className=''
              />
              <img
                src='https://roughnotation.com/images/fav.png'
                alt='react rough notation'
                className=''
              />
              <img
                src='https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png'
                alt='framer motion'
                className=''
              />
              <img
                src='https://www.logolynx.com/images/logolynx/63/632150f28960cba513ff90fb97813286.png'
                alt='blender'
                className=''
              />
            </div> */}
            <button className=''>
              <Link href='/portfolio'>More Info</Link>
            </button>
            <div className='mt-10 grid grid-cols-2-col-grid__expand-two'>
              <a
                href='https://github.com/Dan2024/CODIFEYED'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faGithub} className='w-8 h-8 mr-5' />
              </a>
              <div className='spacer'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

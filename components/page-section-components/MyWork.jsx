import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame, Canvas } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyWorkInfoText from '../MyWorkInfoText'
import Image from 'next/image'
import { RoughNotation } from 'react-rough-notation'
import { useInView } from 'react-intersection-observer'

const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg

const codifeyedMonitorGLTFPath =
  '/monitor-glb-files/codifeyed-monitor-transformed.glb'
const codifeyedMonitorImgNodeName = 'Screenshot_2022-09-08_at_100114'
const codifeyedMonitorImgMaterialName = 'Screenshot 2022-09-08 at 10.01.14'

const portfolioMonitorGLTFPath =
  '/monitor-glb-files/portfolio-monitor-transformed.glb'
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
  const { ref, inView } = useInView()

  return (
    <div className='bg-gray-200'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='pb-10'>My Work</h2>

        <div className='aspect-[1284/516] ml-2 xl:-ml-[50px] h-[50px] md:h-[75px] lg:h-[80px] rounded-t-lg relative overflow-hidden rounded-r-xl place-self-center'>
          <Image
            src='/mywork-cta-img.png'
            alt='3D monitor call to action'
            layout='fill'
            objectFit='cover'
            objectPosition='30% 70%'
          />
        </div>

        <section className='md:grid grid-cols-2-col-grid__expand-two gap-5'>
          <aside className='w-[300px] h-[200px] xxs:w-[400px] xxs:h-[300px] xs:w-[500px] xs:h-[400px] mx-auto'>
            <Canvas shadows>
              <Suspense fallback={null}>
                <Scene
                  monitorGLTFPath={codifeyedMonitorGLTFPath}
                  monitorImgNodeName={codifeyedMonitorImgNodeName}
                  monitorImgMaterialName={codifeyedMonitorImgMaterialName}
                />
              </Suspense>
            </Canvas>
          </aside>

          <MyWorkInfoText
            title={'CODIFEYED'}
            summary={
              'A Front-End website that visualizes computer science topics, such as sorting algorithms and reccursion.'
            }
            pageUrl={'/codifeyed'}
            githubProjectLink={'https://github.com/Dan2024/CODIFEYED'}
            liveWebsiteLink={'https://codifeyed.vercel.app/'}
            animatedStylingHeader={true}
          />

          <aside className='w-[300px] h-[200px] xxs:w-[400px] xxs:h-[300px] xs:w-[500px] xs:h-[400px] mx-auto'>
            <Canvas shadows>
              <Suspense fallback={null}>
                <Scene
                  monitorGLTFPath={portfolioMonitorGLTFPath}
                  monitorImgNodeName={portfolioMonitorImgNodeName}
                  monitorImgMaterialName={portfolioMonitorImgMaterialName}
                />
              </Suspense>
            </Canvas>
          </aside>

          <MyWorkInfoText
            title={'Portfolio Website'}
            summary={
              'My personal portfolio website focused on front-end design, experimenting with webGL, React Three Fiber and Next.js.'
            }
            pageUrl={'/portfolio'}
            githubProjectLink={'https://github.com/Dan2024/PORTFOLIO'}
            animatedStylingTitle={true}
          />

          <aside className='w-[300px] h-[200px] xxs:w-[400px] xxs:h-[300px] xs:w-[500px] xs:h-[400px] mx-auto blur'>
            <Canvas shadows>
              <Suspense fallback={null}>
                <Scene
                  monitorGLTFPath={portfolioMonitorGLTFPath}
                  monitorImgNodeName={portfolioMonitorImgNodeName}
                  monitorImgMaterialName={portfolioMonitorImgMaterialName}
                />
              </Suspense>
            </Canvas>
          </aside>

          <div className='mx-3 pb-10 md:mb-0'>
            <h2>Web-Dev Quiz App</h2>
            <p className='text-portfolio-blue italic' ref={ref}>
              <RoughNotation
                type='underline'
                padding={5}
                strokeWidth={2}
                show={inView}
                animationDelay={700}
                animationDuration={900}
                color='#61a0af'
              >
                coming soon...
              </RoughNotation>
            </p>
            <button className='mx-3 blur-sm'>More Info</button>
            <div className='mx-3 mt-10 grid grid-cols-2-col-grid__expand-two blur-sm'>
              <FontAwesomeIcon
                icon={faGithub}
                className='w-8 h-8 mr-5 text-portfolio-blue'
              />

              <div className='spacer'></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

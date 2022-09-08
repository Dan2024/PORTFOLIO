import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame, Canvas, useThree } from '@react-three/fiber'
import { useEffect, useRef, Suspense, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg

function Scene() {
  // Code to move the camera around
  const orbitControlsRef = useRef(null)
  useFrame((state) => {
    orbitControlsRef.current.dampingFactor = 0.003
    orbitControlsRef.current.enableZoom = false
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse
      // console.log(orbitControlsRef.current)
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(30))
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30))
      orbitControlsRef.current.update()
    }
  })

  const PortfolioMonitor = () => {
    const [model, setModel] = useState()

    useEffect(() => {
      new GLTFLoader().load('/portfolio-monitor-3.glb', setModel)
    })

    return model ? (
      <primitive castShadow object={model.scene} position={[0, 0, 0]} />
    ) : null
  }

  const Floor = () => {
    return (
      <mesh
        rotation={[-angleToRadians(90), 0, 0]}
        position={[0, -3, 0]}
        receiveShadow
      >
        <planeGeometry args={[40, 20]} />
        <meshStandardMaterial color='#58bedb' />
      </mesh>
    )
  }

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 3, 9]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(85)}
        enableDampening={true}
        panSpeed={0.1}
      />

      {/* Ball */}
      {/* <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color='#ffffff' metalness={0.6} roughness={0.2} />
      </mesh> */}

      {/* Objects */}
      <PortfolioMonitor />
      <Floor />

      {/* Lighting */}
      <ambientLight args={['#ffffff', 0.25]} />
      <directionalLight
        args={['#ffffff', 1.5, 7, angleToRadians(45), 0.4]}
        position={[5, 1, -2]}
        castShadow
      />
    </>
  )
}

// ------- canvas -------
export default function MyWork() {
  return (
    <div className='w-[500px] h-[400px] shadow-xl ml-20'>
      <Canvas frameloop='demand' shadows>
        <Suspense fallback={<></>}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}

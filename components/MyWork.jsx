import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame, Canvas } from '@react-three/fiber'
import { useEffect, useRef, Suspense, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg

const codifeyedMonitorGLTFPath = '/glb/codifeyed-monitor-transformed.glb'
const codifeyedMonitorImgNodeName = 'Screenshot_2022-09-08_at_100114'
const codifeyedMonitorImgMaterialName = 'Screenshot 2022-09-08 at 10.01.14'

const portfolioMonitorGLTFPath = '/glb/portfolio-monitor-3-transformed.glb'
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
        castShadow
      />
    </>
  )
}

// ------- canvas -------
export default function MyWork() {
  return (
    <div className='w-[500px] h-[400px] shadow-xl ml-20'>
      <Canvas shadows>
        <Suspense fallback={null}>
          <Scene
            monitorGLTFPath={codifeyedMonitorGLTFPath}
            monitorImgNodeName={codifeyedMonitorImgNodeName}
            monitorImgMaterialName={codifeyedMonitorImgMaterialName}
          />
        </Suspense>
      </Canvas>
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
  )
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { Html, TransformControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { editable as e } from '@theatre/r3f'

import "./headset.css"
import Building2 from '../Building2/Building2'
import { useControls } from 'leva'



export default function Headset(props) {
  const { vrBuildingPosition,vrBuildingRotation } = useControls("", {
    vrBuildingPosition: {
      value: { x: 4.670232767068449, y: 129.00000000000003, z: -27.29999999999927 },
       
      step: 0.1,
      joystick: "invertY"
    },
    vrBuildingRotation:{
      value:{x:-1.07,y:-4.71,z:-0.07},
      step: 0.01,
      joystick: "invertY"
  
  }
  });
    useFrame(()=>{
        console.log("position headset",headset.current.position)
    })

    const headset=useRef()
   
  const { nodes, materials } = useGLTF('/vr.glb')
  return (
    <>
    {/* <TransformControls object={headset}  mode='translate'/> */}
    <e.mesh theatreKey="headset">
    <group ref={headset} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.aiStandardSurface4SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4008.geometry}
          material={materials.aiStandardSurface1SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4010.geometry}
          material={materials.aiStandardSurface1SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.glass}
          position={[0, 0.257, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5001.geometry}
          material={materials.glass}
          position={[2.162, 0.257, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.aiStandardSurface2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6001.geometry}
          material={materials.aiStandardSurface2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6002.geometry}
          material={materials.aiStandardSurface2SG}
        />
      </group>
      {/* <Html   distanceFactor={1}  position={[-1.3,0.92,0.2]} transform occlude wrapperClass='vrScreen'>
        <iframe src='https://threejs.org/'/>
      </Html> */}
     

    </group>
    <group>
    <Building2 position={[vrBuildingPosition.x,vrBuildingPosition.y,vrBuildingPosition.z]} rotation={[vrBuildingRotation.x,vrBuildingRotation.y,vrBuildingRotation.z]} scale={0.005}/>
    </group>
 
    </e.mesh>
    
    </>
 
  )
}

useGLTF.preload('/vr.glb')

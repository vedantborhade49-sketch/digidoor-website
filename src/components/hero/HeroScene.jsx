import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HeroObjects({ progress }) {
  const buildingRef = useRef();
  const identityRef = useRef();
  const campaignRef = useRef();
  const digitalRef = useRef();
  const environmentRef = useRef();

  useFrame((state) => {
    // 0.00 - 0.20: Plain Property
    // 0.20 - 0.35: Identity
    // 0.35 - 0.60: Campaign
    // 0.60 - 0.72: Digital
    // 0.72 - 0.85: Environment
    // 0.85 - 1.00: Final Hero State
    
    if (identityRef.current) {
      const targetOpacity = progress >= 0.2 ? 1 : 0;
      identityRef.current.children.forEach((child) => {
        if (child.material) {
          child.material.opacity = THREE.MathUtils.lerp(
            child.material.opacity,
            targetOpacity,
            0.1
          );
        }
      });
    }

    if (campaignRef.current) {
      const targetScale = progress >= 0.35 ? 1 : 0.001;
      campaignRef.current.scale.setScalar(THREE.MathUtils.lerp(campaignRef.current.scale.x, targetScale, 0.1));
    }

    if (digitalRef.current) {
      digitalRef.current.visible = progress >= 0.6;
      // Pulsating effect for digital
      if (progress >= 0.6) {
        digitalRef.current.children.forEach(c => {
          if (c.material) {
             c.material.color.setHSL(0.5, 1, 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2);
          }
        });
      }
    }

    if (environmentRef.current) {
      const targetY = progress >= 0.72 ? 0 : -10;
      environmentRef.current.position.y = THREE.MathUtils.lerp(environmentRef.current.position.y, targetY, 0.05);
    }
    
    // Subtle overall camera/group rotation tied to scroll and time
    if (buildingRef.current && buildingRef.current.parent) {
      buildingRef.current.parent.rotation.y = THREE.MathUtils.lerp(
        buildingRef.current.parent.rotation.y,
        progress * Math.PI * 0.25, // rotate 45 degrees over the scroll
        0.05
      );
    }
  });

  return (
    <group>
      {/* 1. Building - Always visible */}
      <mesh ref={buildingRef} position={[0, 4, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 8, 3]} />
        <meshStandardMaterial color="#dcdcdc" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* 2. Identity */}
      <group ref={identityRef}>
        <mesh position={[0, 7.5, 1.51]}>
          <planeGeometry args={[2.5, 0.8]} />
          <meshStandardMaterial color="#0A192F" transparent opacity={0} />
        </mesh>
      </group>

      {/* 3. Physical Campaign */}
      <group ref={campaignRef} position={[4, 3, 2]}>
        <mesh castShadow>
          <boxGeometry args={[3, 2, 0.2]} />
          <meshStandardMaterial color="#ff3333" />
        </mesh>
        <mesh position={[0, -2, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 4]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </group>

      {/* 4. Digital Layer */}
      <group ref={digitalRef} position={[-2.5, 3, 2.5]} rotation={[0, Math.PI / 4, 0]}>
        <mesh>
          <planeGeometry args={[2, 3]} />
          <meshBasicMaterial color="#00ffff" />
        </mesh>
      </group>

      {/* 5. Environment (Cars, people) */}
      <group ref={environmentRef} position={[0, -10, 0]}>
        <mesh position={[4, 0.25, 5]} castShadow>
          <boxGeometry args={[1.5, 0.5, 3]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[-3, 0.25, 6]} castShadow>
          <boxGeometry args={[1.5, 0.5, 3]} />
          <meshStandardMaterial color="#222222" />
        </mesh>
      </group>
    </group>
  );
}

export default function HeroScene() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          setProgress(self.progress);
        }
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '600vh', width: '100%', position: 'relative', backgroundColor: '#f8f8f8' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden' }}>
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 2, 18]} fov={35} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />
          
          <HeroObjects progress={progress} />

          <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={20} blur={2} far={10} />
          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
}

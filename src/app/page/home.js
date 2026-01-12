'use client';

import React, { use } from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Style from './home.module.css';
import Nav from '@/components/nav';
import AboutMePage from  "./aboutme";
import LiquidEtherClient from '@/components/LiquidEtherClient';
import Projects from './projects';
import Skills from './skills';
import ConnectMePage from './connectme'
import Cursor from '@/components/cursor';

export default function HomePage(){

  const backgroundRef = useRef(null);
  const img = useRef(null);
  const iamA = useRef(null);
  const iamA2 = useRef(null);
  const developer = useRef(null);
  const developer2 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100 - 50;
      const y = (e.clientY / window.innerHeight) * 100 - 50;

      const width = window.innerWidth;

      if (width > 768) {
        const invertX = -x;
        const invertY = -y;

        const tx = invertX * 1.2;
        const ty = invertY * 1.2;

        // Use GSAP for smooth animations
        gsap.to(img.current, {
          x: x,
          y: y,
          duration: 0.8,
          ease: "power2.out"
        });

        gsap.to([developer.current, developer2.current], {
          x: tx,
          y: ty,
          duration: 0.9,
          ease: "power2.out"
        });

        gsap.to([iamA.current, iamA2.current], {
          x: x * 0.3,
          y: y * 0.3,
          duration: 1,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Cursor />
      <Nav />
      
      <div className={Style.someClass} style={{ position: 'relative' }}>
        
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 1,
          pointerEvents: 'none'
        }}>
          <LiquidEtherClient
            colors={['#000000ff', '#a52b2bff', '#f9f06b']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        
        <div className={Style.midContent}>
          <img ref={img} className={Style.profile} src="https://res.cloudinary.com/dethahoug/image/upload/v1767374893/aniketh_buzjdv.png" alt="Profile" />
          <p ref={iamA} className={Style.I}>I'm</p>
          <p ref={iamA2} className={Style.a}>a</p>
          <p ref={developer} className={Style.Developer}>Developer</p>
          <p ref={developer2} className={Style.Developer2}>Developer</p>
        </div>
      </div>
      <AboutMePage />
      <Projects />
      <Skills/>
      <ConnectMePage />
    </> 
  )
};
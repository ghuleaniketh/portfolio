'use client';

import React, { use } from 'react';
import { useEffect } from 'react';
import Style from './home.module.css';
import Nav from '@/components/nav';
import AboutMePage from  "./aboutme";
import LiquidEtherClient from '@/components/LiquidEtherClient';
import Projects from './projects';
import Skills from './skills';
import ConnectMePage from './connectme'
import Cursor from '@/components/cursor';
import { useRef} from 'react';

export default function HomePage(){

  const backgroundRef = useRef(null);
  const img = useRef(null);
  const iamA = useRef(null);
  const iamA2 = useRef(null);
  const developer = useRef(null);
  const developer2 = useRef(null);



  useEffect(() => {
    
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX/window.innerWidth)*100 - 50;
      const y = (e.clientY/window.innerWidth)*100 - 50;
      console.log(x, y);

      const width = window.innerWidth;
      console.log(width);

      if (width > 768) {
        window.requestAnimationFrame(() => {
          const invertX = -x;
          const invertY = -y; 

          const tx = invertX * 1.2; 
          const ty = invertY * 1.2; 

          img.current.style = ` translate:${x}px ${y}px; )`;
          developer.current.style = ` translate:${tx}px ${ty}px; )`;
          developer2.current.style = ` translate:${tx}px ${ty}px; )`;
          iamA.current.style = ` translate:${x*0.3}px ${y*0.3}px; )`;
          iamA2.current.style = ` translate:${x*0.3}px ${y*0.3}px; )`;

          // iamA.current.style.transform = `translate(${tx * 0.8}px, ${ty * 0.8}px) )`;
          // developer.current.style.transform = `translate(${tx * 0.6}px, ${ty * 0.6}px) )`;
        });
      }
    });
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
          <img   ref={img} className={Style.profile} src="https://res.cloudinary.com/dethahoug/image/upload/v1767374893/aniketh_buzjdv.png" alt="Profile" />
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
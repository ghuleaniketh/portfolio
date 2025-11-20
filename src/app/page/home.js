import React from 'react';
import Style from './home.module.css';
import Nav from '@/components/nav';
import AboutMePage from  "./aboutme";
import dynamic from 'next/dynamic';
const LiquidEther = dynamic(() => import('@/components/LiquidEther'), { ssr: false });
import Projects from './projects';
import Skills from './skills';

export default function HomePage(){
    return (
        <>
        <Nav />
        
          {/* <img src="/background.png" alt="Background" className={Style.background} /> */}
      <div className={Style.someClass} style={{ position: 'relative' }}>
        
        {/* LiquidEther Background Effect - between someClass and midContent */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 1,
          pointerEvents: 'none'
        }}>
          <LiquidEther
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
          <img className={Style.profile} src="/aniketh.png" alt="Profile" />
          <p className={Style.I}>I'm</p>
          <p className={Style.a}>a</p>
          <p className={Style.Developer}>Developer</p>
          <p className={Style.Developer2}>Developer</p>
        </div>
      </div>
      <AboutMePage />
      <Projects />
      <Skills/>
        </> 
    )
};
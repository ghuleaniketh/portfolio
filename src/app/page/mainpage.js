'use client';

import AboutMePage from  "./aboutme";
import Projects from './projects';
import Skills from './skills';
import ConnectMePage from './connectme'
import Cursor from '@/components/cursor';
import HomePage from './home';

export default function MainPage(){

  

  return (
    <>
      <Cursor />
      <HomePage/>
      <AboutMePage />
      <Projects />
      <Skills/>
      <ConnectMePage />
    </> 
  )
};
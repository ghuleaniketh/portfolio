'use client';

import React, { use } from 'react';
import { useEffect, useRef,useState} from 'react';
import gsap from 'gsap';
import Style from './home.module.css';
import Nav from '@/components/nav';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderTransitionPass } from 'three/examples/jsm/postprocessing/RenderTransitionPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

export default function HomePage(){

  const [scrollValue ,setScrollValue] = useState(1);
  const backgroundRef = useRef(null);
  const img = useRef(null);
  const iamA = useRef(null);
  const iamA2 = useRef(null);
  const developer = useRef(null);
  const developer2 = useRef(null);
  const rendererRef = useRef();
  const transitionObj = useRef({ value: 1 });
  const scrollValueRef = useRef(0);
  const composerRef = useRef();
  const rtPassRef = useRef();
  const rafRef = useRef();
  const clockRef = useRef(new THREE.Clock());


  useEffect(()=>{

    const container = backgroundRef.current;
    if (!container) return;

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.pointerEvents = 'none'; // allow clicks through
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

      function FXScene(geometry, rotationSpeedVec3, backgroundColor) {
      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 20;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(backgroundColor);
      scene.add(new THREE.AmbientLight(0xaaaaaa, 3));
      const light = new THREE.DirectionalLight(0xffffff, 3);
      light.position.set(0, 1, 4);
      scene.add(light);

      this.rotationSpeed = rotationSpeedVec3;
      const color = 0x00ff00;
      const material = new THREE.MeshPhongMaterial({ color, flatShading: true });
      const mesh = generateInstancedMesh(geometry, material, 300);
      scene.add(mesh);

      this.scene = scene;
      this.camera = camera;
      this.mesh = mesh;

      this.update = function (delta) {
        mesh.rotation.x += this.rotationSpeed.x * delta;
        mesh.rotation.y += this.rotationSpeed.y * delta;
        mesh.rotation.z += this.rotationSpeed.z * delta;
      };

      this.resize = function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };
    }

    function generateInstancedMesh(geometry, material, count) {
      const mesh = new THREE.InstancedMesh(geometry, material, count);
      const dummy = new THREE.Object3D();
      const color = new THREE.Color();

      for (let i = 0; i < count; i++) {
        dummy.position.x = Math.random() * 100 - 50;
        dummy.position.y = Math.random() * 60 - 30;
        dummy.position.z = Math.random() * 80 - 40;

        dummy.rotation.x = Math.random() * 2 * Math.PI;
        dummy.rotation.y = Math.random() * 2 * Math.PI;
        dummy.rotation.z = Math.random() * 2 * Math.PI;

        dummy.scale.x = Math.random() * 2 + 1;
        if (geometry.type === 'BoxGeometry') {
          dummy.scale.y = Math.random() * 2 + 1;
          dummy.scale.z = Math.random() * 2 + 1;
        } else {
          dummy.scale.y = dummy.scale.x;
          dummy.scale.z = dummy.scale.x;
        }

        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        mesh.setColorAt(i, color.setScalar(0.1 + 0.9 * Math.random()));
      }

      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      return mesh;
    }

    // create two FX scenes
    const fxSceneA = new FXScene(new THREE.BoxGeometry(2, 2, 2), new THREE.Vector3(0, -0.4, 0), 0xffffff);
    const fxSceneB = new FXScene(new THREE.IcosahedronGeometry(1, 1), new THREE.Vector3(0, 0.2, 0.1), 0x000000);

    // composer + render transition pass
    const composer = new EffectComposer(renderer);
    const renderTransitionPass = new RenderTransitionPass(fxSceneA.scene, fxSceneA.camera, fxSceneB.scene, fxSceneB.camera);

    // load transition texture (put noise.png in public/)
    const loader = new THREE.TextureLoader();
    loader.load('/noise.png', (tex) => {
      renderTransitionPass.setTexture(tex);
    });

    // initialize transition value
    transitionObj.current.value = scrollValueRef.current;
    renderTransitionPass.setTransition(transitionObj.current.value);

    composer.addPass(renderTransitionPass);
    composer.addPass(new OutputPass());

    composerRef.current = composer;
    rtPassRef.current = renderTransitionPass;

    // resize handler
    function onWindowResize() {
      fxSceneA.resize();
      fxSceneB.resize();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);

    // helper to smoothly animate the transition using GSAP
    function animateTransitionTo(target) {
      // kill existing tweens to avoid stacking
      gsap.killTweensOf(transitionObj.current);
      gsap.to(transitionObj.current, {
        value: target,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (rtPassRef.current) rtPassRef.current.setTransition(transitionObj.current.value);
        }
      });
    }
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\|||||||||||||||||||||||||||||||||||||||||||||||||||
    // wheel handler (scroll) — uses GSAP for smooth interpolation
    // function onWheel(event) {
    //   let next;
    //   if (event.deltaY < 0) {
    //     next = Math.min(1, scrollValueRef.current + 0.07);
    //     console.log(`scrolled up${next}`);
    //   } else {
    //     next = Math.max(0, scrollValueRef.current - 0.07);
    //     console.log(`scrolled down${next}`);
    //   }
    //   setScrollValue(next);
    //   scrollValueRef.current = next;
    //   animateTransitionTo(next);
    // }
    // window.addEventListener('wheel', onWheel, { passive: true });

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // background animation: use a safe timed interval to step the transition value between 0 and 1
    // this avoids any blocking infinite loops and keeps the effect bounded and cancellable.
    let bgInterval = null;
    function startBackgroundAnimation() {
      // toggle between 0 and 1 every 3 seconds
      bgInterval = setInterval(() => {
      const next = scrollValueRef.current === 0 ? 1 : 0;
      scrollValueRef.current = next;
      setScrollValue(next);
      animateTransitionTo(next);
      }, 3000);
    }
    startBackgroundAnimation();
    // animate loop
    function animate() {
      const delta = clockRef.current.getDelta();
      fxSceneA.update(delta);
      fxSceneB.update(delta);

      composer.render();
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);


    return ()=>{
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('wheel', onWheel);
      cancelAnimationFrame(rafRef.current);
    return ()=>{
      window.removeEventListener('resize', onWindowResize);
      // only remove wheel listener if it exists (avoid ReferenceError when onWheel is not defined)
      if (typeof onWheel !== 'undefined') window.removeEventListener('wheel', onWheel);
      // clear background animation interval if started
      if (typeof bgInterval !== 'undefined' && bgInterval !== null) clearInterval(bgInterval);
      cancelAnimationFrame(rafRef.current);
      gsap.killTweensOf(transitionObj.current);
      composer.dispose && composer.dispose();
      renderer.dispose && renderer.dispose();
      container.removeChild(renderer.domElement);
    }
 }
  }, []);



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








  return(
    <>
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
          <div ref={backgroundRef} style={{ width: '100%', height: '100%' }}></div>
        </div>
        
        <div className={Style.midContent}>
          <img ref={img} className={Style.profile} src="https://res.cloudinary.com/dethahoug/image/upload/v1767374893/aniketh_buzjdv.png" alt="Profile" />
          <p ref={iamA} className={Style.I}>I'm</p>
          <p ref={iamA2} className={Style.a}>a</p>
          <p ref={developer} className={Style.Developer}>Developer</p>
          <p ref={developer2} className={Style.Developer2}>Developer</p>
        </div>
      </div>
    </>
  )
}
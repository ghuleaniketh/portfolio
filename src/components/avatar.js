import style from './avatar.moudel.css'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js';
import gsap from 'gsap'


export default function Avatar(){

    const canvasRef = useRef(null);
        
    
    useEffect(()=>{

        
        const canvas = canvasRef.current;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas ,alpha:true ,antialias:true  });
        renderer.setSize(window.innerWidth/3, window.innerHeight/3);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        camera.position.z = 10;

        const pmremGenerator = new THREE.PMREMGenerator( renderer );
        pmremGenerator.compileEquirectangularShader();

        new RGBELoader()
    .load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/moon_lab_1k.hdr', function ( texture ){
    const envMap = pmremGenerator.fromEquirectangular( texture ).texture;
    scene.environment = envMap;
    texture.dispose();
    pmremGenerator.dispose();
    
    
    const loader = new GLTFLoader();

    loader.load("./DamagedHelmet.gltf",(gltf) =>{
        const model = gltf.scene;
        scene.add(model);
        const clock = new THREE.Clock();
    
        

       
       

        window.addEventListener("mousemove",(e)=>{
            
            if(model){
            const rotationX = (e.clientX/window.innerWidth - 0.5) * Math.PI  ;
            const rotationY = (e.clientY/window.innerHeight - 0.5) * Math.PI;
            console.log(`x = ${rotationX}__y = ${rotationY}`);
            // model.rotation.x = rotationY;
            // model.rotation.y = rotationX;

            gsap.to(model.rotation,{
                x:rotationY,
                y:rotationX,
                duration:0.9,
                ease:"power2.out"
            })
            }
            
            
        })

        function renderLoop() {
            requestAnimationFrame(renderLoop);
            const delta = clock.getDelta();
            renderer.render(scene, camera);
        }
        renderLoop();
    });


} );
    })


    return(
        <canvas ref={canvasRef} ></canvas>
    )
}
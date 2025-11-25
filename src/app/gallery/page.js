"use client"

import Styles from './gallery.module.css';

export default function GalleryPage(){
        // placeholder images — replace with your project/gallery images
        const images = [
            '/background.png',
            '/aniketh.png',
            '/background.png',
            '/aniketh.png'
        ];

        return(
                <div className={Styles.container}>
                        <h1 className={Styles.heading}>Gallery</h1>

                        <div className={Styles.grid}>
                            {images.map((src, i) => (
                                <div className={Styles.card} key={i}>
                                    <img src={src} alt={`gallery-${i}`} />
                                    <p>Project {i+1}</p>
                                </div>
                            ))}
                        </div>
                </div>
        );

}
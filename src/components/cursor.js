'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from './cursor.module.css'

export default function Cursor() {
    const cursorRef = useRef(null);
    const SIZE = 20;

    useEffect(() => {
        const el = cursorRef.current;
        if (!el) return;

        const onMove = (e) => {
            gsap.to(el, {
                x: e.clientX - SIZE+70 / 2,
                y: e.clientY - SIZE / 2,
                duration: 0,
                ease: "power2.out",
                overwrite: true,
            });
        };

        window.addEventListener("mousemove", onMove);
        return () => {
            window.removeEventListener("mousemove", onMove);
            gsap.killTweensOf(el);
        };
    }, []);

    return (
        <div
            className={styles.cursor}
            ref={cursorRef}
            style={{
                height: SIZE,
                width: SIZE,
                backgroundColor: "none",
                opacity: 0.8,
                borderRadius: "50%",
                position: "fixed",
                left: "-25px",
                top: 0,
                pointerEvents: "none",
                zIndex: 9999,
            }}
        >
        </div>
    );
}
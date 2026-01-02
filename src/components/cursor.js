'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
    const cursorRef = useRef(null);
    const SIZE = 25;

    useEffect(() => {
        const el = cursorRef.current;
        if (!el) return;

        const onMove = (e) => {
            gsap.to(el, {
                x: e.clientX - SIZE / 2,
                y: e.clientY - SIZE / 2,
                duration: 0.05,
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
            ref={cursorRef}
            style={{
                height: SIZE,
                width: SIZE,
                backgroundColor: "white",
                border: "2px solid black",
                opacity: 0.8,
                borderRadius: "50%",
                position: "fixed",
                left: 0,
                top: 0,
                pointerEvents: "none",
                zIndex: 9999,
            }}
        />
    );
}
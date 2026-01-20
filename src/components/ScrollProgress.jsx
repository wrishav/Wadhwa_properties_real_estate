'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            setScrollProgress(Math.min(scrolled, 100));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="scroll-progress">
            <div
                className="scroll-progress-bar"
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </div>
    );
}

import { useEffect, useState } from "react";

export const BackgroundEffects = () => {
    // id, size, x, y, opacity, animationDuration
    const [effects, setEffects] = useState([]);
    // id, size, x, y, delay, animationDuration
    const [shootingStars, setShootingStars] = useState([]);

    useEffect(() => {
        generateEffects();
        generateShootingStars();

        const handleResize = () => {
            generateShootingStars();
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    const generateEffects = () => {
        const numOfEffects = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newEffects = [];

        for (let i = 0; i < numOfEffects; i++) {
            newEffects.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setEffects(newEffects);
    };

    const generateShootingStars = () => {
        const numOfShootingStars = 4;
        const newShootingStars = [];

        for (let i = 0; i < numOfShootingStars; i++) {
            newShootingStars.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 30,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 4 + 6,
            });
        }
        setShootingStars(newShootingStars);
    };


    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {effects.map((effect) => (
                <div 
                    key={effect.id} 
                    className="effect animate-pulse-subtle" 
                    style={{
                        width: effect.size + "px",
                        height: effect.size + "px",
                        left: effect.x + "%",
                        top: effect.y + "%",
                        opacity: effect.opacity,
                        animationDuration: effect.animationDuration + "s",
                    }}
                />
            ))}

            {shootingStars.map((shootingStar) => (
                <div 
                    key={shootingStar.id} 
                    className="shootingStar animate-shootingStar" 
                    style={{
                        width: shootingStar.size * 50 + "px",
                        height: shootingStar.size * 2 + "px",
                        left: shootingStar.x + "%",
                        top: shootingStar.y + "%",
                        animationDelay: shootingStar.delay + "s",
                        animationDuration: shootingStar.animationDuration + "s",
                        opacity: 0,
                        visibility: "hidden",
                    }}
                />
            ))}

        </div>
    );
};
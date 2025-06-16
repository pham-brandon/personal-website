import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration

export const BackgroundEffects = () => {
    const [effects, setEffects] = useState([]);

    useEffect(() => {
        generateEffects();
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
        </div>
    );
};
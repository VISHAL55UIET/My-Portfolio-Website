import { useEffect, useState, useCallback } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const generateStars = useCallback(() => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 12000
    );

    const newStars = Array.from({ length: numberOfStars }, (_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.6 + 0.3,
      animationDuration: Math.random() * 4 + 2,
      blur: Math.random() > 0.8 ? "1px" : "0px",
    }));

    setStars(newStars);
  }, []);

  const generateMeteors = useCallback(() => {
    const numberOfMeteors = 5;

    const newMeteors = Array.from({ length: numberOfMeteors }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 25,
      delay: Math.random() * 12,
      animationDuration: Math.random() * 3 + 4,
    }));

    setMeteors(newMeteors);
  }, []);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    // Regenerate meteors every 10s
    const meteorInterval = setInterval(() => {
      generateMeteors();
    }, 10000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(meteorInterval);
    };
  }, [generateStars, generateMeteors]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft Depth Layer */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-background/20" />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            filter: `blur(${star.blur})`,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute meteor animate-meteor"
          style={{
            width: `${meteor.size * 60}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
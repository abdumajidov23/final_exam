import { useEffect, useState } from "react";

const MovingText: React.FC = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [velocity, setVelocity] = useState({ x: 4, y: 3, });

  useEffect(() => {
    const moveText = () => {
      setPosition((prev) => {
        let newTop = prev.top + velocity.y;
        let newLeft = prev.left + velocity.x;
        const windowWidth = window.innerWidth - 100;
        const windowHeight = window.innerHeight - 50;

        if (newLeft <= 0 || newLeft >= windowWidth) {
          setVelocity((prevVelocity) => ({ ...prevVelocity, x: -prevVelocity.x }));
        }
        if (newTop <= 0 || newTop >= windowHeight) {
          setVelocity((prevVelocity) => ({ ...prevVelocity, y: -prevVelocity.y }));
        }

        return { top: newTop, left: newLeft };
      });
    };

    const interval = setInterval(moveText, 20);
    return () => clearInterval(interval);
  }, [velocity]);

  return (
    <div
      className="fixed text-4xl font-bold text-gray-400"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      ID19944
    </div>
  );
};



export default MovingText;


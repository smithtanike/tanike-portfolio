import { useEffect, useState } from "react";

const GlowingCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl z-50"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        width: "150px",
        height: "150px",
        background:
          "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 40%, rgba(0,0,0,0) 70%)",
      }}
    />
  );
};

export default GlowingCursor;

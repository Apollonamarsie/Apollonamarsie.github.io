// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useEffect, useRef } from 'react';

interface SpaceshipsProps {
  s1: number;
  s2: number;
}

const Spaceships = ({ s1, s2 }: SpaceshipsProps) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const maxDistance = Math.max(s1, s2);
    const scaleFactor = (canvas.width - 100) / maxDistance; // Adjusting scale to fit canvas width

    // Spaceship 1
    ctx.fillStyle = 'blue';
    const s1Length = s1 * scaleFactor;
    ctx.fillRect(20, 50, s1Length, 30);
    ctx.fillText(`Statek 1: ${s1}m`, s1Length + 25, 70);

    // Spaceship 2
    ctx.fillStyle = 'red';
    const s2Length = s2 * scaleFactor;
    ctx.fillRect(20, 100, s2Length, 30);
    ctx.fillText(`Statek 2: ${s2}m`, s2Length + 25, 120);

    // Label
    ctx.fillStyle = 'black';
    ctx.fillText('Porównanie odległości statków kosmicznych', 150, 30);
  }, [s1, s2]);

  return (
    <canvas
      ref={canvasRef}
      width="500"
      height="200"
      style={{ border: '1px solid black' }}
    />
  );
};

export default Spaceships;

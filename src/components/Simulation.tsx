import { useRef, useEffect } from 'react';

const Simulation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const sun = { x: canvas.width / 2, y: canvas.height / 2, radius: 50 };
    const earth = { x: 0, y: 0, radius: 20, angle: 0 };
    const moon = { x: 0, y: 0, radius: 8, angle: 0 };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // rysuj słońce
      ctx.beginPath();
      ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.closePath();

      // rysuj orbite
      ctx.beginPath();
      ctx.arc(sun.x, sun.y, 150, 0, Math.PI * 2, false);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.closePath();

      // oblicz pozycje ziemi
      earth.angle += 0.01;
      earth.x = sun.x + 150 * Math.cos(earth.angle);
      earth.y = sun.y + 150 * Math.sin(earth.angle);

      // narysuj ziemie
      const earthGradient = ctx.createRadialGradient(earth.x, earth.y, 5, earth.x, earth.y, earth.radius);
      earthGradient.addColorStop(0, 'blue');
      earthGradient.addColorStop(0.5, 'green');
      earthGradient.addColorStop(1, 'blue');

      ctx.beginPath();
      ctx.arc(earth.x, earth.y, earth.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = earthGradient;
      ctx.fill();
      ctx.closePath();

      // Orbita
      ctx.beginPath();
      ctx.arc(earth.x, earth.y, 40, 0, Math.PI * 2, false);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.closePath();

      // oblicz pozycje księżyca
      moon.angle += 0.05;
      moon.x = earth.x + 40 * Math.cos(moon.angle);
      moon.y = earth.y + 40 * Math.sin(moon.angle);

      // narysuj ksieżyc
      ctx.beginPath();
      ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = 'grey';
      ctx.fill();
      ctx.closePath();

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clean up canvas on unmount
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block', margin: '0 auto', background: '#000' }} />;
};

export default Simulation
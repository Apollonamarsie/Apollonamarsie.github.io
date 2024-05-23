import { useEffect, useState } from "react";
import './Statistics.css'

interface StatisticsProps {
  visits: number;
  spendTime: number;
}

const Statistics = ({ visits, spendTime }: StatisticsProps) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time: any) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const now = new Date();
  const currentDate = now.toLocaleDateString();

  return (
    <div className="statdiv">
      <div className="statcard">
        <div className="statcard-info">
          <p className="stattitle">Data: {currentDate}</p>
          <p className="stattitle">Czas: {formatTime(time)}</p>
          <p className="stattitle">Ilość odwiedzin: {visits}</p>
          <p className="stattitle">Czas spędzony na stronie: {spendTime}</p>
        </div>
      </div>
    </div>
  )
}

export default Statistics
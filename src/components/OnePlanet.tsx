import './OnePlanet.css';
import { Image } from 'primereact/image';

interface OnePlanetProps {
  name: string;
  desc: string;
  img: string;
}

const OnePlanet = ({ name, desc, img }: OnePlanetProps) => {
  return (
    <div className='oneplanet-main'>
      <div className='oneplanet-title'>
        <h1 className="gradient-text">
          {name}
        </h1>
      </div>
      <div className='oneplanet-content'>
        <div className='oneplanet-image'>
          <Image src={img} alt="Image" width="300" preview />
        </div>
        <div className='oneplanet-description'>
          {desc}
        </div>
      </div>
    </div>
  )
}

export default OnePlanet
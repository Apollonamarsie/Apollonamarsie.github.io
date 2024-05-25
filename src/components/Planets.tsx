import { useRef, useState } from "react";
import OnePlanet from "./OnePlanet"
import './Planets.css';
import { Button } from "primereact/button";

interface Planet {
  id: number;
  name: string;
  desc: string;
  img: string;
}

const Planets = () => {
  const [currentPlanetId, setCurrentPlanetId] = useState<number>(1);
  const touchStartX = useRef(null);

  const planets: Planet[] = [
    {
      id: 1,
      name: "Merkury",
      desc: "Najbliższa planeta Słońca, znana z ekstremalnych temperatur. Jego dni są dłuższe od nocy - trwa to 176 ziemskich dni.",
      img: "src/assets/planets/merkury.jpg",
    },
    {
      id: 2,
      name: "Wenus",
      desc: "Najjaśniejsza planeta, z gęstą atmosferą i skrajnymi temperaturami. Na Wenusie dzień trwa dłużej niż rok.",
      img: "src/assets/planets/wenus.jpg",
    },
    {
      id: 3,
      name: "Ziemia",
      desc: "Nasza planeta, jedyna znana z życiem.",
      img: "src/assets/planets/ziemia.jpg",
    },
    {
      id: 4,
      name: "Mars",
      desc: 'Nazywany "Czerwoną Planetą" z powodu czerwonej powierzchni. Zawiera najwyższą górę w Układzie Słonecznym - Olympus Mons.',
      img: "src/assets/planets/mars.jpeg",
    },
    {
      id: 5,
      name: "Jowisz",
      desc: "Największa planeta, znana z burz i olbrzymich rozmiarów. Posiada 79 księżyców, z których największy - Ganymedes - jest większy od Merkurego.",
      img: "src/assets/planets/jowisz.jpg",
    },
    {
      id: 6,
      name: "Saturn",
      desc: "Znany ze swoich widocznych pierścieni składających się głównie z lodu i pyłu.",
      img: "src/assets/planets/saturn.png",
    },
    {
      id: 7,
      name: "Uran",
      desc: "Gazowy gigant obracający się na boku. Atmosfera złożona głównie z wodoru, helu i metanu.",
      img: "src/assets/planets/uran.png",
    },
    {
      id: 8,
      name: "Neptun",
      desc: "Gazowy olbrzym z intensywnymi wiatrami i niskimi temperaturami. Ma najszybsze wiatry w Układzie Słonecznym, osiągające do 2,000 km/h.",
      img: "src/assets/planets/neptun.png",
    }
  ];

  const currentPlanet = planets.find((planet) => planet.id === currentPlanetId) ?? planets[0];

  const next = () => {
    setCurrentPlanetId((p) => {
      if (p === 8) {
        return 1;
      }
      return p + 1
    })
  }

  const prev = () => {
    setCurrentPlanetId((p) => {
      if (p === 1) {
        return 8;
      }
      return p - 1
    })
  }

  const handleTouchStart = (event: any) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: any) => {
    if (!touchStartX.current) {
      return;
    }

    const currentX = event.touches[0].clientX;
    const deltaX = currentX - touchStartX.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0 && next) {
        next();
      } else if (deltaX > 0 && prev) {
        prev();
      }
      touchStartX.current = null;
    }
  };

  return (
    <div
      className="planets"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => {
        touchStartX.current = null;
      }}
    >
      <Button className="planets-button" onClick={prev}>Poprzedni</Button>
      <OnePlanet
        name={currentPlanet?.name}
        desc={currentPlanet?.desc}
        img={currentPlanet?.img}
      />
      <Button className="planets-button" onClick={next}>Następny</Button>
    </div>
  )
}

export default Planets
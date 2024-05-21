import { useState } from "react"
import Card from "./ui/Card";

interface Area {
  name: string;
  text: string;
}

const areas: Area[] = [
  {
    name: "Wybierz region na mapie",
    text: "",
  },
  {
    name: "Kolonia 1 (Nanua)",
    text: "Kontrolowana przez USA. Mała, ale ma bogate złożna grafenu.",
  },
  {
    name: "Kolonia 2 (Menua)",
    text: "Kontrolowana przez Meksyk. Brak roślinności. Rozwinięty przemysł tekstylny bazujący na włóknach kompozytowych.",
  },
  {
    name: "Kolonia 3 (S3-G43)",
    text: "Kolonia Indii. Przedsionek wojskowy i pola uprawne szczawiu.",
  },
  {
    name: "Kolonia 4 (Z9-EE7)",
    text: "Kolonia Indii. <Tajne dane>.",
  },
  {
    name: "Kolonia 5 (Zambezia)",
    text: "Jedyny obszar Pakistanu na Marsie. Chcą zniszczyć Indie.",
  },
  {
    name: "Kontynent 1 (Nowa Europa)",
    text: "Po przejęciu Europy przez pigmenów, rdzenni europejczycy osiedlili się na tym kontynencie.",
  },
  {
    name: "Kontynent 2 (Zjednoczone landy)",
    text: "Teren kontrolowany w głównej mierze przez Andorę, Liechtenstein i Gujane Francuską. Wszechstronny obszar roślinno-turystyczno-przemysłowy.",
  },
]

const Colonisation = () => {
  const [selectedArea, setSelectedArea] = useState(0);

  const selectArea = (no: number) => {
    setSelectedArea(no);
  }

  return (
    <div style={{ display: "flex" }}>
      <img src="/src/assets/marsmap.jpg" useMap="#marsmap" />
      <map name="marsmap">
        <area onClick={() => selectArea(1)} style={{ cursor: "pointer" }} target="" alt="Kolonia 1" title="Kolonia 1" coords="449,454,447,466,440,477,427,486,413,494,399,504,392,513,387,524,383,532,367,540,361,555,356,562,337,563,331,546,333,536,333,526,320,523,306,514,314,494,336,481,356,480,381,480,401,480,419,474,433,464" shape="poly" />
        <area onClick={() => selectArea(2)} style={{ cursor: "pointer" }} target="" alt="Kolonia 2" title="Kolonia 2" coords="157,388,169,390,171,398,171,406,183,404,194,392,189,378,198,366,217,360,221,367,239,368,251,355,267,342,271,322,233,326,203,322,247,302,247,290,203,304,209,288,147,306,110,321,86,339,59,374,65,392,70,406,63,430,104,418" shape="poly" />
        <area onClick={() => selectArea(3)} style={{ cursor: "pointer" }} target="" alt="Kolonia 3" title="Kolonia 3" coords="342,206,341,215,322,216,291,221,285,229,260,234,241,242,204,248,181,242,171,229,181,212,211,197,270,178,315,174,317,185,341,177,357,184,360,191,350,202,348,206" shape="poly" />
        <area onClick={() => selectArea(4)} style={{ cursor: "pointer" }} target="" alt="Kolonia 4" title="Kolonia 4" coords="171,122,113,146,89,148,68,161,5,191,36,162,99,128,153,114,178,112" shape="poly" />
        <area onClick={() => selectArea(5)} style={{ cursor: "pointer" }} target="" alt="Kolonia 5" title="Kolonia 5" coords="331,104,263,116,245,111,272,94,329,80,391,70,418,77,408,92,385,107,345,108" shape="poly" />
        <area onClick={() => selectArea(6)} style={{ cursor: "pointer" }} target="" alt="Kontynent 1" title="Kontynent 1" coords="606,573,1017,571,1017,335,993,369,955,369,891,344,854,313,888,294,855,267,810,275,742,256,684,244,630,248,606,267,548,278,557,259,504,277,494,260,450,279,445,303,503,325,549,355,534,380,551,382,559,374,582,393,625,436,643,471,635,528" shape="poly" />
        <area onClick={() => selectArea(7)} style={{ cursor: "pointer" }} target="" alt="Kontynent 2" title="Kontynent 2" coords="481,245,509,231,543,227,551,232,572,233,601,222,645,216,675,215,694,225,743,224,782,234,819,234,847,246,852,262,895,294,935,325,986,320,1004,335,1019,324,1016,92,949,66,886,47,833,31,765,16,701,4,595,2,570,12,528,22,471,34,507,39,547,52,499,67,489,82,459,72,429,85,459,102,410,134,412,150,452,144,441,158,450,164,468,164,507,164,521,173,503,200,483,208,454,212,459,234" shape="poly" />
      </map>
      <Card
        title={areas[selectedArea].name}
        text={areas[selectedArea].text}
        onClick={() => selectArea(0)}
      />
    </div>
  )
}

export default Colonisation
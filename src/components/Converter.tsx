import { InputNumber } from 'primereact/inputnumber';
import { useEffect, useState } from 'react';
import { ToggleButton } from 'primereact/togglebutton';
import { FloatLabel } from 'primereact/floatlabel';
import './Cobnverter.css';
import { Fieldset } from 'primereact/fieldset';
import Spaceships from './ui/Spaceships';


const Converter = () => {
  const [a1, setA1] = useState<number>(0);
  const [v1, setV1] = useState<number>(0);
  const [isStraight1, setIsStraight1] = useState<boolean>(true);
  const [a2, setA2] = useState<number>(0);
  const [v2, setV2] = useState<number>(0);
  const [isStraight2, setIsStraight2] = useState<boolean>(true);
  const [t, setT] = useState<number>(0);

  const [s1, setS1] = useState<number>(0);
  const [s2, setS2] = useState<number>(0);

  const calcS1 = () => {
    if (isStraight1) {
      const newS1 = v1 * t;
      setS1(newS1);
    } else {
      const newS1 = (a1 * Math.pow(t, 2)) / 2;
      setS1(newS1);
    }
  }

  const calcS2 = () => {
    if (isStraight2) {
      const newS2 = v2 * t;
      setS2(newS2);
    } else {
      const newS2 = (a2 * Math.pow(t, 2)) / 2;
      setS2(newS2);
    }
  }

  useEffect(() => {
    calcS1();
  }, [a1, v1, isStraight1, t])

  useEffect(() => {
    calcS2();
  }, [a2, v2, isStraight2, t])

  return (
    <div className='converter-wrapper1'>
      <FloatLabel>
        <InputNumber locale='pl-PL' value={t} onValueChange={(e) => setT(e.value)} />
        <label htmlFor="number-input">Czas [s]</label>
      </FloatLabel>
      <div className='converter-wrapper2'>
        <div className='converter-block'>
          <ToggleButton
            onLabel="Ruch jednostajny"
            offLabel="Ruch jednostajnie przyśpieszony"
            onIcon="pi pi-check"
            offIcon="pi pi-times"
            checked={isStraight1}
            onChange={(e) => setIsStraight1(e.value)}
          />
          <FloatLabel>
            <InputNumber variant={!isStraight1 ? 'filled' : 'outlined'} locale='pl-PL' disabled={!isStraight1} value={v1} onValueChange={(e) => setV1(e.value)} />
            <label htmlFor="number-input">Prędkość statku 1 [m/s]</label>
          </FloatLabel>
          <FloatLabel>
            <InputNumber variant={isStraight1 ? 'filled' : 'outlined'} locale='pl-PL' disabled={isStraight1} value={a1} onValueChange={(e) => setA1(e.value)} />
            <label htmlFor="number-input">Przyśpieszenie statku 1 [m/s^2]</label>
          </FloatLabel>
          <Fieldset legend={`Statek 1 przeleciał: ${s1}m`} />
        </div>
        <div className='converter-block'>
          <ToggleButton
            onLabel="Ruch jednostajny"
            offLabel="Ruch jednostajnie przyśpieszony"
            color='red'
            checked={isStraight2}
            onChange={(e) => setIsStraight2(e.value)}
          />
          <FloatLabel>
            <InputNumber variant={!isStraight2 ? 'filled' : 'outlined'} locale='pl-PL' disabled={!isStraight2} value={v2} onValueChange={(e) => setV2(e.value)} />
            <label htmlFor="number-input">Prędkość statku 1 [m/s]</label>
          </FloatLabel>
          <FloatLabel>
            <InputNumber variant={isStraight2 ? 'filled' : 'outlined'} locale='pl-PL' disabled={isStraight2} value={a2} onValueChange={(e) => setA2(e.value)} />
            <label htmlFor="number-input">Przyśpieszenie statku 1 [m/s^2]</label>
          </FloatLabel>
          <Fieldset legend={`Statek 2 przeleciał: ${s2}m`} />
        </div>
      </div>
      <Spaceships s1={s1} s2={s2} />
    </div>
  )
}

export default Converter
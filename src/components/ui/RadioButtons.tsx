import { useState } from 'react';
import './RadioButton.css';

interface RadioButtonsProps {
  onChange: (value: string) => void;
}

const RadioButtons = ({onChange} : RadioButtonsProps) => {

  const [option, setOption] = useState(1);

  const handleClick = (value) => {
    setOption(value);
    if (value === 1) {
      onChange('kobieta')
    }
    if (value === 2) {
      onChange('mężczyzna')
    }
    if (value === 3) {
      onChange('helikopter szturmowy')
    }
  }

  return (
    <div>
      <div className="mydict">
        <div>
          <label>
            <input type="radio" name="radio" checked={option === 1} onClick={() => {handleClick(1)}}/>
            <span>Kobieta</span>
          </label>
          <label>
            <input type="radio" name="radio" checked={option === 2} onClick={() => {handleClick(2)}}/>
            <span>Mężczyzna</span>
          </label>
          <label>
            <input type="radio" name="radio" checked={option === 3} onClick={() => {handleClick(3)}}/>
            <span>Helikopter szturmowy</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default RadioButtons

import { useState } from 'react';
import './Form.css';
import RadioButtons from './ui/RadioButtons';

const Form = () => {

  const [name, setName] = useState<string>("???");
  const [email, setEmail] = useState<string>("???");
  const [age, setAge] = useState<number>(0);
  const [motivation, setMotivation] = useState<string>("???");
  const [sex, setSex] = useState<string>("kobieta");
  const [cosmos, setCosmos] = useState<boolean>(false);
  const [willingness, setWillingness] = useState<number>(5);

  const submit = (e) => {
    e.preventDefault();
    const text1 = "Gdybyśmy mieli serwer mailowy to teraz by został wysłany tutaj email z danymi takimi jak twoje imię: "
    + name + " i wiek: " + age + ". Twoja płeć to " + sex;
    const text2 = cosmos ? " i wiemy że kosmos już jest przez ciebie odwiedzony." : " i wiemy że kosmos nie był przez ciebie odwiedzony."
    alert(text1 + text2)
    console.log(email, motivation, willingness);
  }

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Imię</label>
            <input type="text" id="name" name="name" required={true} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required={false} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="age">Twój wiek</label>
            <input type="number" min={1} id="age" name="age" required={true} onChange={(e) => setAge(Number(e.target.value))}/>
          </div>
          <div className="form-group">
            <label htmlFor="textarea">List motywacyjny</label>
            <textarea name="textarea" id="textarea" rows={10} cols={50} required={false} onChange={(e) => setMotivation(e.target.value)}> </textarea>
          </div>
          <div className="form-group">
            <label>Płeć</label>
            <RadioButtons onChange={(value) => setSex(value)}/>
          </div>
          <div className="form-group">
            <label>Jak bardzo chcesz polecieć w kosmos?</label>
            <div
              style={{ background: "white" }}
            >
              <input
                type="range"
                className="h-[16px] w-full cursor-pointer border-transparent dark:bg-white-600"
                defaultValue={5}
                min="0"
                max="10"
                step="1"
                onChange={(e) => setWillingness(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Czy byłeś już w kosmosie?</label>
            <div className="mb-[0.125rem] block min-h-[5rem] ps-[5rem]">
              <input
                className="relative float-left -ms-[5rem] me-[6px] mt-[0.15rem] h-[5rem] w-[5rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[5rem] before:w-[5rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none  focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                style={{
                  width: "2rem",
                  height: "2rem",
                }}
                onClick={() => setCosmos((old) => !old)}
                type="checkbox"
                value=""
                id="checkboxDefault"
              />
            </div>
          </div>
          <button
            className="form-submit-btn"
            type="submit"
            onClick={submit}
          >
            Wyślij swoją aplikację do PSA (Polish Space Agency)
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
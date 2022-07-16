import { useState} from "react";
const Footer = ({getItems}) => {
    const [input, setInput] = useState('');
   
   async function onChange(event) {
        const value = await event.target.value;
        setInput(value)
    }


   async function onSubmit(e) {
        console.log(input)
        e.preventDefault()
        const obj = await {
            nameItem: input,
            priority: false,
            finsh: false
        }
      const parse = await JSON.stringify(obj)
      await  fetch('http://localhost:5000/add', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
              },
            body: parse
        },)
        .then(() => getItems())
        .catch(err => console.log(err))
        .finally(setInput(''))
   
    }



    return(
        <div className="footer uk-background-primary uk-light uk-padding uk-panel">
            <form onSubmit={onSubmit}>
                <label htmlFor="name" className="label">
                    <div className="uk-margin">
                        <input className="uk-input" type="text" name="nameItem" placeholder="Видіть імя" value={input} onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn uk-button uk-button-default">Добавити</button>
                </label>

            </form>
    </div>
    )
}

 export default Footer
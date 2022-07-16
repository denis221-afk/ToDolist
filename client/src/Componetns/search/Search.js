import { useState } from "react"
const Search = (porps) => {  
    const [input, setInput] = useState('')

    function onSearchs(event) {
        const value = event.target.value
        setInput(value)
        console.log(value)
        porps.onSearch(value)
    } 
    return(
        <div className="search uk-background-primary uk-light uk-padding uk-panel">
            <div className="uk-margin">
                <input className="uk-input" type="text" placeholder="Пошук" name="seacrh" value={input} onChange={onSearchs} />
            </div>
        </div>
    )
}

export default Search
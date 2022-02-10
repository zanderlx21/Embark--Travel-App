import { useState, FormEvent } from 'react' 

interface Prop {
    onSubmit: (searchTerm: string) => void;
}

function ExtraForm({onSubmit}: Prop) {
    const [searchTerm, setSearchTerm] = useState<string>("");
  
    function onFormSubmit (e: FormEvent) {
      e.preventDefault();
      console.log(searchTerm);
      onSubmit(searchTerm);
    }

    return (
            <div className="Extra-Form-Container">
            <div className="Extra-Form-Div">
            <h1>Looking for more?</h1>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="activity" id="Extra-Search-Bar" placeholder="Ex: Yoga, Market, Grocery, Spa" onChange={(e) => setSearchTerm(e.target.value)} ></input>
                    <button type="submit" id="Extra-Search-Button">Search</button>
                </form>
            </div>
        </div>
    )
}

export default ExtraForm;
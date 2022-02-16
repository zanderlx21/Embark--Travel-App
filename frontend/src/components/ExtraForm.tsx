import { useState, FormEvent, useEffect } from 'react' 
import { fetchCategory } from '../services/YelpAPIService';
import { Business } from '../models/YelpModel';

interface Prop {
    onSubmit: (searchCity:string, searchCategory:string) => void;
    topSearch: string;
}

function ExtraForm({onSubmit, topSearch}:Prop) {

    const [searchCity, setSearchCity] = useState<string>("");
    const [searchCategory, setSearchCategory] = useState<string>("");
    
    function onFormSubmit (e: FormEvent) {

        e.preventDefault();
        onSubmit(searchCity, searchCategory)
        console.log(searchCity)
        console.log(searchCategory);
    }

    return (
            <div className="Extra-Form-Container">
            <div className="Extra-Form-Div">
            <h1>Looking for more?</h1>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="city" id="Extra-Search-Bar" placeholder="City Name" 
                    onChange={(e) => setSearchCity(e.target.value)} 
                    ></input>
                    <br />
                    <input type="text" name="activity" id="Extra-Search-Bar" placeholder="Ex: Yoga, Market, Grocery, Spa" 
                    onChange={(e) => setSearchCategory(e.target.value)} 
                    ></input>
                    <button type="submit" id="Extra-Search-Button">Search</button>
                </form>
            </div>
        </div>
    )
}

export default ExtraForm;
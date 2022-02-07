import { useState, useEffect, FormEvent } from 'react'
import { Business } from '../models/YelpModel';
        
interface Prop {
    onSubmit: (searchTerm: string) => void;
}
        
function SearchForm({onSubmit}: Prop) {
    const[ businessList, setBusinessList ] = useState<Business[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("");
  
      function onFormSubmit (e: FormEvent) {
        e.preventDefault();
        console.log(searchTerm);
        onSubmit(searchTerm);
    }

    return (
        <div className="Form-Container">
            <video></video>
            <div className="Form-Div">
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="location" id="Search-Bar" placeholder="Where do you want to go?" onChange={(e) => setSearchTerm(e.target.value)} ></input>
                    <button type="submit" id="Search-Button">Search</button>
            </form>
            </div>
        </div>
    )
}

export default SearchForm

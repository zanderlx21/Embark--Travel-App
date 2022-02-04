import { useState, useEffect } from 'react'
import { Business } from '../models/YelpModel';
import { fetchBusinesses } from '../services/YelpAPIService';
        
interface Prop {
    onSubmit: (searchTerm: string) => void;
}
        
function SearchForm() {

    const[ businessList, setBusinessList ] = useState<Business[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("");
  
useEffect( () => {
        fetchBusinesses(searchTerm).then((response) => setBusinessList(response));
      }, [searchTerm]);

console.log(fetchBusinesses("Phoenix"));

    return (
        <div className="Form-Container">
            <div className="Form-Div" >
            <form>
                <input type="text" id="Search-Bar" placeholder="Where do you want to go?" onChange={(e) => setSearch(e.target.value) } ></input>
                <button type="submit" id="Search-Button">Search</button>
            </form>
            </div>
            <div className="Local-Options-Container">
                    <div className='Local Food'><img alt="image of food"></img><p>Food</p></div>
                    <div className='Local Stay'><img alt="image of food"></img><p>Hotels</p></div>
                    <div className='Local Recreation'><img alt="image of food"></img><p>Recreation</p></div>
                    <div className='Local Other'><img alt="image of food"></img><p>More!</p></div>
                </div>
        </div>
    )
}

export default SearchForm

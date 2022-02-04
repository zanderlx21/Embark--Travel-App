import { useState, useEffect } from 'react'
import { Business } from '../models/YelpModel';
import { fetchBusinesses } from '../services/YelpAPIService';

function SearchForm() {

    const[ businessList, setBusinessList ] = useState<Business[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("");
  
useEffect( () => {
        fetchBusinesses(searchTerm).then((response) => setBusinessList(response));
      }, [searchTerm]);

console.log(fetchBusinesses("Phoenix"));

      
    return (
        <div>
            
        </div>
    )
}

export default SearchForm

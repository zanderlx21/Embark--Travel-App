import React, {useState, useEffect} from 'react'
import SearchForm from './SearchForm'
import LocalOptions from './LocalOptions'
import { fetchBusinesses } from '../services/YelpAPIService';
import { Business } from '../models/YelpModel';

function Main() {
    const [location, setLocation] = useState("")
    const [searchTerm, setSearchTerm] = useState<string>("");
    const[ businessList, setBusinessList ] = useState<Business[]>([])

    useEffect( () => {
            if(searchTerm)    
            fetchBusinesses(searchTerm).then((response) => setBusinessList(response));
              }, [searchTerm]); 

    const handleSubmitForm = (searchTerm: string) => {
        // console.log(location);
        setSearchTerm(searchTerm)
    }

    return (
        <div>
            <SearchForm onSubmit={handleSubmitForm} /> 
        </div>
    )
}

export default Main

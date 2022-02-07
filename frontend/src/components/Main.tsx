import {useState, useEffect} from 'react'
import SearchForm from './SearchForm'
import LocalOptions from './LocalOptions'
import { fetchBusinesses } from '../services/YelpAPIService';
import { Business } from '../models/YelpModel';
import FoodResultsList from './FoodResultsList';

function Main() {
    const [location, setLocation] = useState("")
    const [searchTerm, setSearchTerm] = useState<string>("");
    const[ businessList, setBusinessList ] = useState<Business[]>([])

    useEffect( () => {
            if(searchTerm)  
            fetchBusinesses(searchTerm).then((response) => setBusinessList(businessList));
              }, [searchTerm]); 
            
    const handleSubmitForm = (searchTerm: string) => {
        setSearchTerm(searchTerm)
    }

    return (
        <div>
            <SearchForm onSubmit={handleSubmitForm} /> 

            <FoodResultsList businesses={businessList} />
        </div>
    )
}

export default Main

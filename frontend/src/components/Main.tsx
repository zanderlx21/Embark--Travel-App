import {useState, useEffect} from 'react'
import SearchForm from './SearchForm'
import LocalOptions from './LocalOptions'
import { fetchBusinesses } from '../services/YelpAPIService';
import { Business } from '../models/YelpModel';

import Header from './Header';
import AboutLocation from './AboutLocation';
import HotelSearchResults from './HotelResultsList';
import FoodResultsList from './FoodResultsList';
import OutdoorResultsList from './OutdoorsResultsList';
// @ts-ignore
import videoBG from './video/video-BG.mp4'
//

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
        <div className="Main">
            <video autoPlay loop muted>
                <source src={videoBG} type="video/mp4" />
            </video>
            <Header />
            <SearchForm onSubmit={handleSubmitForm} /> 
            <AboutLocation />
            <HotelSearchResults />
            <FoodResultsList businesses={businessList} />
            <OutdoorResultsList />
        </div>
    )
}

export default Main

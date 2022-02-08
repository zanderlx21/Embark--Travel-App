import {useState, useEffect} from 'react'
import SearchForm from './SearchForm'
import LocalOptions from './LocalOptions'
import { fetchFood, fetchHotels, fetchIndoor, fetchOutdoor } from '../services/YelpAPIService';
import { Business, YelpModel } from '../models/YelpModel';
import FoodResultsList from './FoodResultsList';
import {HotelResultsList} from "./HotelResultsList"

function Main() {
    // const [location, setLocation] = useState("")
    const [searchTerm, setSearchTerm] = useState<string>("");
    const[ foodList, setFoodList ] = useState<Business[]>([]);
    const[ hotelList, setHotelList ] = useState<Business[]>([]);
    // const[ IndoorList, setIndoorList ] = useState<YelpModel[]>([]);
    // const[ OutdoorList, setOutdoorList ] = useState<YelpModel[]>([]);

    useEffect( () => {
        if(searchTerm)  
        fetchFood(searchTerm).then((data) => setFoodList(data.businesses))
        if(searchTerm) 
        fetchHotels(searchTerm).then((data) => setHotelList(data.businesses))
    }, [searchTerm]);
        // if(searchTerm) 
        // fetchIndoor(searchTerm).then((response) => setIndoorList(response)) 
        // if(searchTerm) 
        // fetchOutdoor(searchTerm).then((response) => setOutdoorList(response)) 
            
    const handleSubmitForm = (searchTerm: string) => {
        setSearchTerm(searchTerm)
    }

    return (
        <div>
            <SearchForm onSubmit={handleSubmitForm} /> 

            <FoodResultsList businesses={foodList} />

            <HotelResultsList businesses={hotelList} />

        </div>
    )
}

export default Main;
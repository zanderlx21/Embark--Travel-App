import {useState, useEffect} from 'react'
import { fetchFood, fetchHotels, fetchIndoor, fetchOutdoor } from '../services/YelpAPIService';
import { Business, YelpModel } from '../models/YelpModel';
import SearchForm from './SearchForm'
import LocalOptions from './LocalOptions'
import Header from './Header';
import AboutLocation from './AboutLocation';
import { HotelResultsList } from './HotelResultsList';
import FoodResultsList from './FoodResultsList';
import OutdoorResultsList from './OutdoorsResultsList';
// @ts-ignore
import videoBG from './video/video-BG.mp4'
//

function Main() {
    // const [location, setLocation] = useState("")
    const [searchTerm, setSearchTerm] = useState<string>("Detroit");
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
        <div className="Main">
            <video autoPlay loop muted>
                <source src={videoBG} type="video/mp4" />
            </video>
            <Header />
            <SearchForm onSubmit={handleSubmitForm} /> 
            <AboutLocation />
            <HotelResultsList businesses={hotelList} />
            {/* <FoodResultsList businesses={foodList} />
            <OutdoorResultsList /> */}
        </div>
    )
}

export default Main;
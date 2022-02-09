import {useState, useEffect} from 'react'
import { fetchFood, fetchHotels, fetchIndoor, fetchOutdoor } from '../services/YelpAPIService';
import { Business } from '../models/YelpModel';
import SearchForm from './SearchForm'
import Header from './Header';
import AboutLocation from './AboutLocation';
import HotelResultsList from './HotelResultsList';
import FoodResultsList from './FoodResultsList';
import OutdoorResultsList from './OutdoorsResultsList';
// @ts-ignore
import videoBG from './video/video-BG.mp4'
//
import IndoorResultsList from './IndoorResultsList';
import { ItineraryList } from './ItineraryList';
import ImageSlider from './ImageSlider';


export interface SearchTermProp {
    searchTerm: string;
}

function Main() {
    // const [location, setLocation] = useState("")
    const [searchTerm, setSearchTerm] = useState<string>("");
    const[ foodList, setFoodList ] = useState<Business[]>([]);
    const[ hotelList, setHotelList ] = useState<Business[]>([]);
    const[ indoorList, setIndoorList ] = useState<Business[]>([]);
    const[ outdoorList, setOutdoorList ] = useState<Business[]>([]);


    useEffect( () => {
        if(searchTerm) 
        fetchHotels(searchTerm).then((data) => setHotelList(data.businesses))
        if(searchTerm)  
        fetchFood(searchTerm).then((data) => setFoodList(data.businesses))
        if(searchTerm) 
        fetchIndoor(searchTerm).then((data) => setIndoorList(data.businesses)) 
        if(searchTerm) 
        fetchOutdoor(searchTerm).then((data) => setOutdoorList(data.businesses)) 
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
            <AboutLocation searchTerm={searchTerm}/>
            <HotelResultsList businesses={hotelList} />
            {/* <FoodResultsList businesses={foodList} />
            <IndoorResultsList businesses={indoorList}/>
            <OutdoorResultsList businesses={outdoorList}/> */}

        </div>
    )
}

export default Main;
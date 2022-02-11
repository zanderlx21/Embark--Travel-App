import {useState, useEffect} from 'react'
import { deleteItineraryItem, fetchFood, fetchHotels, fetchIndoor, fetchItineraryList, 
    fetchOutdoor, postItineraryItem } from '../services/YelpAPIService';
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
import { HotelResultExpanded } from './HotelResultExpanded';
import ExtraForm from './ExtraForm';
import Footer from './Footer';

export interface SearchTermProp {
    searchTerm: string;
}

function Main() {
    // const [location, setLocation] = useState("")
    const [searchTerm, setSearchTerm] = useState<string>("Detroit");
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

    function addToItinerary(business: Business){
        postItineraryItem(business);
        console.log(business);
    }

    return (
        <div className="Main">
            <video autoPlay loop muted>
                <source src={videoBG} type="video/mp4" />
            </video>

            <Header searchTerm={searchTerm}/>
            <SearchForm onSubmit={handleSubmitForm} /> 
            <AboutLocation searchTerm={searchTerm}/>
            <HotelResultsList businesses={hotelList} onAdd={addToItinerary}/>
            <FoodResultsList businesses={foodList} onAdd={addToItinerary} />
            <IndoorResultsList businesses={indoorList} onAdd={addToItinerary}/>
            <OutdoorResultsList businesses={outdoorList} onAdd={addToItinerary}/>
            <ExtraForm onSubmit={handleSubmitForm} />
            <Footer />

        </div>
    )
}

export default Main;
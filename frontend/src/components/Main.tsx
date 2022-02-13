import {useState, useEffect} from 'react'
import { deleteItineraryItem, fetchFood, fetchHotels, fetchIndoor, fetchItineraryList, 
    fetchOutdoor, postItineraryItem, fetchCategory, fetchFitness, fetchRelaxation, fetchAdventure, fetchFamily, fetchNightlife } from '../services/YelpAPIService';
import { Business } from '../models/YelpModel';
import SearchForm from './SearchForm'
import Header from './Header';
import AboutLocation from './AboutLocation';
import HotelResultsList from './HotelResultsList';
import FoodResultsList from './FoodResultsList';
import OutdoorResultsList from './OutdoorsResultsList';
import FitnessResultsList from './FitnessResultsList';
import RelaxationResultsList from './RelaxationResultsList';
import AdventureResultsList from './AdventueResultsList';
import FamilyResultsList from './FamilyResultsList';
import NightLifeResultsList from './NIghtLifeResultsList';
// @ts-ignore
import videoBG from './video/video-BG.mp4'
//
import IndoorResultsList from './IndoorResultsList';
import { ItineraryList } from './ItineraryList';
import { HotelResultExpanded } from './HotelResultExpanded';
import ExtraForm from './ExtraForm';
import Footer from './Footer';
import { ExtraFormResultsList } from './ExtraFormResultsList';

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
    const[ fitnessList, setFitnessList ] = useState<Business[]>([]);
    const[ relaxationList, setRelaxationList ] = useState<Business[]>([]);
    const[ adventureList, setAdventureList ] = useState<Business[]>([]);
    const[ familyList, setFamilyList ] = useState<Business[]>([]);
    const[ nightLifeList, setNightLifeList ] = useState<Business[]>([]);
    const [ itineraryItems, setItineraryItems ] = useState<Business[]>([]);
    const [ hideAddButton, setHideAddButton ] = useState(false)
    const [ searchCategory, setSearchCategory ] = useState<string>("");
    const[ categoryResults, setCategoryResults ] = useState<Business[]>([]);

    useEffect( () => {
        if(searchTerm) 
        fetchHotels(searchTerm).then((data) => setHotelList(data.businesses))
        if(searchTerm)  
        fetchFood(searchTerm).then((data) => setFoodList(data.businesses))
        if(searchTerm) 
        fetchIndoor(searchTerm).then((data) => setIndoorList(data.businesses)) 
        if(searchTerm) 
        fetchOutdoor(searchTerm).then((data) => setOutdoorList(data.businesses))
        if(searchTerm) 
        fetchFitness(searchTerm).then((data) => setFitnessList(data.businesses))
        if(searchTerm) 
        fetchRelaxation(searchTerm).then((data) => setRelaxationList(data.businesses))
        if(searchTerm) 
        fetchAdventure(searchTerm).then((data) => setAdventureList(data.businesses))
        if(searchTerm) 
        fetchFamily(searchTerm).then((data) => setFamilyList(data.businesses))
        if(searchTerm) 
        fetchNightlife(searchTerm).then((data) => setNightLifeList(data.businesses))

    }, [searchTerm]);
            
    const handleSubmitForm = (searchTerm: string) => {
        setSearchTerm(searchTerm)
    }

    // for user category search
    useEffect( () => {
        if(searchCategory) 
        fetchCategory(searchCategory).then((data) => setCategoryResults(data.businesses))
    }, []);

    function addToItinerary(business: Business){

        postItineraryItem(business);
        console.log(business);

        setHideAddButton(true)
        console.log(hideAddButton)
    }

    //Delete Items from Itinerary
    function deleteFromItinerary(business:Business) {
        deleteItineraryItem(business);

        let index = itineraryItems.findIndex(b => b._id === business._id);
            setItineraryItems(prev => [...prev.slice(0, index), ...prev.slice(index+1)])

        setHideAddButton(false)
        console.log(hideAddButton)
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
            <FoodResultsList businesses={foodList} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            <IndoorResultsList businesses={indoorList} onAdd={addToItinerary}/>
            <OutdoorResultsList businesses={outdoorList} onAdd={addToItinerary}/>
            <AdventureResultsList businesses={adventureList} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            <FamilyResultsList businesses={familyList} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            <NightLifeResultsList businesses={nightLifeList} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            <RelaxationResultsList businesses={relaxationList} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            <FitnessResultsList businesses={fitnessList} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            <ExtraForm onSubmit={handleSubmitForm} />
            <ExtraFormResultsList businesses={categoryResults} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            <Footer />

        </div>
    )
}

export default Main;
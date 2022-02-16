import {useState, useEffect, FormEvent} from 'react'
import { fetchFood, fetchHotels, fetchIndoor, fetchOutdoor, fetchCategory, 
    fetchFitness, fetchRelaxation, fetchAdventure, fetchFamily, fetchNightlife } from '../services/YelpAPIService';
import { deleteItineraryItem, postItineraryItem, fetchItineraryList } from '../services/DbService';
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
import NightLifeResultsList from './NightLifeResultsList';
// @ts-ignore
import videoBG1 from './video/AirplaneWing.mp4'
// @ts-ignore
import videoBG2 from './video/BallonsVan.mp4'
// @ts-ignore
import videoBG3 from './video/Balloons.mp4'
// @ts-ignore
import videoBG4 from './video/BeachAriel.mp4'
// @ts-ignore
import videoBG5 from './video/BeachHover.mp4'
// @ts-ignore
import videoBG6 from './video/BeachMountain.mp4'
// @ts-ignore
import videoBG7 from './video/BeachMountain2.mp4'
// @ts-ignore
import videoBG8 from './video/BeachWalk.mp4'
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
    const [searchTerm, setSearchTerm] = useState<string>('Detroit');
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
    const [ refresh, setRefresh ] = useState(false)
    const [ display, setDisplay ] = useState(false)

    useEffect( () => {
        
        fetchHotels(searchTerm).then((data) => setHotelList(data.businesses))
         
        fetchFood(searchTerm).then((data) => setFoodList(data.businesses))
        
        fetchIndoor(searchTerm).then((data) => setIndoorList(data.businesses)) 
        
        fetchOutdoor(searchTerm).then((data) => setOutdoorList(data.businesses))
        
        fetchFitness(searchTerm).then((data) => setFitnessList(data.businesses))
        
        fetchRelaxation(searchTerm).then((data) => setRelaxationList(data.businesses))
        
        fetchAdventure(searchTerm).then((data) => setAdventureList(data.businesses))
        
        fetchFamily(searchTerm).then((data) => setFamilyList(data.businesses))
        
        fetchNightlife(searchTerm).then((data) => setNightLifeList(data.businesses))
    }, [searchTerm]);
            
    const handleSubmitForm = (searchTerm: string) => {
        setSearchTerm(searchTerm)

        // if (display){
        //     setDisplay(true)
        // } else {
        //     setDisplay(false)
        // }
    }

    function addToItinerary(business: Business){

        postItineraryItem(business);
        // console.log(business);

        setRefresh(true)
        // console.log(hideAddButton)

    }

    //Delete Items from Itinerary
    function deleteFromItinerary(business:Business) {
        deleteItineraryItem(business);

        let index = itineraryItems.findIndex(b => b.id === business.id);
            setItineraryItems(prev => [...prev.slice(0, index), ...prev.slice(index+1)])

        setRefresh(false)
        // console.log(hideAddButton)
    }

    /////// USER SEARCH /////////
    const [searchCity, setSearchCity] = useState<string>("");
    const [searchCategory, setSearchCategory] = useState<string>("");
    const[ categoryList, setCategoryList ] = useState<Business[]>([]);

    useEffect(() => {
        if(searchCity && searchCategory) 
        fetchCategory(searchCity,searchCategory).then((data) => setCategoryList(data.businesses))
    }, [searchCity, searchCategory]);

    function onUserSubmit (searchCity:string, searchCategory:string) {
        setSearchCity(searchCity);
        setSearchCategory(searchCategory);

    }

    let videosArray = [
        videoBG1,
        videoBG2,
        videoBG3,
        videoBG4,
        videoBG5,
        videoBG6,
        videoBG7,
        videoBG8,
    ]

    let index = Math.floor(Math.random() * videosArray.length)
    let chosenVideo = videosArray[index]
    return (
        <div className="Main">
            <video autoPlay loop muted>
                <source src={chosenVideo} type="video/mp4" />
            </video> 

            <Header refresh={refresh}/>

            <SearchForm onSubmit={handleSubmitForm} /> 
            <AboutLocation searchTerm={searchTerm}/>
            <HotelResultsList businesses={hotelList} onAdd={addToItinerary} onDelete={deleteFromItinerary}/>
            <FoodResultsList businesses={foodList} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            <IndoorResultsList businesses={indoorList} onAdd={addToItinerary} onDelete={deleteFromItinerary}/>
            <OutdoorResultsList businesses={outdoorList} onAdd={addToItinerary} onDelete={deleteFromItinerary}/>
            <AdventureResultsList businesses={adventureList} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            <FamilyResultsList businesses={familyList} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            <NightLifeResultsList businesses={nightLifeList} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            <RelaxationResultsList businesses={relaxationList} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            <FitnessResultsList businesses={fitnessList} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            
            <ExtraForm onSubmit={onUserSubmit} topSearch={searchTerm}/>
            <ExtraFormResultsList businesses={categoryList} onAdd={addToItinerary} onDelete={deleteFromItinerary} />
            <Footer />

        </div>
    )
}

export default Main;
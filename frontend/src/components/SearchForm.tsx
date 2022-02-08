import { useState, FormEvent } from 'react'
import { Business } from '../models/YelpModel';
// import BGvid from './video/Pexels Videos 2360537.mp4'
import paradiseBG from './video/paradiseBG.jpg'
        
interface Prop {
    onSubmit: (searchTerm: string) => void;
}
        
function SearchForm({onSubmit}: Prop) {
    const[ businessList, setBusinessList ] = useState<Business[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("");
  
      function onFormSubmit (e: FormEvent) {
        e.preventDefault();
        console.log(searchTerm);
        onSubmit(searchTerm);
    }

    return (
        <div className="Form-Container">
            <div className="Form-Div">
            <h1>Start your next Adventure</h1>
                <form onSubmit={onFormSubmit}>
               
                    <input type="text" name="location" id="Search-Bar" placeholder="Where do you want to go?" onChange={(e) => setSearchTerm(e.target.value)} ></input>
                    <button type="submit" id="Search-Button">Search</button>
            </form>
            </div>
        </div>
    )
}

export default SearchForm

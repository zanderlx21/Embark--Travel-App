import React, {useState, useEffect} from 'react'
import SearchForm from './SearchForm'
import LocalOptions from './LocalOptions'

function Main() {
    const [location, setLocation] = useState("")
    const [search, setSearch] = useState<string>("")

    // useEffect(() => {
    //     fetchAllData(search).then(data => setRecipes(data));
    // },[search])

    const handleSubmitForm = (searchTerm: string) => {
        console.log(location);
        setSearch(searchTerm)
    }

    return (
        <div>
            <SearchForm onSubmit={handleSubmitForm}/>

        </div>
    )
}

export default Main

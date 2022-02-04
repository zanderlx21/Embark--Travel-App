import React, {useState, useEffect} from 'react'
import SearchForm from './SearchForm'
import LocalOptions from './LocalOptions'

function Main() {
    const [location, setLocation] = useState("")
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSubmitForm = (searchTerm: string) => {
        // console.log(location);
        setSearchTerm(searchTerm)
    }

    return (
        <div>
            <SearchForm onSubmit={handleSubmitForm} /> 
        </div>
    )
}

export default Main

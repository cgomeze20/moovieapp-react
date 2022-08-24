import React from 'react'
import styles from './Search.module.css'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router'
import { useQuery } from '../hooks/useQuery'

export function Search() {
    const query = useQuery()
    const search = query.get('search')




    const [searchText, setSearchText] = useState("");
    const history = useHistory();

    
    useEffect(() => {
        setSearchText(search || '')
    }, [search]);

    const handleSubmit = (e) =>{
        e.preventDefault()
        history.push('/?search=' + searchText)
    }

    return (
        <div>
            <form 
                className={styles.formulario} 
                onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='Search' 
                value={searchText} 
                onChange={(e)=> setSearchText(e.target.value)} />
                {/* <button type="submit">&#x1F50E;</button> */}
            </form>

        </div>
    )
}

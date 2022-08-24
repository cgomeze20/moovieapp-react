import React from 'react'
import {MoviesGrid} from '../components/MoviesGrid'
import { Search } from '../components/Search'
import { useQuery } from '../hooks/useQuery';


export function LandingPage(){
    const query = useQuery();
    const search = query.get("search");
    return <>
        <Search/>
        <MoviesGrid key={search}/>
    </>
}
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { SearchContext } from "../../context/SearchContext/SearchContext";
import requests from "../../data/requests"


export const getMovieByName = ()=>{

    const {getRequests, searchInput, setGetRequests} = useContext(SearchContext);

    useEffect(()=>{

        const getData = async ()=>{
        
            try{
                const resp1 = await axios.get(requests.requestUpcoming);
                const resp2 = await axios.get(requests.requestPopular);
                const resp3 = await axios.get(requests.requestTopRated);
                const resp4 = await axios.get(requests.requestTrending);
                const resp5 = await axios.get(requests.requestHorror);
                
                const allResults = await resp1.data.results.concat(resp2.data.results, 
                resp3.data.results, resp4.data.results, resp5.data.results);             
                setGetRequests(allResults);
            }
            catch(err){
                console.error(err)
            }
    
        }

        getData();
    },[])
    
    const movies = getRequests && getRequests.filter((movies)=> movies.title.toLowerCase().includes(searchInput.trim().toLowerCase()));

    return {movies, getRequests, searchInput};
    
}
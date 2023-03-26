import axios from "axios";
import {useEffect, useState } from "react";

import requests from "../../data/requests";

export const getMovieByTitle = (idTitle)=>{

    const [movie, setMovie] = useState([]);

    useEffect(()=>{

        const getData = async ()=>{
        
            try{
                const resp1 = await axios.get(requests.requestUpcoming);
                const resp2 = await axios.get(requests.requestPopular);
                const resp3 = await axios.get(requests.requestTopRated);
                const resp4 = await axios.get(requests.requestTrending);
                const resp5 = await axios.get(requests.requestHorror);
                
                const allResults = resp1.data.results.concat(resp2.data.results, 
                resp3.data.results, resp4.data.results, resp5.data.results);             
                setMovie(allResults);
            }
            catch(err){
                console.error(err)
            }
    
        }

        getData();
    },[])
    
    return movie.find(movie => movie.title === idTitle);
    
}
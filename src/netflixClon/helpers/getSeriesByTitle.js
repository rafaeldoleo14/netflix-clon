import axios from "axios";
import {useEffect, useState } from "react";
import seriesRequests from "../../data/seriesRequests";

export const getSeriesByTitle = (idTitle)=>{

    const [serie, setSerie] = useState([]);

    useEffect(()=>{

        const getData = async ()=>{
        
            try{
                

                const resp1 = await axios.get(seriesRequests.requestUpcoming);
                const resp2 = await axios.get(seriesRequests.requestPopular);
                const resp3 = await axios.get(seriesRequests.requestTopRated);
                const resp4 = await axios.get(seriesRequests.requestTrending);
                const resp5 = await axios.get(seriesRequests.requestHorror);
                
                const allResults = resp1.data.results.concat(resp2.data.results, 
                resp3.data.results, resp4.data.results, resp5.data.results);       
                
                setSerie(allResults);
            }
            catch(err){
                console.error(err)
            }
    
        }

        getData();
    },[])
    
    console.log(serie)
    return serie.find(serie => serie.name === idTitle);
    
}
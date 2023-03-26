
import React from 'react'
import { Main } from '../../netflixClon/components/Main/Main'
import { Rows } from '../../netflixClon/components/Rows/Rows';
import seriesRequests from '../../data/seriesRequests';

export const SeriesPage = () => {

  return (
    <>
    
        <Main requests={seriesRequests}/>

        <Rows id='1' title='UpComing' request={seriesRequests.requestUpcoming}/>
        <Rows id='2'  title='Popular' request={seriesRequests.requestPopular}/>
        <Rows id='3'  title='Trending' request={seriesRequests.requestTrending}/>
        <Rows id='4'  title='Top Rated' request={seriesRequests.requestTopRated}/>
        <Rows id='5'  title='Horror' request={seriesRequests.requestHorror}/>
    
    </>
  )
}

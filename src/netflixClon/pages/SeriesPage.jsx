
import React from 'react'
import { Main } from '../../netflixClon/components/Main/Main'
import seriesRequests from '../../data/seriesRequests';
import { ModalSeries } from '../components/ModalSeries/ModalSeries';
import { RowsSeries } from '../components/RowsSeries/RowsSeries';

export const SeriesPage = () => {

  return (
    <>
    
        <Main requests={seriesRequests}/>

        <ModalSeries/>

        <RowsSeries id='1' title='UpComing' request={seriesRequests.requestUpcoming}/>
        <RowsSeries id='2'  title='Popular' request={seriesRequests.requestPopular}/>
        <RowsSeries id='3'  title='Trending' request={seriesRequests.requestTrending}/>
        <RowsSeries id='4'  title='Top Rated' request={seriesRequests.requestTopRated}/>
        <RowsSeries id='5'  title='Horror' request={seriesRequests.requestHorror}/>
    
    </>
  )
}

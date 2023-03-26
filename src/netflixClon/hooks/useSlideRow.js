
import React from 'react'

export const useSlideRow = (id) => {
  
    const slideLeft = ()=>{
        const slider = document.querySelector('#slider' + id);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    
       const slideRigth = ()=>{
        const slider = document.querySelector('#slider' + id);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return {
        slideLeft, slideRigth
    }

}

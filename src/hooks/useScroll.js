
import React, { useState } from 'react'

export const useScroll = () => {

    const [isFixed, setIsFixed] = useState(false);

    window.onscroll = () => {
        if (window.scrollY > 0) {
            setIsFixed(true)
        } else {
            setIsFixed(false)
        }
    };

    
    return {
        isFixed
    }

}

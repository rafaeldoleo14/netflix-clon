
import React, { useState } from 'react'

export const useHidden = () => {

    const [hidden, setHidden] = useState(false);
    const [hiddenPanel, setHiddenPanel] = useState(false);

    const onHidden = ()=>{
        setHidden(hidden => !hidden);
    } 
    
    const onHiddenPanel = ()=>{
        setHiddenPanel(hiddenPanel => !hiddenPanel);
    }
    
    return {
        hidden,
        onHidden,
        hiddenPanel,
        onHiddenPanel
    }

}

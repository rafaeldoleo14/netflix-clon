import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"


export const useHiddenModal = (idTitle) => {

    const [hiddenModal, setHiddenModal] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{

        if(!idTitle) return setHiddenModal(true);

        setHiddenModal(false);

        document.body.classList.add('modal-open');

        return () => {
          // Remover clase del body cuando se cierra el modal
            document.body.classList.remove('modal-open');
        };

    },[idTitle])

    const onHiddenModal = ()=>{
        navigate(-1)
        setHiddenModal(hiddenModal => !hiddenModal)
    }

    return{
        hiddenModal,
        onHiddenModal
    }
    
}

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { checking, login, logout } from "../store/slices/authSlice";

export const useCheckAuth = () => {
  
    const {status} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(()=>{

        onAuthStateChanged(FirebaseAuth, async (user)=>{
        
        if(!user) return dispatch(logout());

        dispatch(checking());

        const {uid, email, displayName} = user;

        const photoURL = 'https://occ-0-2153-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'

        dispatch(login({uid, email, displayName, photoURL}))

        })

    },[])

    return {
        status
    }

}

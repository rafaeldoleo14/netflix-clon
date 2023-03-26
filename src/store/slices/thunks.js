import { loginWithEmailAndPassword, logoutFirebase, registerUser } from "../../firebase/providers";
import { checking, login, logout } from "./authSlice"

export const startRegister = ({email, displayName, password})=>{

    return async (dispatch)=>{

        dispatch(checking());

        const {ok, uid, photoURL, errorMessage} = await registerUser({email, displayName, password})

        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, email, displayName, photoURL}))

    }

}

export const startLogin = ({email, password})=>{

    return async (dispatch)=>{

        const {ok, uid, displayName, photoURL, errorMessage} = await loginWithEmailAndPassword({email, password})

        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, email, displayName, photoURL}))

    }

}

export const startLogout = ()=>{

    return async (dispatch)=>{

        await logoutFirebase();

        dispatch(logout())

    }

}
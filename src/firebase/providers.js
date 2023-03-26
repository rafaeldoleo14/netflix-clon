import { async } from "@firebase/util"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { FirebaseAuth } from "./config"

export const registerUser = async ({email, displayName, password})=>{

    try{

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        
        const photoURL = 'https://occ-0-2153-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'
        const {uid} = resp.user;

        await updateProfile(FirebaseAuth.currentUser, {displayName});

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    }
    catch(error){

        return {
            ok: false,
            errorMessage: error.message
        }

    }

}

export const loginWithEmailAndPassword = async ({email, password})=>{

    try{

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, displayName} = await resp.user;
        const photoURL = 'https://occ-0-2153-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'

        return {
            ok: true,
            uid, photoURL, displayName
        }

    }
    catch(error){

        console.log(error.message)

        return {
            ok: false,
            errorMessage: error.message
        }

    }

}


export const logoutFirebase = async()=>{

    return await FirebaseAuth.signOut();

}
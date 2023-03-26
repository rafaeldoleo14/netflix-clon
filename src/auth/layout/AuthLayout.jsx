
import React from 'react';
import { useLocation } from 'react-router-dom';
import './AuthLayout.css'

export const AuthLayout = ({children}) => {

    const location = useLocation();

  return (
    <>
    
        <div className='bg-white w-full h-[100vh]'>

            <img className='w-full h-full absolute object-cover auth-img' src="https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/c0a2e42b-0140-4f9a-921d-5dda0e7e0578/DO-en-20230206-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />

            <div className='absolute p-5 z-10'>
                <h1 className='text-red-600 text-5xl md:text-4xl cursor-pointer font-bold'>NETFLIX</h1> 
            </div>

            <div className='container-gradient'>

                <div className='form-container animate__animated animate__fadeInDown' 
                style={{height: `${location.pathname == '/auth/register' ? '600px' : '500px'}`}}>

                    
                    {children}


                </div>

            </div>


            </div>

    
    
    </>
  )
}


import React from 'react'
import { useLocation, NavLink } from 'react-router-dom';
import { SearchBar } from '../../netflixClon/components/SearchBar/SearchBar'
import {AiOutlineMenu, AiOutlineClose,} from 'react-icons/ai';
import {IoMdArrowDropdown} from 'react-icons/io'
import './navBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/slices/thunks';
import { useScroll } from '../../hooks/useScroll';
import { useHidden } from '../../hooks/useHidden';

export const NavBar = () => {

  const {hidden, onHidden, hiddenPanel, onHiddenPanel} = useHidden();
  const location = useLocation();
  const dispatch = useDispatch();
  const {displayName, photoURL} = useSelector(state => state.auth);
  const {isFixed} = useScroll();

  const onLogout = ()=>{
    dispatch(startLogout());
  }
  
  return (
    <>

      <nav style={{backgroundColor: `${isFixed ? 'black' : ''}`, position: `${isFixed ? 'fixed' : 'relative'}`}}>

        <div className='text-white nav-container'>

          <a href="/" className='text'>
            <h1 className='text-red-600 text-4xl cursor-pointer font-bold'>NETFLIX</h1> 
          </a>

          <ul className='ul-1 text-white flex justify-center items-center gap-5'>

            <li className=''>
              <NavLink className={`${location.pathname === '/' ? 'text-white' : 'text-gray-400'}`} to={'/'}>
                Peliculas
              </NavLink>
            </li>

            <li className=''>
              <NavLink className={`${location.pathname === '/series' ? 'text-white' : 'text-gray-400'}`} to={'/series'}>
                Series
              </NavLink>
            </li>

            <li className=''>
              <SearchBar/>
            </li>

          </ul>

          <ul className='ul-1 text-white flex justify-center items-center gap-5'>

            <li className='li-panel'>

              <img onClick={onHiddenPanel} src={photoURL} alt="" className='rounded cursor-pointer'/>

              <IoMdArrowDropdown onClick={onHiddenPanel} 
              className='cursor-pointer'  size={25} 
              style={{display: 'inline-block', 
              transform: `${hiddenPanel ? 'rotate(180deg)' : 'rotate(0deg)'}`}}/>


              <div 
                className={`
                panel animate__animated animate__fadeInDown`
              } style={{display: `${hiddenPanel ? 'flex' : 'none'}`, borderRadius: '5px'}}>

                  <p onClick={onLogout} className={`cursor-pointer`}>Cerrar sesion de Netflix</p>

              </div>
              
            </li>
              

          </ul>

        <div className='nav-icon' onClick={onHidden}>

          {
            hidden ? (<AiOutlineClose size={25}/>) : (<AiOutlineMenu size={25}/>)
          }
          
        </div>

        <div>

          <ul className='ul-2' style={{left: `${hidden ? '0' : '-1000px'}`}}>

              <li>
                <h1 className='text-red-600 text-4xl cursor-pointer font-bold text-center'>NETFLIX</h1> 
              </li>

              <div style={{height: '0.4px', backgroundColor: 'white'}}></div>

              <li>
                <NavLink className={`${location.pathname === '/' ? 'text-white' : 'text-gray-400'}`} to={'/'}>
                  Peliculas
                </NavLink>
              </li>

              <li>
                <NavLink className={`${location.pathname === '/series' ? 'text-white' : 'text-gray-400'}`} to={'/series'}>
                  Series
                </NavLink>
              </li>

              <li>
                <p onClick={onLogout} className={`cursor-pointer`}>Cerrar sesion</p>
              </li>

          </ul>
          
        </div>

        </div>
      </nav>
        
    
    </>
  )
}

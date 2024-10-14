import React from 'react'
import '../../assets/styles/navbar.style.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar({selectedPage}) {
    const navigate = useNavigate();
    const renderCssClassForSelected = (pageName)=>{        
        return pageName === selectedPage ? 'selected-li' : 'pageName'
    }
    const handleClickPage = (pathName)=>{
        const path = "/" + pathName;
        navigate(path)
    }
  return (
    <nav className='navbar'>
            <ul>
                <li className={renderCssClassForSelected('home')} onClick={()=>handleClickPage('')}>Home</li>
                <li className={renderCssClassForSelected('categories')} onClick={()=>handleClickPage('categories')}>Categories</li>
                <li className={renderCssClassForSelected('profile')} onClick={()=>handleClickPage('profile')}>Profile</li>
                <li className={renderCssClassForSelected('basket')} onClick={()=>handleClickPage('basket')}>Basket</li>
            </ul>
    </nav>
  )
}

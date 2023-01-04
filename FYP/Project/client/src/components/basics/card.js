import React, {useState,useEffect} from 'react'
import './style.css'
import Menu from './cardApi'
import MenuCard  from './MenuCard' 
//import React, { useEffect } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const [menuData, setMenuData] = useState(Menu);
    const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
			if (!user) {
				localStorage.removeItem(token)
				navigate.replace('/login')
			} else {
				// populateQuote()
			}
		}
	}, [navigate])
    const differentItem = (category) => {
      const updatedList = Menu.filter((currElem) => {
        return currElem.category === category;
      });
      setMenuData(updatedList);
    };
   return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item' onClick={() => differentItem("Crop")}>Crop</button>
        <button className='btn-group__item' onClick={() => differentItem("Seed")}>Seed</button>
        <button className='btn-group__item' onClick={() => setMenuData(Menu)}>Both</button>
      </div>
    </nav>
     <MenuCard menuData= {menuData}/> 
    </>
  )
}

export default Card

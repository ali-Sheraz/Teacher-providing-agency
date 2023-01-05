import React, {useState,useEffect} from 'react'
import './style.css'
import Menu from './cardApi'
import MenuCard  from './MenuCard' 
//import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
const Card = () => {
    const [menuData, setMenuData] = useState([]);
    const [filteredMenu,setfilter]=useState([])
    const navigator = useNavigate();
    const getProducts=async ()=>{
      await Axios.get("http://localhost:1337/allProducts?token="+localStorage.getItem('Token')).then((result)=>{
        console.log(result.data)
        setMenuData(result.data)
        setfilter(result.data)
      }).catch((error)=>{
        alert("User not authenticated")
        navigator('/',{replace:true})
      })
    }
    useEffect(()=>{
      const options = {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/weather?city=chiniot',
        headers: {
          'X-Api-Key': 'aMj50biT0YW29435REpF6A==yCj55GULbgq2Oubl',
        }
      };
      Axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      getProducts()
    },[])
    const differentItem = (category) => {
      const updatedList = menuData.filter((currElem) => {
        console.log(currElem.category)
        return currElem.category ===category
      });
      setfilter(updatedList)
    };
   return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item' onClick={() => differentItem("Crop")}>Crop</button>
        <button className='btn-group__item' onClick={() => differentItem("Seed")}>Seed</button>
        <button className='btn-group__item' onClick={() => setfilter(menuData)}>Both</button>
      </div>
    </nav>
     <MenuCard menuData= {filteredMenu}/> 
    </>
  )
}

export default Card

import React from 'react'
const MenuCard = ({menuData}) => {
  return (
    <>
     <section className="main-card--cointainer">
       {menuData.map((curElem) => {
        console.log(curElem.image)
        return (
          <> 
            <div className="card-container" key={curElem._id}>
                <div className="card">
                   <div className="card-body">
                       <span className="card-number card-circle subtle">{curElem.id}</span>
                       <span className="card-author subtle">{curElem.name} </span>
                       <h2 className= "card-title">{curElem.name} </h2>
                       <span className="card-description subtle">{curElem.description} </span>
                       <div className="card-read">Read</div>
                   </div>
                        <img src={require('../../assets/images/'+curElem.image)}  alt="images" className="card-media" />
                        <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
          </>  

        )
       })}
       </section>
    </>
  )
}

export default MenuCard

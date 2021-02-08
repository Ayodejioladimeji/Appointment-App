import React from 'react'

const Aside = ({text, button, img}) => {
    return (
        <div className="aside">
           <div className="aside-center">
               <div className="aside-right">
                    <img src={img} alt="right-img"/>
               </div>
               
               <div className="aside-left">
                   <div className="text">
                        <h2>{text}</h2>
                        <button className="btn">{button}</button>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Aside

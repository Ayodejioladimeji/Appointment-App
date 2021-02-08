import React from 'react'

const Section = ({text, button, img}) => {
    return (
        <div className="one">
           <div className="one-center">
               <div className="left">
                   <div className="text">
                        <h2>{text}</h2>
                        <button className="btn">{button}</button>
                   </div>
               </div>

               <div className="right">
                    <img src={img} alt="right-img"/>
               </div>
           </div>
        </div>
    )
}

export default Section

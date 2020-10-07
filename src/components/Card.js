import React from 'react';


const Card = (props) => {

    return (
       
            <div className="card-group">
                <div className="card" style={{backgroundColor:'red', color:'white', margin:'15px'}}>
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text"><small className="text-muted">{props.updatedTime}</small></p>
                    </div>
                </div>
            </div>
       
    )
}


export default Card;
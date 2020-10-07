import React from 'react';
import propTypes from 'prop-types';

const Card = (props) => {

    return (
       
            <div className="card-group w-100">
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

Card.propTypes = {
    title: propTypes.string.isRequired
}

Card.defaultProps = {
    title: "deneme"
}


export default Card;
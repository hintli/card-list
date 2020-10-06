import React from 'react';
import ReactDOM from 'react-dom';

const names = ["Joe","Biden","Trump"];



function App() {
    return (
        <div className="container">
            <h1>First Component</h1>
            {names.map(names => (<h1>{names}</h1>))}
            <ul>
                <li>Ahmet</li>
                <li>Veli</li>
                <li>Deniz</li>
            </ul>

            <button type='button' style={
                {backgroundColor:'red', color:'white',borderRadius:'20px',weight:'32px',height:'32px'}}>Name Find</button> 

        </div>
        
        
    )
}




ReactDOM.render(
    <App /> , document.getElementById('root')
);
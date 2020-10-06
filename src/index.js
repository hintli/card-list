import React from 'react';
import ReactDOM from 'react-dom';


function App() {
    const name='Functional Component'
    return <h1>{name}</h1>
}


ReactDOM.render (
    <App /> , document.querySelector('#root') //document.getElementById('root')
);
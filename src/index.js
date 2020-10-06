import React from 'react';
import ReactDOM from 'react-dom';

const names = ["Joe","Barack","Trump"];


function App() {
    return (
        <div>
            {names.map(names =>(<h1>{names}</h1>))}
        <ul>

            <li>
                Ayşe
            </li>
            <li>
                Mehmet
            </li>
            <li>
                Ali
            </li>
        </ul>
        </div>
        
    );
    // const name='Functional Component'
    // return <h1>{name}</h1>
}

// class App extends React.Component {
//     render() {
//         return (
//             <h1>Deneme</h1>
//         )
//     }
// }


ReactDOM.render (
    <App /> , document.getElementById('root')
);
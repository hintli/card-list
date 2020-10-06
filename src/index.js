import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';


class App extends Component {
    render() {
        return (
            <div className="container" style={{display:'flex',marginTop:'10px', justifyContent:'center',alignItems:'center'}}>
                <div className='card-container' >
                    <Card title="Space X" />
                    <Card title="Globalized" />
                    <Card title="Lagari" />
                </div>

            </div>
        )
    }
}



ReactDOM.render(
    <App />, document.getElementById('root')
);
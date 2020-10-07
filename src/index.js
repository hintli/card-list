import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Collapse from './components/Collapse';



class App extends Component {
    render() {
        return (
            <div className="container" style={{display:'flex',marginTop:'10px', justifyContent:'center',alignItems:'center'}}>

                <Collapse href="collapseExample1">
                <Card title="Space X" 
                    description="Bu kard öğrenmek amaçlı yazılmıştır."
                    updatedTime="3 gün önce oluşturuldu"
                    image="https://picsum.photos/id/1/200/300"/>
                </Collapse>

                <Collapse href="collapseExample2">
                <Card title="Space X" 
                    description="Bu kard öğrenmek amaçlı yazılmıştır."
                    updatedTime="3 gün önce oluşturuldu"
                    image="https://picsum.photos/id/1/200/300"/>
                </Collapse>

                <Collapse href="collapseExample3">
                <Card title="Space X" 
                    description="Bu kard öğrenmek amaçlı yazılmıştır."
                    updatedTime="3 gün önce oluşturuldu"
                    image="https://picsum.photos/id/1/200/300"/>
                </Collapse>
                    
                    
                   

            </div>
        )
    }
}



ReactDOM.render(
    <App />, document.getElementById('root')
);
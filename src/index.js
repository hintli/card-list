import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Collapse from './components/Collapse';



class App extends Component {
    render() {
        return (
            <div className="container" >

                <div className="row">
                    <div className="card-group">
                        <div className="col">

                            <Collapse href="collapseExample1">
                                <Card title="Space X"
                                    description="Bu kard öğrenmek amaçlı yazılmıştır."
                                    updatedTime="3 gün önce oluşturuldu"
                                    image="https://picsum.photos/id/1/200/300" />
                            </Collapse>

                            <Collapse href="collapseExample2">
                                <Card title="Space X"
                                    description="Bu kard öğrenmek amaçlı yazılmıştır."
                                    updatedTime="3 gün önce oluşturuldu"
                                    image="https://picsum.photos/id/1/200/300" />
                            </Collapse>

                            <Collapse href="collapseExample3">
                                <Card title="Space X"
                                    description="Bu kard öğrenmek amaçlı yazılmıştır."
                                    updatedTime="3 gün önce oluşturuldu"
                                    image="https://picsum.photos/id/1/200/300" />
                            </Collapse>

                        </div>
                    </div>
                </div>






            </div>
        )
    }
}



ReactDOM.render(
    <App />, document.getElementById('root')
);



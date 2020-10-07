import React from 'react';



class Collapse extends React.Component {
    
    constructor () {
        super();
        
        this.state = {
            showContent: false
        }

        this.showMore = this.showMore.bind(this);

        // this.showMore = ()  => {
        //     this.setState = ({showContent: false})
        //     console.log(this)
        // }
    }

    showMore() {
        this.setState( { showContent: !this.state.showContent } )
    }

    

    render() {
        return (
            <div>
                <p>
                    <button className="btn btn-primary" onClick={this.showMore} >
                        Link with href
                </button>
                </p>
                
                {this.state.showContent ? (
                    <div className="collapse show">
                         {this.props.children}
                   </div>
                ) : null }
                    
                
            </div>
    
        )
    }
    
}



export default Collapse;
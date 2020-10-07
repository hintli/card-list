import React from 'react';



const Collapse = (props) => {
    console.log(props.children);
    return (
        <div>
            <p>
                <a className="btn btn-primary" data-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
            </a>
            </p>
            <div className="collapse" id={props.href}>
                <div className="card card-body">
                    {props.children}
                </div>
            </div>
        </div>

    )
}



export default Collapse;
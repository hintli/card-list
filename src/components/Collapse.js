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
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div>
        </div>

    )
}



export default Collapse;
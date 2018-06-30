import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function BlogJumbotron(props){
    return (
        <div>
            <div className="jumbotron text-white rounded bg-dark my-3 p-3 p-md-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-4 font-weight-normal font-italic">{props.title}</h1>
                        <p className="lead my-3">{props.subHeadline}</p>
                        <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
                    </div>
                </div>
            </div>
        </div>
        );
}

BlogJumbotron.propTypes = {
        title: PropTypes.string,
        subHeadline: PropTypes.string
    };

export default BlogJumbotron;
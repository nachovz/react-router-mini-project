import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function BlogSidebar(props){
    const dates = [];
    props.date.forEach(function(element,index){
        dates.push(<li key={index}><a href="#">{element}</a></li>);
        });
    const socials = [];
    props.social.forEach(function(element,index){
        socials.push(<li key={index}><a href="#">{element}</a></li>);
    });
    return (
        <div>
            <div className="p-3 mb-3 bg-light rounded">
                <h4 className="font-italic">About</h4>
                <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
            <div className="p-3">
                <h4 className="font-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                    {dates}
                </ol>
            </div>
            <div className="p-3">
                <h4 className="font-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                    {socials}
                </ol>
            </div>
        </div>
        );
}

BlogSidebar.propTypes = {
        date: PropTypes.string,
        social: PropTypes.string
    };

export default BlogSidebar;
import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {Consumer} from "../stores/AppContext.jsx";

function BlogSidebar(props){
                    
    return (
        <div>
            <div className="p-3 mb-3 bg-light rounded">
                <h4 className="font-italic">About</h4>
                <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
            <div className="p-3">
                <h4 className="font-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                    <Consumer>
                        {({ state }) =>
                            (
                                state.archive.map( (item,index) => {
                                    return (
                                        <ArchiveItem 
                                            key={index}
                                            date={item.date}
                                            url={item.url}
                                            />
                                    );
                                })
                            )
                        }
                    </Consumer>
                </ol>
            </div>
            <div className="p-3">
                <h4 className="font-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                    <Consumer>
                        {({ state }) =>
                            (
                                state.social_networks.map((item,index)=>{
                                    return (
                                        <SocialMedia
                                            key={index}
                                            name={item.name}
                                            url={item.url}
                                            />
                                    );
                                })
                            )
                        }
                    </Consumer>
                </ol>
            </div>
        </div>
        );
}

export default BlogSidebar;

function ArchiveItem(props){
    return(
        <li>
            <a href={props.url} target="_blank" rel="noopener noreferrer">{props.date}</a>
        </li>
        );
}

ArchiveItem.propTypes = {
    date: PropTypes.string,
    url: PropTypes.string
};

function SocialMedia(props){
    return(
        <li>
            <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
        </li>
        );
}

SocialMedia.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string
};
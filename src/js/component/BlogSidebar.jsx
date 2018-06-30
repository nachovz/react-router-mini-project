import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function BlogSidebar(props){
    
    var archives = [
        {
            date:"March 2018",
            url: "http://picsum.photos/?random"
        },
        {
            date:"February 2018",
            url: "http://picsum.photos/?random"
        },
        {
            date:"January 2018",
            url: "http://picsum.photos/?random"
        },
        {
            date:"December 2017",
            url: "http://picsum.photos/?random"
        },
        {
            date:"November 2017",
            url: "http://picsum.photos/?random"
        },
        {
            date:"October 2017",
            url: "http://picsum.photos/?random"
        },
        {
            date:"September 2017",
            url: "http://picsum.photos/?random"
        },
        {
            date:"August 2017",
            url: "http://picsum.photos/?random"
        },
        {
            date:"July 2017",
            url: "http://picsum.photos/?random"
        },
        {
            date:"June 2017",
            url: "http://picsum.photos/?random"
        },
        {
            date:"May 2017",
            url: "http://picsum.photos/?random"
        },
        {
            date:"April 2017",
            url: "http://picsum.photos/?random"
        }
    ];

    var socials = [
        {
            name:"GitHub",
            url: "https://github.com/4GeeksAcademy"
        },
        {
            name:"Twitter",
            url: "https://twitter.com/4GeeksAcademy"
        },
        {
            name:"Facebook",
            url: "https://www.facebook.com/4geeksacademy/"
        }
    ];             
                    
    return (
        <div>
            <div className="p-3 mb-3 bg-light rounded">
                <h4 className="font-italic">About</h4>
                <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
            <div className="p-3">
                <h4 className="font-italic">Archives</h4>
                <ol className="list-unstyled mb-0">{
                    archives.map((item,index)=>{
                            return <ArchiveItem 
                                    key={index}
                                    date={item.date}
                                    url={item.url}
                                    />;
                    })
                }</ol>
            </div>
            <div className="p-3">
                <h4 className="font-italic">Elsewhere</h4>
                <ol className="list-unstyled">{
                    socials.map((item,index)=>{
                        return <SocialMedia
                                key={index}
                                name={item.name}
                                url={item.url}
                                />;
                    })
                }</ol>
            </div>
        </div>
        );
}

export default BlogSidebar;

function ArchiveItem(props){
    return(
        <li>
            <a href={props.url}>{props.date}</a>
        </li>
        );
}

ArchiveItem.propTypes = {
    date: PropTypes.array,
    url: PropTypes.array
};

function SocialMedia(props){
    return(
        <li>
            <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
        </li>
        );
}

SocialMedia.propTypes = {
    name: PropTypes.array,
    url: PropTypes.array
};
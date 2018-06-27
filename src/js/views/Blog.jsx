import React from 'react';

//create your first component
export class Blog extends React.Component{
    
    render(){
        return (
            <div className="text-center mt-5">
                <h1>Blog</h1>

                <p>Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!</p>
            </div>
        );
    }
}

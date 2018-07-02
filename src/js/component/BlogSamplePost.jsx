import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function BlogSamplePost(index){
    
    var posts = [
        {
            title:"Another blog post",
            date:"December 23, 2018",
            author:"Emily",
            post:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elite. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
            
        },{
            title:"New Feature",
            date:"December 14, 2018",
            author:"Keshaunda",
            post:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."
        },{
            title:"New Beginnings",
            date:"December 20, 2018",
            author:"Nacho",
            post:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."
        }
        ];
    
    return (
        
        <div className="col-md-12 blog-main">
            <h3 className="pb-3 mb-4 font-italic border-bottom"> From the Firehouse</h3>
            
            {
            posts.map((item,index)=>{
                return <BlogPost 
                        key={index}
                        title={item.title}
                        date={item.date}
                        author={item.author}
                        post={item.post}
                        />;
                
            })
            }
        
            <nav className="blog-pagination">
                <a className="btn btn-outline-primary" href="#">Older</a>
                <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
            </nav>

        </div>
        
        
        );
        
}

    BlogPost.propTypes = {
        title:PropTypes.string,
        date:PropTypes.string,
        author:PropTypes.string,
        post:PropTypes.string
        };



export default BlogSamplePost;


 function BlogPost(props){
            return (
                <div className="blogPost">
                    <h2 className="blogTitle">{props.title}</h2>
                    <p className="blogDate">{props.date} by <a href="#">{props.author}</a></p>
                    <p>{props.post}</p>
                </div>
                
                
                
                
                
                );
        }
        
import React, {Component} from 'react';
import MyContactInfo from "../MyContactInfo";
import './PostHeader.css'

function PostHeader(){
    return(
        <div className="sk-post-header">
            <h1 >Create React Apps? Start Easy Then Go Complex.</h1>
            <div>
                <MyContactInfo/>
            </div>
        </div>
    );
}

export default PostHeader;
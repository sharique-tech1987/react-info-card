import React from 'react';
import PostHeader from "./PostHeader";
import PostDetail from "./PostDetail";
import './Card.css'

function MainArea(){
    return(
        <div className="sk-card">
            <p className="sk-pad-content">Create React Apps? Start Easy Then Go Complex.</p>
            <p>&nbsp;</p>
            <PostHeader/>
            <PostDetail/>
        </div>
    );
}

export default MainArea;
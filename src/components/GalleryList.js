import React from 'react';


const GalleryList = (props) => {
    return (
        <li>
            <img src={props.src} alt="" />
        </li>
    );
}

export default GalleryList;
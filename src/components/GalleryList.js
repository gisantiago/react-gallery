import React from 'react';


const GalleryList = (props) => {
    return (
        <li>
            <img url={props.src} alt="" />
        </li>
    );
}

export default GalleryList;
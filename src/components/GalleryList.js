import React from 'react';

// outputs the photos based on the query (tags) passed from the App.js to Gallery.js
const GalleryList = (props) => {
    return (
        <li>
            <img src={props.src} alt="" />
        </li>
    );
}

export default GalleryList;
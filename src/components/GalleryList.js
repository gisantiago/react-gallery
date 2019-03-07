import React from 'react';


const GalleryList = (props) => {
    return (
        <li>
            <img src={props.url} alt="" />
        </li>
    );
}

export default GalleryList;
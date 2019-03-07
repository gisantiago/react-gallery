import React from 'react';
import GalleryList from './GalleryList';

const Gallery = (props) => {
    const results = props.data;
    let items = results.map(item =>

        <GalleryList url={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} key={item.id} />
    );
    
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {items}
            </ul>
        </div>
    );
}

export default Gallery;
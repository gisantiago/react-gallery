import React from 'react';
import Gallery from './Gallery';

const GalleryList = (props) => {
    const results = props.data;
    let items = results.map(item =>

        <Gallery url={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} key={item.id} />
    )
    
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {items}
            </ul>
        </div>
    );
}

export default GalleryList;
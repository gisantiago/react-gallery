import React from 'react';
import GalleryList from './GalleryList';
import '../App';
import NotFound from './NotFound';


const Gallery = (props) => {
    const results = props.data;
    let items;
    if (results && results.length > 0) {
        items = results.map(item => <GalleryList url={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} key={item.id} /> );
    } else {
        items = <NotFound />
    }
 
    
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
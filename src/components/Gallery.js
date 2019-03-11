import React from 'react';
import GalleryList from './GalleryList';
import '../App';
import NotFound from './NotFound';

// The Gallery function takes the data from the App's performSearch function as an argument (props) and maps the url creating an array
const Gallery = (props) => {
    const results = props.data;
    const loading = props.loading;
    
    let items;
    if (results && results.length > 0) {
        items = results.map(item => 
            <GalleryList src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} key={item.id} /> 
        
        );
    } else {
        items = <NotFound />
    }
 
    
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {loading ? <p>Loading...</p> : items }
            </ul>
        </div>
    );
}

export default Gallery;

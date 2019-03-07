import React from 'react';
import GalleryList from './GalleryList';
import '../App';
import NotFound from './NotFound';

const Computers = (props) => {
    const results = props.data;
    let items;
    if (results.length > 0) {
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

export default Computers;
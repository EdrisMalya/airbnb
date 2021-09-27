import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11
    });
    return <ReactMapGL
        mapStyle={'mapbox://styles/edrismalya/cku260n4c65k919nzyxul4iw0'}
        mapboxApiAccessToken={'pk.eyJ1IjoiZWRyaXNtYWx5YSIsImEiOiJja3UyNjFiMnMzcnNjMzJucWdicGxzMnhvIn0.O12KkloATS2jfyvgVAQn-Q'}
        {...viewPort}
        onViewportChange={(nextViewPort)=>setViewPort(nextViewPort)}
    >

    </ReactMapGL>;
};

export default Map;
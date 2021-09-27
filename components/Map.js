import React, {useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

const Map = ({searchResult}) => {

    const coordinates = searchResult.map(item =>({
        longitude: item.long,
        latitude: item.lat
    }));

    const center = getCenter(coordinates);
    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    });
    const [selectedLocation, setSelectedLocation] = useState({});

    return <ReactMapGL
        mapStyle={'mapbox://styles/edrismalya/cku260n4c65k919nzyxul4iw0'}
        mapboxApiAccessToken={'pk.eyJ1IjoiZWRyaXNtYWx5YSIsImEiOiJja3UyNjFiMnMzcnNjMzJucWdicGxzMnhvIn0.O12KkloATS2jfyvgVAQn-Q'}
        {...viewPort}
        onViewportChange={(nextViewPort)=>setViewPort(nextViewPort)}
    >
        {searchResult.map(result=>(
            <div key={result.long}>
                <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <p
                        role={'img'}
                        onClick={()=> setSelectedLocation(result)}
                        className={'cursor-pointer text-2xl animate-bounce'}
                        aria-label={'push-pin'}
                    >
                        🏨
                    </p>
                </Marker>
                {selectedLocation.long===result.long ? (
                    <Popup
                        longitude={result.long}
                        latitude={result.lat}
                        closeOnClick={true}
                        onClose={()=>setSelectedLocation({})}
                    >
                        {result.title}
                    </Popup>
                ):false}
            </div>
        ))}
    </ReactMapGL>;
};

export default Map;
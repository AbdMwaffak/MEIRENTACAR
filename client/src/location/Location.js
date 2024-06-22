import { InfoWindow, Map, Marker } from '@vis.gl/react-google-maps';
import React from 'react';
import './location.css';

const Location = () => {
  // shows marker on London by default
  // const [markerLocation, setMarkerLocation] = useState({
  //   lat: 25.2791061,
  //   lng: 55.3521652,
  // });
  const markerLocation = {
    lat: 25.2791061,
    lng: 55.3521652,
  };

  return (
    <div className='top-map-container'>
      <div className='map-container' id='location'>
        <h2 className='title'>Our Location</h2>
        <h6 className='location-text'>
          Abu Saif business centre 2nd floor , Flat no.202 office number 03
        </h6>
        <Map
          style={{ borderRadius: '20px' }}
          defaultZoom={13}
          defaultCenter={markerLocation}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          backgroundColor={'black'}
        >
          <InfoWindow position={markerLocation}>🏎 WE ARE HERE 🖐</InfoWindow>
          <Marker position={markerLocation} />
        </Map>
      </div>
    </div>
  );
};

export default Location;

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import difabelsData from './difabel-location.json';

function Map() {

    return (
        <div className='container'>
            <MapContainer
                center={[-0.789275, 113.921326]}
                zoom={4}
                scrollWheelZoom={true}
                style={{ width: '50vw', height: '50vh', margin: '10% auto' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {difabelsData.map((difabel) => (
                    <Marker
                        key={difabel.id}
                        position={[difabel.gps.latitude, difabel.gps.longitude]}
                    >
                        <Popup position={[difabel.gps.latitude, difabel.gps.longitude]}>
                            <div>
                                <h4>{`Name: ${difabel.name}`}</h4>
                                <p>{`Type Difabel: ${difabel.type}`}</p>
                                <p>{`Address: ${difabel.address}`}</p>
                            </div>
                        </Popup>

                    </Marker>
                ))}

            </MapContainer>
        </div>
    );
}

export default Map;
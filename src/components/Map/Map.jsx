import { Button } from 'react-bootstrap';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import difabelsData from './difabel-location.json';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Heading = styled.h1`
    color: #01634B;
    text-align: left;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-top: 25%;
`;

function Map(props) {
    console.log(props);
    const widthMap = props.widthMap;
    const heightMap = props.heightMap;

    return (
        <div className='container'>
            <Heading>DIFABEL MAP DISTRIBUTION</Heading>
            <MapContainer
                center={[-0.789275, 113.921326]}
                zoom={4}
                scrollWheelZoom={true}
                style={{ width: widthMap, height: heightMap, margin: '5% auto' }}
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
            <div className='row'>
                <Button
                    style={{ backgroundColor: '#01634B', padding: 20 }}
                    className="w-75 center"
                >
                Add Difabel Location
                </Button>
            </div>
        </div>
    );
}

Map.propTypes = {
    widthMap: PropTypes.string,
    heightMap: PropTypes.string
};

export default Map;
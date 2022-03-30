import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import difabelsData from './difabel-location.json';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Heading = styled.h1`
    color: #01634B;
    text-align: left;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-top: 8%;
`;

const TextPopUp = styled.p`
    display: inline;
`;


function Map(props) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const directLink = () => {
        navigate('/map/add');
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('http://localhost:5000/v1/map/');
                setData(response.data.locations);
                console.log(response.data.locations);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    const widthMap = props.widthMap;
    const heightMap = props.heightMap;

    return (
        <div className='container'>
            <Heading>DIFABEL MAP DISTRIBUTION</Heading>
            {loading && <div>Loading....</div>}
            {!loading && (
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
                    {data.map((difabel) => (
                        <Marker
                            key={difabel.id}
                            position={[difabel.latitude, difabel.longitude]}
                        >
                            <Popup position={[difabel.latitude, difabel.longitude]}>
                                <div>
                                    <h5>{`${difabel.name}`}</h5>
                                    <TextPopUp>{`Type Difabel: ${difabel.type}`}</TextPopUp>
                                    <br></br>
                                    <TextPopUp>{`Address: ${difabel.address}`}</TextPopUp>
                                </div>
                            </Popup>

                        </Marker>
                    ))}

                </MapContainer>
            )}

            <div className='row'>
                <Button
                    style={{ backgroundColor: '#01634B', padding: 20 }}
                    className="w-75 center"
                    onClick={directLink}
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
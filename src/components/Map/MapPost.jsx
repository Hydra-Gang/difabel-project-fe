import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Heading = styled.h1`
    color: #01634B;
    text-align: left;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-top: 5%;
`;

function MapPost() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    function postData(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/v1/map/add', {
            name,
            type,
            address,
            latitude,
            longitude
        }).then((res) => {
            console.log('Sucessfully added');
            setName('');
            setType('');
            setAddress('');
            setLatitude('');
            setLongitude('');
        }).error((err) => {
            console.err(err);
        });

    }

    return (
        <div className='container'>
            <Heading>Add Difabel Location</Heading>
            <a href="https://www.google.com/maps/">Cek your longitude, latitude, address in here!</a>
            <form>
                <label>Name</label> <br/>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input> <br/>
                <label>Type</label> <br/>
                <input type="text" value={type} onChange={(e) => setType(e.target.value)}></input> <br/>
                <label>Address</label> <br/>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input> <br/>
                <label>Latitude</label> <br/>
                <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)}></input> <br/>
                <label>Longitude</label> <br/>
                <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)}></input> <br/>
                <button type="submit" onClick={postData}>Add Map</button>
            </form>
        </div>
    );
}

export default MapPost;
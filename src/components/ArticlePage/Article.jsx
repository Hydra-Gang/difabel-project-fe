import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import '../../index.css';

const ButtonDetails = styled.button`
    background-color: #88D4AB;
    border-radius: 10px;
    border: 0;
    display: inline-block;
    cursor: pointer;
    color: #01634B;
    font-size: 15px;
    text-decoration: none;
    justify-content: start;

    &:hover {
        background-color: white;
        color: #88D4AB;
    }

    &:active {
        position:relative;
        top:1px;
    }
`;

const ButtonApprove = styled.button`
    background-color: #56AB91;
    border-radius: 10px;
    border: 0;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 15px;
    text-decoration: none;
    justify-content: start;

    &:hover {
        background-color: white;
        color: #88D4AB;
    }

    &:active {
        position:relative;
        top:1px;
    }
`;

function Article() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('http://localhost:5000/v1/reports/');
                setData(response.data.reports);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="row p-3">
            <div className="col-2 center-div">
                3/3/2022 00:00
            </div>
            <div className="col-6 center-div">
                How to Master Everything in 1 Year
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col-6 center-div">
                        <ButtonDetails className='w-100 py-2'>See Details</ButtonDetails>
                    </div>
                    <div className="col-6 center-div">
                        <ButtonApprove className='w-100 py-2'>Approve</ButtonApprove>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;
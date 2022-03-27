import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import '../../index.css';


const ButtonLevelAccess = styled.button`
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

    // const [loading, setLoading] = useState(true);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const { data: response } = await axios.get('http://localhost:5000/v1/reports/');
    //             setData(response.data.reports);
    //         } catch (error) {
    //             console.error(error.message);
    //         }
    //         setLoading(false);
    //     };

    //     fetchData();
    // }, []);

    return (
        <div className="row p-3 align-items-center">
            <div className="col-2">
                3/3/2022 00:00
            </div>
            <div className="col-6">
                How to Master Everything in 1 Year
            </div>
            <div className="col-4">
                <div className="row align-items-center">
                    <div className="col-4">
                        <ButtonLevelAccess className='w-100 py-2'>Admin</ButtonLevelAccess>
                    </div>
                    <div className="col-4">
                    </div>
                    <div className="col-4">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;
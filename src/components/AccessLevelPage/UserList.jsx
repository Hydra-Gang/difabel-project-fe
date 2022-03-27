import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';


const ButtonLevelAccess = styled.button`
    background-color: #01634B;
    border-radius: 50px;
    border: 0;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 15px;
    text-decoration: none;
    justify-content: start;

    &:hover {
        background-color: white;
        color: #01634B;
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
            <div className="col-1">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input"/>
                </div>
            </div>
            <div className="col-7">
                How to Master Everything in 1 Year
            </div>
            <div className="col-4">
                <div className="row align-items-center">
                    <div className="col-4">
                        <ButtonLevelAccess className='w-100 py-2'>Admin</ButtonLevelAccess>
                    </div>
                    <div className="col-4 text-center">
                        <FaPencilAlt />
                    </div>
                    <div className="col-4 text-center">
                        <FaTrash />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;
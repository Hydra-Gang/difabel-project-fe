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

const UserName = styled.p`
    color: #4D8E6B;
    font-weight: bold;
    margin-bottom: 0;
`;

const UserId = styled.p`
    color: #4D8E6B;
    margin-bottom: 0;
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
            <div className="col-1 align-items-center">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" style={{ width: '28px', height: '28px' }}/>
                </div>
            </div>
            <div className="col-7">
                <UserName>Fajar Muahammad Hamka</UserName>
                <UserId>ID: 120291308129389</UserId>
            </div>
            <div className="col-4">
                <div className="row align-items-center">
                    <div className="col-6">
                        <ButtonLevelAccess className='w-100 py-2' style={{ fontWeight: 'bold' }}>Admin</ButtonLevelAccess>
                    </div>
                    <div className="col-3 text-center">
                        <FaPencilAlt />
                    </div>
                    <div className="col-3 text-center">
                        <FaTrash />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;
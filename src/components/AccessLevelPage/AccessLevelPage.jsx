import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../../index.css';
import UserList from './UserList';
import { Form, FormControl, Button } from 'react-bootstrap';
import axios from '../../axios-instance';

const Header = styled.div`
    background-color: #56AB91;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const HeaderTable = styled.h1`
    color: #01634B;
    font-size: 22px;
    font-weight: 700;
    margin-top: 23px;
    margin-bottom: 23px;
`;

const AccessLevelPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        const getNewAccessToken = (token) => {
            const refreshToken = JSON.parse(token).refreshToken;

            if (refreshToken) {
                axios.post('/auth/refresh', {}, {
                    headers: {
                        'Authorization': `Bearer ${refreshToken}`
                    }
                }).then((res) => {
                    const newAccessToken = res.data.data.accessToken;

                    const newToken = {
                        accessToken: newAccessToken,
                        refreshToken: refreshToken
                    };

                    localStorage.setItem('difabel', JSON.stringify(newToken));
                }).catch(() => {
                    localStorage.removeItem('difabel');
                    setIsAuthenticated(false);
                });
            } else {
                setIsAuthenticated(false);
            }
        };

        const checkAuthenticated = () => {
            const token = localStorage.getItem('difabel');

            if (token) {
                const accessToken = JSON.parse(token).accessToken;

                if (accessToken) {
                    axios.get('/users', {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    }).then((res) => {
                        const { users } = res.data.data;
                        setUsersData(users);
                    }).catch(() => {
                        getNewAccessToken(token);
                    });
                } else {
                    setIsAuthenticated(false);
                }
            } else {
                setIsAuthenticated(false);
            }
        };

        checkAuthenticated();
    }, []);

    return (
        <div className="container">
            <div className="w-75 mx-auto SearchBar" style={{ float: 'none' }}>
                <h1 className="text-center fw-bold mb-4" style={{ color: '#01634B' }}>ACCESS LIST</h1>
                <Header className="row">
                    <div className="col-7">
                        <HeaderTable className="text-white">Name</HeaderTable>
                    </div>
                    <div className="col-5">
                        <HeaderTable className="text-white">Level Access</HeaderTable>
                    </div>
                </Header>
                <div className="row list">
                    {
                        usersData.map((user, idx) => {
                            return <UserList key={user.id} idx={idx} user={user} usersData={usersData} setUsersData={setUsersData} />;
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AccessLevelPage;
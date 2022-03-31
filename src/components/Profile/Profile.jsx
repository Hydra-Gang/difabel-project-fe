import axios from '../../axios-instance';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Box = styled.div`
    width: 600px;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Heading = styled.h1`
    color: #01634B;
    text-align: left;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-top: 8%;
`;

function Profile() {
    const [user, setUser] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(true);

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
                    axios.get('/users/profile', {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    }).then((res) => {
                        const userData = res.data.data.user;
                        setUser(userData);
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

    function getAccess() {
        const access = user.accessLevel;
        if (access === 0) {
            return 'Admin';
        } else if (access === 1) {
            return 'Editor';
        } else {
            return 'Contributor';
        }
    }

    return (
        <div className='container'>
            {console.log(user)}
            <Heading className='mb-4'>Profile</Heading>
            <Box className='text-center center p-3'>
                <Heading style={{ marginTop: 0, fontSize: 26 }}>{user.fullName}</Heading>
                <h5>{getAccess()}</h5>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>ID: {user.id}</p>
            </Box>
        </div>
    );
}

export default Profile;
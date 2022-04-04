import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import axios from '../../axios-instance';

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

const UserList = ({ idx, user, usersData, setUsersData }) => {
    const [accessLevel, setAccessLevel] = useState('');

    const toggleUserLevelAccess = (id) => {
        const token = localStorage.getItem('difabel');
        const { accessToken } = JSON.parse(token);

        axios.put(`/users/update/${id}`, {}, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(() => {
            const access = user.accessLevel;
            const updatedUsersData = [...usersData];
            const currentItem = updatedUsersData[idx];

            if (access === 1) {
                currentItem.accessLevel = 2;
                setUsersData(updatedUsersData);
                setAccessLevel('Contributor');
            } else {
                currentItem.accessLevel = 1;
                setUsersData(updatedUsersData);
                setAccessLevel('Editor');
            }
        });
    };

    useEffect(() => {
        const access = user.accessLevel;

        if (access === 0) {
            setAccessLevel('Admin');
        } else if (access === 1) {
            setAccessLevel('Editor');
        } else {
            setAccessLevel('Contributor');
        }
    }, []);

    return (
        <div className="row p-3 align-items-center">
            <div className="col-7">
                <UserName>{user.fullName}</UserName>
                <UserId>{user.email}</UserId>
            </div>
            <div className="col-5">
                <div className="row align-items-center">
                    <div className="col">
                        <ButtonLevelAccess className='w-100 py-2' style={{ fontWeight: 'bold' }} onClick={() => toggleUserLevelAccess(user.id)}>{accessLevel}</ButtonLevelAccess>
                    </div>
                    {/* <div className="col-3 text-center">
                        <Button className="btn-success" onClick={() => changeUserLevelAccess(user.id)}><FaPencilAlt /></Button>
                    </div>
                    <div className="col-3 text-center">
                        <Button className="btn-danger" onClick={() => deleteUser(user.id)}><FaTrash /></Button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

UserList.propTypes = {
    idx: PropTypes.number,
    user: PropTypes.object,
    usersData: PropTypes.array,
    setUsersData: PropTypes.func
};

export default UserList;
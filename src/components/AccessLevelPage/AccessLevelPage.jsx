import React from 'react';
import styled from 'styled-components';
import '../../index.css';
import { FaTrash } from 'react-icons/fa';
import UserList from './UserList';

const HeaderTable = styled.h1`
    color: #01634B;
    font-size: 22px;
    font-weight: 700;
    margin-top: 23px;
    margin-bottom: 23px;
`;

const AccessLevelPage = () => {
    return (
        <div className="container">
            <div className="row">
            </div>
            <div className="item-list w-75" style={{ float: 'none', margin: '0 auto' }}>
                <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-7">
                        <HeaderTable>Name</HeaderTable>
                    </div>
                    <div className="col-4">
                        <HeaderTable>Level Access</HeaderTable>
                    </div>
                </div>
                <div className="row header">
                    <div className="col-1">
                    </div>
                    <div className="col-7 px-0" style={{ fontWeight: '700' }}>
                        Selected <a href="" className="HideAnimation">Clear All</a>
                    </div>
                    <div className="col-4 text-end">
                        <FaTrash />
                    </div>
                </div>
                <div className="row list">
                    <UserList />
                    <UserList />
                    <UserList />
                </div>
            </div>
        </div>
    );
};

export default AccessLevelPage;
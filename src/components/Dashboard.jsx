import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReportListPage from './ReportPage/ReportListPage';
import DifabelLocationListPage from './Map/DifabelLocationList';
import ArticleListPage from './ArticlePage/ArticleListPage';
import AccessLevelPage from './AccessLevelPage/AccessLevelPage';

const Dashboard = () => {
    return (
        <div className="dashboard">
            {/* <ReportListPage />
            <DifabelLocationListPage />
            <ArticleListPage/>
            <AccessLevelPage /> */}
            <div className="row">
                <ReportListPage />
            </div>
            {/* <div className="row" style={{ marginTop: '180px' }}>
                <DifabelLocationListPage />
            </div> */}
            <div className="row" style={{ marginTop: '180px' }}>
                <ArticleListPage/>
            </div>
            <div className="row" style={{ marginTop: '180px' }}>
                <AccessLevelPage />
            </div>
        </div>
    );
};

export default Dashboard;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReportListPage from './ReportPage/ReportListPage';
import DifabelLocationListPage from './Map/DifabelLocationList';
import ArticleListPage from './ArticlePage/ArticleListPage';
import AccessLevelPage from './AccessLevelPage/AccessLevelPage';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <ReportListPage />
            <DifabelLocationListPage />
            <ArticleListPage />
            <AccessLevelPage />
        </div>
    );
};

export default Dashboard;
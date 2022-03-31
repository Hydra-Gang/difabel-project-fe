import React, { useEffect, useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import axios from '../axios-instance';
import Header from './Header';
import Index from './Index';
import Dashboard from './Dashboard';
import RegisterPage from './AuthenticationPage/RegisterPage';
import LoginPage from './AuthenticationPage/LoginPage';
import ArticlePage from './ArticlePage/ArticlePage';
import ArticlePost from './ArticlePage/ArticlePost';
import ReportPage from './ReportPage/ReportPage';
import ReportListPage from './ReportPage/ReportListPage';
import Footer from './Footer';
import ContentHero from './ContentPage/ContentHero';
import Map from './Map/Map';
import MapPost from './Map/MapPost';
import Profile from './Profile/Profile';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [userFullName, setUserFullName] = useState('');

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
                        const { fullName } = res.data.data.user;
                        setUserFullName(fullName);
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
        <div className="app">
            <Header isAuthenticated={isAuthenticated} userFullName={userFullName} />
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/login" element={!isAuthenticated ? <LoginPage setIsAuthenticated={setIsAuthenticated} setUserFullName={setUserFullName} /> : <Navigate to="/" />} />
                <Route exact path="/register" element={!isAuthenticated ? <RegisterPage /> : <Navigate to="/" />} />
                <Route exact path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
                <Route exact path="/article" element={isAuthenticated ? <ArticlePage /> : <Navigate to="/login" />} />
                <Route exact path="/article/add" element={isAuthenticated ? <ArticlePost /> : <Navigate to="/login" />} />
                <Route exact path="/report" element={<ReportPage/>} />
                <Route exact path="/report/list" element={isAuthenticated ? <ReportListPage /> : <Navigate to="/login" />} />
                <Route exact path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
                <Route exact path="/map" element={<Map widthMap="50vw" heightMap="80vh" />} />
                <Route exact path="/map/add" element={<MapPost />} />
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;
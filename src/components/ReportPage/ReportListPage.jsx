import React, { useEffect, useState } from 'react';
import axios from '../../axios-instance';
import styled from '@emotion/styled';

const Heading = styled.h1`
    color: #01634B;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-top: 5%;
`;

const ListReport = styled.p`
    color: #01634B;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    display: inline-block;
    padding: 0px 5%;
    margin-left: auto;
    position: relative;
`;

// http://localhost:5000/v1/reports/

function ReportListPage() {
    const [data, setData] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const refreshSession = async (refreshToken) => {
            const authHeader = {
                Authorization: `Bearer ${refreshToken}`
            };

            let isRefreshFail = true;
            if (refreshToken) {
                try {
                    const { data: res } = await axios.post('/auth/refresh', {}, { headers: authHeader });
                    const newAccessToken = res.data.accessToken;

                    const newToken = {
                        accessToken: newAccessToken,
                        refreshToken: refreshToken
                    };

                    localStorage.setItem('difabel', JSON.stringify(newToken));
                    isRefreshFail = false;
                } catch (err) {
                    // do nothing
                }
            }

            if (isRefreshFail) {
                localStorage.removeItem('difabel');
                setIsAuthenticated(false);
            }
        };

        const fetchReports = async () => {
            const rawToken = localStorage.getItem('difabel');

            if (rawToken) {
                const token = JSON.parse(rawToken);

                if (!token.accessToken) {
                    setIsAuthenticated(false);
                    return;
                }

                const authHeader = {
                    Authorization: `Bearer ${token.accessToken}`
                };

                try {
                    const { data: res } = await axios.get('/reports', { headers: authHeader });
                    const { reports } = res.data;
                    setData((reports));
                    setLoading(false);
                    console.log(reports);
                    console.log(data);
                } catch (err) {
                    console.error(err);
                }
            }
        };

        fetchReports();
    }, []);

    return (
        <div className='container'>
            <Heading>REPORT LIST</Heading>
            {loading && <div>Wait....</div>}
            {!loading && (
                <div>
                    {data.map((item) => (
                        <div key={item.id}>
                            <ListReport> <input type="checkbox"></input> </ListReport>
                            <ListReport>{item.createdAt}</ListReport>
                            <ListReport>{`${item.content.substring(0, 30)}`}</ListReport>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ReportListPage;
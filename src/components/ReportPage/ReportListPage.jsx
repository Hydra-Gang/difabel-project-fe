import React, { useEffect, useState } from 'react';
import axios from '../../axios-instance';
import styled from '@emotion/styled';
import { Col, Row } from 'react-bootstrap';

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

const TableHeader = styled(Row)`
    background-color: #56AB91;
    color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const TableBody = styled.div`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
                <>
                    <TableHeader as={Row} className="w-75 p-2 m-auto mt-4">
                        <Col xs={4}>Date</Col>
                        <Col xs={6}>Content</Col>
                        <Col xs={2}>Status</Col>
                    </TableHeader>
                    <TableBody className="w-75 p-2 m-auto">
                        {
                            data?.map((item) => {
                                return (
                                    <Row key={item.id} className="p-2">
                                        <Col xs={4}>{item.createdAt}</Col>
                                        <Col xs={6}>{`${item.content.substring(0, 30)}`}</Col>
                                        <Col xs={2}> <input type="checkbox"></input> </Col>
                                    </Row>
                                );
                            })
                        }
                    </TableBody>
                </>
            )}
        </div>
    );
}

export default ReportListPage;
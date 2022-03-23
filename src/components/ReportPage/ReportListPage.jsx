import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('http://localhost:5000/v1/reports/');
                setData(response.data.reports);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
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
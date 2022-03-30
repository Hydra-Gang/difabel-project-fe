import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import axios from '../../axios-instance';
import TableList from './TableList';

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

const DonationTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('difabel');

        if (token) {
            const accessToken = JSON.parse(token).accessToken;

            axios.get('/donations', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then((res) => {
                const { donations } = res.data.data;
                setData(donations);
            }).catch((err) => {
                console.log(err);
            });
        }
    });

    return (
        <>
            <TableHeader as={Row} className="w-75 p-2 m-auto">
                <Col xs={3}>Date</Col>
                <Col xs={5}>Name</Col>
                <Col xs={4}>Donation Amount</Col>
            </TableHeader>
            <TableBody className="w-75 p-2 m-auto">
                {
                    data?.map((d) => {
                        return <TableList key={d.id} data={d} />;
                    })
                }
            </TableBody>
        </>
    );
};

export default DonationTable;
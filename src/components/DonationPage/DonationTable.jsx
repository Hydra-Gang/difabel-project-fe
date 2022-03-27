import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
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
    return (
        <>
            <TableHeader as={Row} className="w-75 p-2 m-auto">
                <Col xs={3}>Date</Col>
                <Col xs={5}>Name</Col>
                <Col xs={4}>Donation Amount</Col>
            </TableHeader>
            <TableBody className="w-75 p-2 m-auto">
                <TableList></TableList>
                <TableList></TableList>
                <TableList></TableList>
            </TableBody>
        </>
    );
};

export default DonationTable;
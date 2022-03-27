import { Col, Row } from 'react-bootstrap';

const TableList = () => {
    return (
        <Row className="p-2">
            <Col xs={3}>3/3/2022 00:00</Col>
            <Col xs={5}>Fajar Muhammad Hamka</Col>
            <Col xs={4}>IDR 1.000.000,-</Col>
        </Row>
    );
};

export default TableList;
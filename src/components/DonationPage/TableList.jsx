import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TableList = ({ data }) => {
    return (
        <Row className="p-2">
            <Col xs={3}>{data.donatedAt}</Col>
            <Col xs={5}>{data.donator}</Col>
            <Col xs={4}>IDR {data.money},-</Col>
        </Row>
    );
};

TableList.propTypes = {
    data: PropTypes.object
};

export default TableList;
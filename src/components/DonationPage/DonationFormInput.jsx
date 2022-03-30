import { useContext } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormInputContext } from './DonationForm';

const InputIcon = styled(Form.Label)`
    position: absolute;
    right: 0;
`;

const DonationFormInput = ({ propKey, propName, iconName }) => {
    const [data, setData, errors] = useContext(FormInputContext);

    const handleChange = (e) => {
        const { value } = e.target;
        setData({ ...data, [propKey]: value });
    };

    return (
        <FormGroup className="mb-3 position-relative" style={{ color: '#56AB91' }}>
            <Form.Label className="m-0 fw-bold">{propName}</Form.Label>
            <Form.Control type="text" className="bg-transparent ps-0 border-0 border-bottom rounded-0 d-inline" name={propKey} placeholder={`Enter your ${propName.toLowerCase()}`} value={data[propKey]} onChange={handleChange} />
            <InputIcon as={Form.Label} className="mt-1">{iconName}</InputIcon>
            {errors[propKey] && <div className="alert alert-success w-100 py-2 mb-2 m-auto float-lg-start text-start" role="alert">{errors[propKey]}</div>}
        </FormGroup>
    );
};

DonationFormInput.propTypes = {
    type: PropTypes.string,
    propKey: PropTypes.string,
    propName: PropTypes.string,
    iconName: PropTypes.object
};

export default DonationFormInput;
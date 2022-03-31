import { createContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Image } from 'react-bootstrap';
import { FaDonate, FaHandHoldingHeart, FaLaugh, FaUser } from 'react-icons/fa';
import styled from 'styled-components';
import axios from '../../axios-instance';
import { schema } from '../../validations/donate-validation';
import DonationFormInput from './DonationFormInput';

const Box = styled.div`
    width: 600px;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const DonationImage = styled(Image)`
    width: 200px;
    height: 200px;
`;

const DonateButton = styled.button`
    background-color: #01634B;

    &:hover, &:focus {
        background-color: #00533F;
    }
`;

const HomeLink = styled.a`
    background-color: #01634B;
    color: #FFF;

    &:hover, &:focus {
        background-color: #00533F;
        color: #FFF;
    }
`;

const FormInputContext = createContext();

const DonationForm = () => {
    const [data, setData] = useState({
        donator: '',
        money: ''
    });

    const [errors, setErrors] = useState({});
    const [backendError, setBackendError] = useState('');
    const [success, setSuccess] = useState(false);

    const validateForm = async (e) => {
        const result = schema.validate(data, { abortEarly: false });
        const { error } = result;

        e.preventDefault();

        if (error) {
            const errorData = {};

            for (const err of error.details) {
                const name = err.path[0];
                const message = err.message;
                errorData[name] = message;
            }

            setErrors(errorData);
        } else {
            try {
                await axios.post('/donations/add', data);

                setData({
                    donator: '',
                    money: ''
                });

                setErrors({
                    donator: '',
                    money: ''
                });

                setSuccess(true);
            } catch (err) {
                const errorMessage = err.response.data.message;
                setBackendError(errorMessage);
            }
        }
    };

    return (
        <Box className="m-auto p-4 d-flex align-items-center">
            {!success ? (
                <Form className="w-100">
                    <h6 className="text-center mb-3 fw-normal" style={{ color: '#01634B' }}><FaHandHoldingHeart /> Your donation means a lot to us</h6>
                    <DonationImage as={Image} src="assets/donate.png" className="d-block m-auto" alt="Donate"></DonationImage>
                    {backendError && <div className="alert alert-success w-100 py-2 mb-2 m-auto float-lg-start text-start" role="alert">{backendError}</div>}

                    <FormInputContext.Provider value={[data, setData, errors]}>
                        <DonationFormInput propKey="donator" propName="Name" iconName={<FaUser />} />
                        <DonationFormInput propKey="money" propName="Donation Amount" iconName={<FaDonate />} />
                        <DonateButton as={Button} type="submit" className="w-100 mb-3 border-0" onClick={validateForm}>Donate</DonateButton>
                    </FormInputContext.Provider>
                </Form>
            ) : (
                <Form className="w-100">
                    <h6 className="text-center mb-3 fw-normal" style={{ color: '#01634B' }}><FaLaugh /> Thank you for your donation</h6>
                    <DonationImage as={Image} src="assets/donate.png" className="d-block m-auto" alt="Donate"></DonationImage>
                    <HomeLink as={Link} to="/" className="btn d-block m-auto">Back to Home</HomeLink>
                </Form>
            )}
        </Box>
    );
};

export { FormInputContext };
export default DonationForm;
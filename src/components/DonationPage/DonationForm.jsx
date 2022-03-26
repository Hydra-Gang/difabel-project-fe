import { createContext, useState } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { FaDonate, FaHandHoldingHeart, FaUser } from 'react-icons/fa';
import styled from 'styled-components';
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

const FormInputContext = createContext();

const DonationForm = () => {
    const [data, setData] = useState({
        donator: '',
        money: ''
    });

    return (
        <Box className="m-auto d-flex align-items-center">
            <Form className="w-100 p-4">
                <h6 className="text-center mb-3 fw-normal" style={{ color: '#01634B' }}><FaHandHoldingHeart /> Your donation means a lot to us</h6>
                <DonationImage as={Image} src="assets/donate.png" className="d-block m-auto" alt="Donate"></DonationImage>
                {/* {backendError && <div className="alert alert-success w-100 py-2 mb-2 m-auto float-lg-start text-start" role="alert">{backendError}</div>} */}

                <FormInputContext.Provider value={[data, setData]}>
                    <DonationFormInput propKey="donator" propName="Name" iconName={<FaUser />} />
                    <DonationFormInput propKey="money" propName="Donation Amount" iconName={<FaDonate />} />
                    <DonateButton as={Button} type="submit" className="w-100 mb-3 border-0">Donate</DonateButton>
                </FormInputContext.Provider>
            </Form>
        </Box>
    );
};

export { FormInputContext };
export default DonationForm;
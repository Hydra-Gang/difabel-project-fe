import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const Body = styled.div`
    padding: 28px 25px 27px 25px;
    border: none !important;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const TitlePage = styled.h1`
    color: #01634B;
    font-size: 40px;
    font-weight: 700;
    margin-top: 72px;
`;

const ReportInfo = styled.h5`
    font-size: 20px;
    color: #01634B;
    text-align: center;
    padding: 0;
    margin: 0;
    margin-bottom: 12px;
`;

const ReportContent = styled.textarea`
    color: #FFFFFF; 
    text-align: left;
    width: 100%;
    background-color: #88D4AB;
    padding: 8px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 0;
`;

const ButtonSubmit = styled.button`
    color: #FFFFFF;
    background-color: #01634B;
    border-radius: 10px;
    width: 100%;
    border: 0;
`;

const sendReport = (data) => {
    axios.post('http://localhost:5000/v1/reports/add', data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
};

const ReportPage = () => {

    const [data, setData] = useState({
        content: ''
    });

    const [text, setText] = useState('');

    const Change = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
        setText(e.target.value);
    };

    const Submit = (e) => {
        console.log(data.content);
        e.preventDefault();
        const userData = {
            content: data.content
        };
        axios
            .post('http://localhost:5000/v1/reports/add', userData)
            .then((response) => {
                console.log(response);
                setText('');
                setData([]);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log('server responded');
                } else if (error.request) {
                    console.log('network error');
                } else {
                    console.log(error);
                }
            });
    };

    return (
        <div className="container">
            <div className="row">
                <TitlePage className="mb-3 text-center">REPORT PAGE</TitlePage>
            </div>
            <div className="row">
                <Card className="border-0 w-50" style={{ float: 'none', margin: '0 auto' }}>
                    <Body>
                        <div className="row">
                            <div className="col">
                                <ReportInfo><img src="assets/happy.png" style={{ marginRight: '14px' }} alt="happy"/>Tell us what’s your problem</ReportInfo>
                            </div>
                        </div>
                        <form>
                            <ReportContent
                                placeholder="Enter yout report"
                                type="content"
                                name="content"
                                value={text}
                                onChange={Change}
                                rows="6">
                            </ReportContent>

                            <ButtonSubmit onClick={Submit}>Send Report</ButtonSubmit>
                        </form>
                    </Body>
                </Card>
            </div>
        </div>
    );
};

export default ReportPage;
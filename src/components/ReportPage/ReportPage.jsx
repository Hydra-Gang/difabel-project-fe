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

const sendReport = (data) => {
    axios.post('http://localhost:3000/v1/reports/add', data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
};

const ReportPage = () => {

    const [data, setData] = useState({
        content: ''
    });

    return (
        <div className="container">
            <div className="row">
                <TitlePage className="mb-3">REPORT PAGE</TitlePage>
            </div>
            <div className="row">
                <Card className="border-0 w-50" style={{ float: 'none', margin: '0 auto' }}>
                    <Body>
                        <div className="row">
                            <div className="col">
                                <ReportInfo><img src="assets/happy.png" style={{ marginRight: '14px' }} alt="happy"/>Tell us what’s your problem</ReportInfo>
                            </div>
                        </div>
                        <form action="">
                            <textarea style={{ color: 'white', textAlign: 'left', backgroundColor: '#88D4AB', borderRadius: '10px' }} className="form-control mb-3" placeholder="Enter yout report" id="content" value={data.content} onChange={(e) => setData({ ...data, content: e.target.value })} rows="4"></textarea>

                            <select style={{ color: 'white', backgroundColor: '#56AB91', borderRadius: '10px' }} className="form-control mb-3" placeholder="Choose your report type" id="typeReport">
                                <option style={{ textAlign: 'left' }}>Cheat</option>
                                <option style={{ textAlign: 'left' }}>Abusing</option>
                                <option style={{ textAlign: 'left' }}>Toxic</option>
                                <option style={{ textAlign: 'left' }}>AFK</option>
                                <option style={{ textAlign: 'left' }}>Leaving Game</option>
                            </select>
                            <button type="submit" style={{ color: 'white', backgroundColor: '#01634B', borderRadius: '10px' }} className="w-100" onClick={() => sendReport(data)}>Send Report</button>
                        </form>
                    </Body>
                </Card>
            </div>
        </div>
    );
};

export default ReportPage;
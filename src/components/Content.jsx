import React from "react";
import styled from "styled-components";

const greenColor = "#01634B"

const Heading = styled.h1`
    color: ${greenColor};
    text-align: left;
    font-size: 40px;
    font-weight: 700;
`;

const DescriptionText = styled.p`
    text-align: left;
    color: ${greenColor};
    margin-top: 30px;
`;

const ButtonFind = styled.button`
	background-color:${greenColor};
	border-radius:28px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:17px;
	padding: 10px 40px;
	text-decoration:none;
	text-shadow:0px 1px 0px #22ff00;
    text-align: left;
    justify-content: start;
    margin-top: 19px;

    &:hover {
        background-color: white;
        color: ${greenColor};
    }

    &:active {
        position:relative;
	    top:1px;
    }
`;

function Content() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center margin-content ">
                        <div className="col-lg-12">
                            <div className="row">
                                <Heading>YOUR RELIABLE, ACCURATE, AND TRUSTED DIFABLE INFORMATION</Heading>
                                <DescriptionText>This website provides a variety of information and knowledge about people with disabilities. This website is also equipped with a map of the distribution of people with disabilities</DescriptionText>
                                    <div className="col-lg-4">
                                        <ButtonFind>Find Difabel</ButtonFind>
                                    </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 margin-content">
                        <img src="assets/landing-page.png" alt="difabel" className="w-100 bg-primary"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;
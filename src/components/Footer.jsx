
// import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { FaBeer, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const background = '#01634B';

const NavbarFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 350px;
    background-color: ${background};
    border-top: 1px solid #e2e2e2;
`;

const Logo = styled.img`
    margin-top: 70px;
`;

const LinkText = styled.a`
    margin-top: 100px;
    color: white;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        color: white;
        text-decoration: underline;
    }
`;

function Footer() {
    return (
        <NavbarFooter>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <Logo src='assets/logo_footer.png' alt='logo'/>
                    </div>

                    <LinkText className='col-lg-2' href="#">
                        <p>Dashboard</p>
                    </LinkText>

                    <LinkText className='col-lg-2' href="#">
                        <p>Article</p>
                    </LinkText>

                    <LinkText className='col-lg-1' href="#">
                        <FaFacebook />
                    </LinkText>

                    <LinkText className='col-lg-1'>
                        <FaInstagram />
                    </LinkText>

                    <LinkText className='col-lg-1'>
                        <FaWhatsapp />
                    </LinkText>


                </div>
            </div>
        </NavbarFooter>
    );
}

export default Footer;
import React from "react"
import { Twitter, Facebook, Instagram, LinkedIn } from '@material-ui/icons';
import {
    Box,
    Container,
    Row,
    Column,
    About,
    Heading,
    Title,
    FooterLink,
    SocialList,
    SocialItem,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Title>ECO PRODUCT JOURNAL</Title>
            <Container>
                <About>
                    This is a social media platform created by four co-founders Garima, Osric, Ray and Waqas to create consumer awareness relating to environmental waste. We aim to solve this environmental problem through discussion on different products by the members of the website.

                    <br />
                    <br />
                    <a href='https://docs.google.com/presentation/d/1EzV4kpaOdSUihkvRiFsK3DLDxTxrifBUBYdlBFyuPCA/edit#slide=id.gde773fab20_0_119'> Link to our presentation</a>
                </About>

                <SocialList>
                    <SocialItem>
                        <FooterLink href='https://twitter.com'>
                            <Twitter />
                        </FooterLink>
                    </SocialItem>
                    <SocialItem>
                        <FooterLink href='https://www.facebook.com'>
                            <Facebook />
                        </FooterLink>
                    </SocialItem>
                    <SocialItem>
                        <FooterLink href='https://www.instagram.com'>
                            <Instagram />
                        </FooterLink>
                    </SocialItem>
                    <SocialItem>
                        <FooterLink href='https://www.linkedin.com/'>
                            <LinkedIn />
                        </FooterLink>
                    </SocialItem>
                </SocialList>
            </Container>
        </Box>
    );
};

export default Footer

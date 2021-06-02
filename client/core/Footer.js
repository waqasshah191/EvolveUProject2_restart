import React from "react"
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{
                color: "white",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                ECO PRODUCT JOURNAL
      </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Who we are</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>

                    </Column>
                    <Column>
                        <Heading>Supporters</Heading>
                        <FooterLink href="#">ECO Canada </FooterLink>
                        <FooterLink href="#">Green Calgary Association</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Calgary</FooterLink>
                        <FooterLink href="#">Edmonton</FooterLink>
                      
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                  </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
              
                  </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};

export default Footer

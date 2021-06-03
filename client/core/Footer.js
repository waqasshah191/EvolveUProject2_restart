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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </About>

                <SocialList>
                    <SocialItem>
                        <FooterLink href='#'>
                            <Twitter />
                        </FooterLink>
                    </SocialItem>
                    <SocialItem>
                        <FooterLink href='#'>
                            <Facebook />
                        </FooterLink>
                    </SocialItem>
                    <SocialItem>
                        <FooterLink href='#'>
                            <Instagram />
                        </FooterLink>
                    </SocialItem>
                    <SocialItem>
                        <FooterLink href='#'>
                            <LinkedIn />
                        </FooterLink>
                    </SocialItem>
                </SocialList>
            </Container>
        </Box>
    );
};

export default Footer

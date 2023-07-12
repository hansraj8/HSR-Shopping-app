import { Instagram, LinkedIn, YouTube, Room, Phone, MailOutline } from '@material-ui/icons';
import React from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
display:flex;
`;

const Logo = styled.h1`
margin-left:10px;
flex:1;
padding:20px;

`;


const left = styled.h1`
flex:1;
display:flex;
flex-direction:column;
padding:20px;

`;

const Desc = styled.p`
margin:20px 0px
`;


const Center = styled.span`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 30px;

`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const SocialContainer = styled.div`
display:flex;
margin-left:10px;
`;

const SocialIcon = styled.div`
    width: 40px;
     height: 40px;
     border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
     justify-content: center;
     margin-right: 20px;
     background-color: #${(props) => props.color};
  `;

const Footer = () => {
    return (
        <Container>
            <left>
                <Logo>HRS.</Logo>
                <Desc>Loremy ipsum dolor sit amet consectetur adipisicing elit. Eveniet aut quam, iste commodi ab possimus! </Desc>
                <SocialContainer>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="3B5999">
                        <LinkedIn />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> contact@hansraj.dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
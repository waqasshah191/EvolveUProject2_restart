import styled from 'styled-components';

export const Box = styled.div`

padding: 120px 40px;
background: #009688;
width: 100%;
box-sizing: border-box;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;
export const Title = styled.h1`
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	color: white;
	text-align: center;
	margin-top: -50px;
`;
export const Container = styled.div`
	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const About = styled.p`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 25px;
text-decoration: none;
padding: 7px;
&:hover {
	color: green;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;

export const SocialList = styled.ul`
	padding: 0;
	margin: auto;
`;

export const SocialItem = styled.li`
	display: inline-block;
`

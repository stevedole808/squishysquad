import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
	background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : 'white')};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: 600px;
	position: relative;
	z-index: 1;
	background-color: #07091d;
	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

export const HomePageWrapper = styled.div`
	display: grid;
	max-width: 1100px;
	margin-left: 100px;
	padding: 0 24px;
	justify-content: center;
`;

export const HomePageRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col2 col1'` : `'col1 col2'`};
	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) =>
			imgStart ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'`};
	}
`;

export const Column1 = styled.div`
	margin-bottom: 15px;
	grid-area: col1;
	margin: 0px 30px;
`;

export const Column2 = styled.div`
	margin-bottom: 15px;
	grid-area: col2;
	margin: 0px 30px;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	transition: transform 5s ease;
`;

export const TopLine = styled.p`
	color: white;
	font-size: 30px;
	font-weight: 500;
	letter-spacing: 2px;
	font-color: white;
	font-family: 'Advent Pro', sans-serif;
	margin: 0px;
	max-width: 1100px;
`;

export const Heading = styled.h1`
	font-size: 60px;
	line-height: 1;
	font-weight: 700;
	font-family: 'Advent Pro', sans-serif;
	text-transform: uppercase;
	font-color: white;
	color: ${({ lightText }) => (lightText ? 'white' : 'white')};
	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const Subtitle = styled.p`
	max-width: 440px;
	font-size: 20px;
	font-famiily: 'sora', serif;
	line-height: 32px;
	color: ${({ darkText }) => (darkText ? 'white' : 'white')};
`;

export const Mint = styled.h3`
	font-size: 24px;
	color: white;
	margin: 20px;
`;

export const ImgWrap = styled.div`
	max-width: 555px;
`;

export const Img = styled.img`
	width: 90%;
	margin: 0 0 10px 0;
	border-radius: 100px;
`;

export const Header = styled.h3`
	font-family: Open Sans Extra Bold;
	font-size: 50px;
	line-height: 28px;
	line-space: 50px;
	font-weight: 500;
	color: white;
	margin: 0px;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
`;

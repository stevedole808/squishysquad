import styled from 'styled-components';

export const TextWrapper = styled.div`
	max-width: 540px;
`;

export const AboutPageWrappper = styled.div`
	background: #07091d;
`;

export const HeaderContainer = styled.div`
	margin: 0 auto;
	max-width: 960px;
`;
export const Header = styled.h3`
	font-family: 'Advent Pro', sans-serif;
	font-size: 40px;
	line-space: 50px;
	font-weight: 500;
	color: white;
	margin-bottom: -20px;
`;
export const TopLine = styled.p`
	color: white;
	font-size: 50px;
	font-weight: 500;
	letter-spacing: 2px;
	font-weight: 700;
	font-color: white;
	font-font-family: 'Advent Pro', sans-serif;
`;

export const Subtitle = styled.p`
	max-width: 440px;
	font-size: 20px;
	line-height: 32px;
	color: ${({ darkText }) => (darkText ? 'white' : 'white')};
`;

export const ImgWrap = styled.div`
	max-width: 555px;
	z-index: -1;
`;

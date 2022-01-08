import styled from 'styled-components';

export const TeamContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	padding-top: 100px;
	background-color: #07091d;
`;

export const TeamWrapper = styled.div`
	display: grid;
	z-index: 1;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
	margin-bottom: 100px;
`;
export const TeamRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
`;

export const Header = styled.h3`
	font-size: 24px;
	line-height: 28px;
	font-weight: 700;
	color: dodgerblue;
	padding-bottom: 20px;
`;

export const Column1 = styled.div`
	display: grid;
	margin-bottom: 15px;
	padding: 0 15px;
`;

export const Column2 = styled.div`
	display: grid;
	margin-bottom: 15px;
	padding: 0 15px;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Image = styled.img`
	border-radius: 100px;
	border-color: 1px solid red;
	width: 240px;
	height: 240px;
`;

export const Name = styled.h1`
	font-size: 24px;
	color: white;
`;

export const TwitterIcon = styled.div``;

export const Description = styled.p`
	font-size: 16px;
	line-height: 27px;
	color: lightblue;
`;

export const TeamBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 20px;
	width: 30%;
`;
export const teamData = {
	image: require('../../images/bentoboi.png').default,

	image1: require('../../images/ricecake.png').default,

	image2: require('../../images/goof.png').default,

	image3: require('../../images/goof.png').default,
	image4: require('../../images/opensea.png').default,
};

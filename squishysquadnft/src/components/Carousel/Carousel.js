import styled, { css } from 'styled-components';

// export const Item = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	height: 250px;
// 	width: 100%;
// 	color: #fff;
// 	margin: 0 15px;
// 	font-size: 4em;
// `;

// export const CarouselPageRow = styled.div`
// 	display: grid;
// 	grid-auto-columns: minmax(auto, 1fr);
// 	align-items: center;
// 	grid-template-areas: ${({ carouselStart }) =>
// 		carouselStart ? `'col2 col1'` : `'col1 col2'`};
// 	@media screen and (max-width: 768px) {
// 		grid-template-areas: ${({ carouselStart }) =>
// 			carouselStart ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'`};
// 	}
// `;

// export const CarouselWrap = styled.div`
// 	max-width: 555px;
// 	height: 100%;
// `;

const width = '400px',
	height = '500px';
export const Container = styled.div`
	border: 1px solid red;
	position: relative;
	overflow: hidden;
	width: ${width};
`;
export const Children = styled.div`
	width: ${width};
	position: relative;
	height: ${height};
`;
export const Arrow = styled.div`
	text-shadow: 1px 1px 1px #fff;
	z-index: 100;
	line-height: ${height};
	text-align: center;
	position: absolute;
	top: 0;
	width: 10%;
	font-size: 3em;
	cursor: pointer;
	user-select: none;
	${(props) =>
		props.right
			? css`
					left: 90%;
			  `
			: css`
					left: 0%;
			  `}
`;
export const Dot = styled.span`
	font-size: 1.5em;
	cursor: pointer;
	text-shadow: 1px 1px 1px #fff;
	user-select: none;
`;
export const Dots = styled.span`
	display: flex;
	justify-content: center;
	text-align: center;
	width: ${width};
	z-index: 100;
`;

export const CarouselData = [
	{
		image: require('../../images/dragon.png').default,
	},
	// {
	// 	image: require('../../images/armor.png').default,
	// },
	// {
	// 	image: require('../../images/bunny.png').default,
	// },
	// {
	// 	image: require('../../images/fire.png').default,
	// },
	// {
	// 	image: require('../../images/fox.png').default,
	// },
];

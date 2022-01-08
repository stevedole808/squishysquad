import React from 'react';
import {
	HomeContainer,
	HomePageRow,
	Column1,
	Column2,
	TextWrapper,
	Heading,
	Subtitle,
	Img,
	ImgWrap,
	HomePageWrapper,
	TopLine,
} from './HomePage';
import Fade from 'react-reveal/Fade';

const HomePage = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headline,
	darkText,
	description,
	img,
	alt,
}) => {
	return (
		<>
			<HomeContainer lightBg={lightBg} id={id}>
				<HomePageWrapper>
					<HomePageRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<Fade top style={{ overflow: 'hidden' }}>
									<TopLine>{topLine}</TopLine>
									<Heading lightText={lightText}>{headline} </Heading>
									<Subtitle darkText={darkText}>{description}</Subtitle>
								</Fade>
							</TextWrapper>
						</Column1>
						<Column2>
							<Fade top>
								<ImgWrap>
									<Img src={img} alt={alt} />
								</ImgWrap>
							</Fade>
						</Column2>
					</HomePageRow>
				</HomePageWrapper>
			</HomeContainer>
		</>
	);
};

export default HomePage;

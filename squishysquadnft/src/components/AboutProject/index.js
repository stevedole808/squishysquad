import React from 'react';
import Carousel from '../Carousel/index.js';
import {
	HomeContainer,
	HomePageRow,
	Column1,
	Column2,
	HomePageWrapper,
} from '../HomePage/HomePage';

import {
	AboutPageWrappper,
	TextWrapper,
	HeaderContainer,
	Header,
	TopLine,
	Subtitle,
	ImgWrap,
} from './About';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import makeCarousel from 'react-reveal/makeCarousel';
import { CarouselData } from '../Carousel/Carousel';
const CarouselPage = ({
	lightBg,
	id,
	imgStart,
	topLine,
	darkText,
	description,
	header,
}) => {
	const CarouselUI = makeCarousel(Carousel);
	return (
		<>
			<AboutPageWrappper>
				<HeaderContainer>
					<Fade top>
						<Header>{header}</Header>
						<TopLine>{topLine}</TopLine>
					</Fade>
				</HeaderContainer>
				<HomeContainer lightBg={lightBg} id={id}>
					<HomePageWrapper>
						<HomePageRow imgStart={imgStart}>
							<Column1>
								<Fade top>
									<TextWrapper>
										<Subtitle darkText={darkText}>{description}</Subtitle>
									</TextWrapper>
								</Fade>
							</Column1>
							<Column2>
								<Fade top>
									<ImgWrap>
										<CarouselUI>
											<Slide right>hi</Slide>
											<Slide right>{CarouselData.image}</Slide>
											<Slide right>{CarouselData.image}</Slide>
										</CarouselUI>
									</ImgWrap>
								</Fade>
							</Column2>
						</HomePageRow>
					</HomePageWrapper>
				</HomeContainer>
			</AboutPageWrappper>
		</>
	);
};

export default CarouselPage;

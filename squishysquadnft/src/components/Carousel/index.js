import React, { useState } from 'react';
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi';
import './Carousel.css';
import makeCarousel from 'react-reveal/makeCarousel';
import {
	Container,
	Children,
	Arrow,
	Dot,
	Dots,
	CarouselData,
} from './Carousel';
import Slide from 'react-reveal/Slide';



const Carousel = ({ position, total, handleClick, children }) => {
	return (
		<Container>
			<Children>
				{children}
				<Arrow onClick={handleClick} data-position={position - 1}>
					{'<'}
				</Arrow>
				<Arrow right onClick={handleClick} data-position={position + 1}>
					{'>'}
				</Arrow>
			</Children>
			<Dots>
				{Array(...Array(total)).map((val, index) => (
					<Dot key={index} onClick={handleClick} data-position={index}>
						{index === position ? '● ' : '○ '}
					</Dot>
				))}
			</Dots>
		</Container>
	);
};

export default Carousel;

import React from 'react';

import {
	HomeContainer,
	HomePageRow,
	Column1,
	Column2,
	TextWrapper,
	Img,
	ImgWrap,
	HomePageWrapper,
} from '../HomePage/HomePage';

import {
	TopLine,
	MintPrice,
	Mint,
	MaxPer,
	MintPageWrapper,
	MintPageContainer,
} from './Mint';
import Fade from 'react-reveal/Fade';

const MintPage = ({
	lightBg,
	id,
	imgStart,
	topLine,
	img,
	alt,
	darkText,
	mint,
	mintPrice,
	max,
	release,
}) => {
	return (
		<>
			<MintPageWrapper>
				<MintPageContainer>
					<TopLine>{topLine}</TopLine>
				</MintPageContainer>
				<HomeContainer lightBg={lightBg} id={id}>
					<HomePageWrapper>
						<HomePageRow imgStart={imgStart}>
							<Column1>
								<TextWrapper>
									<Fade top>
										<Mint>{release}</Mint>
										<MaxPer>{max}</MaxPer>
										<MintPrice>{mintPrice}</MintPrice>
										<Mint darkText={darkText}>{mint}</Mint>
									</Fade>
								</TextWrapper>
							</Column1>
							<Column2>
								<ImgWrap>
									<Fade top>
										<Img src={img} alt={alt} />
									</Fade>
								</ImgWrap>
							</Column2>
						</HomePageRow>
					</HomePageWrapper>
				</HomeContainer>
			</MintPageWrapper>
		</>
	);
};

export default MintPage;

import React from 'react';
import { bentoBoi } from '../../images/bentoboi.png';
import { goof } from '../../images/goof.png';
import { ricecake } from '../../images/ricecake.png';

import {
	TeamContainer,
	Row,
	Image,
	Name,
	TeamRow,
	TwitterIcon,
	Description,
	TeamBox,
	TeamWrapper,
	Column1,
	Column2,
	Header,
} from './Team.js';
import { teamData } from './Team.js';

const Team = () => {
	return (
		<>
			<TeamContainer>
				<TeamWrapper>
					<TeamRow>
						<Header>MEET THE SQUISHY FAM!</Header>
						<Column1>
							<Row>
								<Image src={teamData.image} />
								<TeamBox>
									<Name>BentoBoi</Name>
									<Description>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Labore quasi repellendus libero molestias ipsam, corporis
										blanditiis fuga similique corrupti
									</Description>
									<TwitterIcon></TwitterIcon>
								</TeamBox>

								<Image src={teamData.image1} />
								<TeamBox>
									<Name>GOOF</Name>
									<Description>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Deserunt cum molestiae suscipit fuga accusantium quisquam
										debitis eligendi quidem dolores
									</Description>
									<TwitterIcon></TwitterIcon>
								</TeamBox>
							</Row>
						</Column1>

						<Column2>
							<Row>
								<Image src={teamData.image2} />
								<TeamBox>
									<Name>Ricecake</Name>
									<Description>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Repudiandae non distinctio minima laborum dignissimos
										veritatis ratione eius, exercitationem
									</Description>
									<TwitterIcon></TwitterIcon>
								</TeamBox>
								<Image src={teamData.image3} />
								<TeamBox>
									<Name>Ricecake</Name>
									<Description>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Accusantium harum debitis suscipit! Doloribus doloremque in
										modi quos culpa! Odit aut tenetur veniam
									</Description>
									<TwitterIcon></TwitterIcon>
								</TeamBox>
							</Row>
						</Column2>
					</TeamRow>
				</TeamWrapper>
			</TeamContainer>
		</>
	);
};

export default Team;

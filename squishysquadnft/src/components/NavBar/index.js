import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
	Nav,
	NavBarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
	Icon,
	Logo,
	NavLink,
} from './NavBar';
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { teamData } from '../Team/Team.js';
import Fade from 'react-reveal/Fade';

const NavBar = ({ toggle }) => {
	return (
		<>
			<Icon>
				<NavLogo to="/">squishy squad</NavLogo>
			</Icon>
			<Nav>
				<MobileIcon>
					<Logo to="/">squishy squad</Logo>
				</MobileIcon>

				<NavBarContainer>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<Fade top>
						<NavMenu>
							<NavItem>
								<NavLinks to="home">Home</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="mint">Mint</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="roadmap">Roadmap</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="team">Team</NavLinks>
							</NavItem>
						</NavMenu>
					</Fade>
					<NavMenu>
						<Fade top>
							<NavItem>
								<NavLink to="twitter">
									<FaTwitter />
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="discord">
									<FaDiscord />
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="opensea">
									<img
										style={{ width: '20px', backgroundColor: 'none' }}
										src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.png"
										alt="Available on OpenSea"
									/>
								</NavLink>
							</NavItem>

							<NavBtn>
								<NavBtnLink to="/disconnected">Disconnected</NavBtnLink>
							</NavBtn>
						</Fade>
					</NavMenu>
				</NavBarContainer>
			</Nav>
		</>
	);
};

export default NavBar;

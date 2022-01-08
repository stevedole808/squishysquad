import React from 'react';
import {
	SideBarContainer,
	Icon,
	CloseIcon,
	SideBarWrapper,
	SideBarLink,
	SideBarMenu,
	SideBtnWrap,
	SideBarRoute,
} from './SideBar';

const SideBar = ({ isOpen, toggle }) => {
	return (
		<SideBarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SideBarWrapper>
				<SideBarMenu>
					<SideBarLink to="home" onClick={toggle}>
						Home
					</SideBarLink>
					<SideBarLink to="mint" onClick={toggle}>
						Mint
					</SideBarLink>
					<SideBarLink to="roadmap" onClick={toggle}>
						RoadMap
					</SideBarLink>
					<SideBarLink to="team" onClick={toggle}>
						Team
					</SideBarLink>
				</SideBarMenu>
				<SideBtnWrap>
					<SideBarRoute to="meta">Disconnected</SideBarRoute>
				</SideBtnWrap>
			</SideBarWrapper>
		</SideBarContainer>
	);
};

export default SideBar;

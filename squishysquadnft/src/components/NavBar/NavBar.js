import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkScroll } from 'react-router-dom';

export const Nav = styled.nav`
	background: #07091d;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	padding: 0 24px;
	width: 100%;
	max-width: 1100px;
`;
export const Logo = styled.div`
	color: pink;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	font-weight: bold;
	text-decoration: none;
	margin-left: 30px;
	margin-top: 4px;
`;
export const NavLogo = styled(LinkR)`
	color: white;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	font-weight: bold;
	text-decoration: none;
	width: 10%;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const Icon = styled.div`
	background-color: #07091d;
	display: flex;
	width: 100%;
	width: 1100px;
	align-items: left;
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-left: 0;
	margin-right: 0;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	padding: 20px;
`;

export const NavLink = styled(LinkScroll)`
	color: white;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 10px;
	height: 100%;
	cursor: pointer;
	border: 1px solid white;
	&.active {
		border-bottom: 3px solid #01bf71;
	}
`;

export const NavLinks = styled(LinkScroll)`
	color: white;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1 rem;
	height: 100%;
	cursor: pointer;
	&.active {
		border-bottom: 3px solid #01bf71;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: blue;
	white-space: nowrap;
	padding: 10px 22px;
	color: #018606;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010686;
	}
`;

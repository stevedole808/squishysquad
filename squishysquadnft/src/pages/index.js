import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import HomePage from '../components/HomePage';
import { homeObjOne } from '../components/HomePage/Data';
import { homeObjTwo } from '../components/HomePage/Data';
import { homeObjThree } from '../components/HomePage/Data';
import MintPage from '../components/Mint/index';
import CarouselPage from '../components/AboutProject';
import RoadMap from '../components/RoadMap';
import Faq from '../components/FAQ/index';
import Team from '../components/Team/index';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<SideBar isOpen={isOpen} toggle={toggle} />
			<NavBar toggle={toggle} />
			<HomePage {...homeObjOne} />
			{/* <MintPage {...homeObjTwo} /> */}
			<CarouselPage {...homeObjThree} />
			<RoadMap />
			<Faq />
			<Team />
		</>
	);
};

export default Home;

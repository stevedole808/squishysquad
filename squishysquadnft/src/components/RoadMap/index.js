import 'react-vertical-timeline-component/style.min.css';
import Fade from 'react-reveal/Fade';
import { MdOutlineArrowDropDown as Icon } from 'react-icons/md';
import {
	RoadMapContainer,
	Title,
	TimeLineList,
	List,
	Content,
	Details,
	IconElement,
	Line,
	Line2,
	Line3,
	RoadMapWrap,
	DetailList,
} from './RoadMap';

const RoadMap = () => {
	return (
		<RoadMapWrap>
			<RoadMapContainer>
				<Fade top>
					<Title>Squishy Squads Future!</Title>
				</Fade>
				<List>
					<TimeLineList>
						<Fade top>
							<Details>Exclusive Squishy Community</Details>
						</Fade>
						<IconElement>
							<Icon size={70} style={{ margin: -20 }} color={'dodgerblue'} />
							<Line />
						</IconElement>

						<Fade top>
							<Content>
								After minting, Squishy Squad holders will have exclusive access
								to a private channel. We will discuss NFT and crypto updates.
								Moreover, the Squad will create a tight-knit community with many
								events.
							</Content>
						</Fade>
					</TimeLineList>
				</List>
				<List>
					<TimeLineList>
						<Fade top>
							<Details>Squishy Games </Details>
						</Fade>
						<IconElement>
							<Icon size={70} style={{ margin: -20 }} color={'dodgerblue'} />
							<Line />
						</IconElement>
						<Fade top>
							<Content>
								Let's play! The Squishy Squad will be hosting exclusive weekly
								quiz games every other week. The winners will be awarded in
								Ethereum, Squishes, whitelists on other upcoming projects, or
								NFTs! The games will bring our entire community together in a
								fun and competitive way.
							</Content>
						</Fade>
					</TimeLineList>
				</List>
				<List>
					<TimeLineList>
						<Fade top>
							<Details>Squishy DAO</Details>
						</Fade>
						<IconElement>
							<Icon size={70} style={{ margin: -20 }} color={'dodgerblue'} />
							<Line2 />
						</IconElement>
						<Fade top>
							<Content>
								The DAO will create a community focused on deciding the
								direction of the Squishy Squad. We will collectively improve the
								expansion of the ecosystem and how best to integrate creativity
								into our WEB3 and NFT development. Our DAO structure will
								showcase the true power of decentralization. Ultimately, every
								squish will have a voice in our future.
							</Content>
						</Fade>
					</TimeLineList>
				</List>
				<List>
					<TimeLineList>
						<Fade top>
							<Details>Charitable Donations</Details>
						</Fade>
						<IconElement>
							<Icon size={70} style={{ margin: -20 }} color={'dodgerblue'} />
							<Line3 />
						</IconElement>
						<Fade top>
							<Content>
								The Squad will be donating $10,000 to HUGS! This donation will
								significantly help families in Hawaii facing the financial and
								emotional hardships of caring for a seriously ill child. For 39
								years, HUGS has served Hawaii children, ages birth to 21,
								diagnosed with life-threatening illnesses ranging from cancer,
								cardia issues, liver and kidney ailments, and chromosomal
								defects. The founding team was born and raised in the beautiful
								state of Hawaii and would love for our community to come
								together and support these challenged families. We also look
								forward to giving back to other charities and hosting charitable
								events in the future!
							</Content>
						</Fade>
					</TimeLineList>
				</List>
				<List>
					<TimeLineList>
						<Fade top>
							<Details>VIP Merch Store</Details>
						</Fade>
						<IconElement>
							<Icon size={70} style={{ margin: -20 }} color={'dodgerblue'} />
							<Line />
						</IconElement>
						<Fade top>
							<Content>
								We will have everything from shirts, shorts, hoodies, plushies,
								and more! Squishy Squad holders will receive a significant
								discount on these items. So you’re going to be rocking with some
								awesome Squishy Squad merch! Sales will go back into the
								community wallet.
							</Content>
						</Fade>
					</TimeLineList>
				</List>
				<List>
					<TimeLineList>
						<Fade top>
							<Details>Metal Prints</Details>
						</Fade>
						<IconElement>
							<Icon size={70} style={{ margin: -20 }} color={'dodgerblue'} />
							<Line />
						</IconElement>
						<Fade top>
							<Content>
								Members will be eligible to print one of their squishes on an
								incredibly clean metal print. These physical pieces are crafted
								for free; pay for shipping. Requirements for eligibility will be
								announced soon.
							</Content>
						</Fade>
					</TimeLineList>
				</List>
			</RoadMapContainer>
		</RoadMapWrap>
	);
};

export default RoadMap;

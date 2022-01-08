import React from 'react';
import { Collapse } from 'antd';
import './faq.css';
import { FaqContainer, Header, FaqWrap } from './faq.js';
import Fade from 'react-reveal/Fade';
const { Panel } = Collapse;

const Faq = () => {
	let transparent = 'transparent';
	let dodgerblue = '#3bb9ff';
	return (
		<>
			<FaqWrap>
				<Header>Frequently Asked Questions</Header>
				<FaqContainer>
					<Collapse
						bordered={false}
						style={{ width: 1100, backgroundColor: transparent }}
					>
						<Panel
							header="WHAT IS THE SQUISHY SQUAD"
							key="1"
							style={{
								fontSize: 20,
								paddingTop: 10,
								paddingBottom: 10,
								textColor: dodgerblue,
								color: 'transparent',
							}}
						>
							<p
								style={{
									paddingLeft: 24,
									fontSize: 20,
									width: 1100,
									paddingTop: 5,
									paddingBottom: 5,
								}}
							>
								The Squishy Squad is a collection of 8,888 dangerously cute
								squishes that live on the Ethereum blockchain. Each piece was
								thoroughly crafted, selectively chosen, and beautifully coded
								for our incredible community. Each squish is cute, goofy, and
								knows how to party like there’s no tomorrow.
							</p>
						</Panel>
						<Panel
							header="HOW CAN I GET A SQUISHY?"
							key="2"
							style={{ fontSize: 20, paddingTop: 10, paddingBottom: 10 }}
						>
							<p
								style={{
									paddingLeft: 24,
									fontSize: 20,
									paddingTop: 5,
									paddingBottom: 5,
								}}
							>
								We will be minting through our website on (TBD date). If you
								miss the mint we will be on Open Sea for secondary sales.
							</p>
						</Panel>
						<Panel
							header="IS THERE A WHITELIST"
							key="3"
							style={{ fontSize: 20, paddingTop: 10, paddingBottom: 10 }}
						>
							<p
								style={{
									paddingLeft: 24,
									fontSize: 20,
									paddingTop: 5,
									paddingBottom: 5,
								}}
							>
								Yes! Whitelist will be rewarded to active and friendly members.
								Please see our Discord announcements for more detail.
							</p>
						</Panel>
						<Panel
							header="WHAT IS THE MINTING PRICE OF THE SQUISHY SQUAD?"
							key="3"
							style={{ fontSize: 20, paddingTop: 10, paddingBottom: 10 }}
						>
							<p
								style={{
									paddingLeft: 24,
									fontSize: 20,
									paddingTop: 5,
									paddingBottom: 5,
								}}
							>
								TBA
							</p>
						</Panel>
						<Panel
							header="WHO IS PART OF THE TEAM?"
							key="3"
							style={{ fontSize: 20, paddingTop: 10, paddingBottom: 10 }}
						>
							<p
								style={{
									paddingLeft: 24,
									fontSize: 20,
									paddingTop: 5,
									paddingBottom: 5,
								}}
							>
								BentoBoi, Goof, and Ricecake. See the Team section below for our
								Twitters!
							</p>
						</Panel>
						<Panel
							header="WHEN WILL THE SQUISHY SQUAD DROP?"
							key="3"
							style={{ fontSize: 20, paddingTop: 10, paddingBottom: 10 }}
						>
							<p
								style={{
									paddingLeft: 24,
									fontSize: 20,
									paddingTop: 5,
									paddingBottom: 5,
								}}
							>
								We are launching our whitelist/pre-sale from 12/10 to 12/11, so
								our early access buyers will have about two days to claim their
								squishes. The public sale will begin on 12/12.
							</p>
						</Panel>
						<Panel
							header="HOW MANY SQUISHES WILL BE IN THE SQUAD?"
							key="3"
							style={{ fontSize: 20, paddingTop: 10, paddingBottom: 10 }}
						>
							<p
								style={{
									paddingLeft: 24,
									fontSize: 20,
									paddingTop: 5,
									paddingBottom: 5,
								}}
							>
								We will have a total of 8,888 unique squishies in our incredible
								squad!
							</p>
						</Panel>
						<Panel
							header="HOW MANY SQUISHES WILL BE HELD FOR MARKETING?"
							key="3"
							style={{ fontSize: 20, paddingTop: 10, paddingBottom: 10 }}
						>
							<p
								style={{
									paddingLeft: 24,
									fontSize: 20,
									paddingTop: 5,
									paddingBottom: 5,
								}}
							>
								There will be 100 squishes total. The breakdown is 30 for the
								founding team and 70 for marketing and other business purposes.
							</p>
						</Panel>
						<Panel
							header="WHAT IS THE UTILITY BEHIND THE SQUISHY SQUAD?"
							key="3"
							style={{ fontSize: 20, paddingTop: 10, paddingBottom: 10 }}
						>
							<p
								style={{
									paddingLeft: 24,
									fontSize: 20,
									paddingTop: 5,
									paddingBottom: 5,
								}}
							>
								Not only are we giving holders the basic utility that most
								projects give but we have a long-term goal in mind that will set
								us apart from the ordinary collections. With a large community
								fund, we plan on putting you first. The fund will be used to
								develop the road map such as physical and financial utility. See
								our roadmap for more info.
							</p>
						</Panel>
					</Collapse>
				</FaqContainer>
			</FaqWrap>
		</>
	);
};

export default Faq;

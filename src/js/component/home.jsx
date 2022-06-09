import React from "react";

import { Navbar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";

const Home = () => {
	let cardArray = [
		{
			title: "Choose Your Agent!",
			description:
				"There are 18 unique agents from places from all over the world with special abilitiesand different playstyles. Choose your favorite one!",
			imageURL:
				"https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/4/19/d1jrdrpou7hvstulfozq/valorant",
		},
		{
			title: "With 7 Playable Maps",
			description:
				"Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments.",
			imageURL:
				"https://cdn-wp.thesportsrush.com/2022/02/1ea1c024-valorant-maps.jpg",
		},
		{
			title: "Play With Friends!",
			description:
				"VALORANT hosts an in-game party chat where you can chat with your friends and have a lot of fun, invite them!",
			imageURL:
				"https://gamertweak.com/wp-content/uploads/2020/06/valorant-how-to-add-friends-1280x720.jpg",
		},
		{
			title: "A Secret Agent Is Hiding In The Shadows",
			description:
				"Log in to discover the secrets from the new agent 'Fade'... What could they be hiding?...",
			imageURL:
				"https://thegamehaus.com/wp-content/uploads/2022/04/VALORANT-Fade-Release-Date.jpg",
		},
	];

	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<Jumbotron />
				{cardArray.map((element) => (
					<Card
						imageURL={element.imageURL}
						title={element.title}
						description={element.description}
					/>
				))}
			</div>
			<Footer />
		</>
	);
};

export default Home;

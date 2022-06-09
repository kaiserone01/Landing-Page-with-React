import React from "react";

export const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">This is VALORANT</h1>
			<p className="lead">
				Valorant is a team-based first-person hero shooter set in the
				near future. Players play as one of a set of Agents, characters
				designed based on several countries and cultures around the
				world. In the main game mode, players are assigned to either the
				attacking or defending team with each team having five players
				on it. Weapons and ability charges can be purchased using an
				in-game economic system that awards money based on the outcome
				of the previous round, any kills the player is responsible for,
				and any objectives completed.
			</p>
			<p>
				Some say Valorant is the combination between Counter Strike:
				Global Ofensive and Overwatch... Play now to find out if you
				think the same!
			</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href="https://playvalorant.com/en-us/"
					target="_blank"
					role="button">
					Download Here!
				</a>
			</p>
		</div>
	);
};

import React from 'react';
import styled, { css } from 'styled-components';
import { media } from './styles/breakpoints';
import * as data from './data/data.json';

const Section = styled.section `
	flex: 1;
	margin-top: 10px;
	
	${media.tablet`
      margin-bottom: 0;
  	`};
`;

const DeathTable = styled.table`
	background-color: rgba(255, 255, 255, .9);
	border-collapse: collapse;
	table-layout: fixed;
    width: 100%;
    height: 100%;
`;	

const Header = styled.th`
	background-color: rgba(0, 0, 0, 0.1);
	padding: 5px 10px;
	font-weight: bold;
	height: 50px;
	vertical-align: middle;

	${props => props.hideMobile && css`
		display: none;
		
		${media.tablet`
			display: table-cell;	
		`};
	`};
`;

const Cell = styled.td`
	text-align: center;
	font-size: 1rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	vertical-align: middle;

	${media.tablet`
		display: table-cell;
	`};

	${props => props.hideMobile && css`
		display: none;
		
		${media.tablet`
			display: table-cell;
		`};
	`};
`;

const sortPlayers = players => {
    return players.sort((a, b) => {
        if (a.deaths < b.deaths) return 1;
        else if (a.deaths > b.deaths) return -1;
        else return 0;
    });
};  

const sortedPlayers = sortPlayers(data.players);

export default function DeathCounter(props) {
	return (
		<Section>
			<DeathTable>
				<tbody>
					<tr>
						<Header>Player</Header>
	                    <Header>Name</Header>
	                    <Header hideMobile>Race</Header>
	                    <Header hideMobile>Role</Header>
						<Header>☠️</Header>
					</tr>

					{sortedPlayers.map((player, index) => (
						<tr key={`death-row-${index}`}>
							<Cell>{player.player}</Cell>
							<Cell>{player.name}</Cell>
	                        <Cell hideMobile>{player.race}</Cell>
	                        <Cell hideMobile>
	                        	<ul>
	                        		{ player.spec.map((spec, index) => (
	                        			<li key={`player-spec-${index}`}> {spec} </li>
	                        		))}
	                        	</ul>
	                        </Cell>
							<Cell>{player.deaths}</Cell>
						</tr>
					))}
				</tbody>
			</DeathTable>
		</Section>
	);
}

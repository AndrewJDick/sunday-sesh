import React from 'react';
import styled from 'styled-components';
import * as data from './data/data.json';

const Section = styled.section `
	flex: 1;
`;

const DeathTable = styled.table`
	background-color: rgba(255, 255, 255, .8);
	border-collapse: collapse;
    width: 100%;
    height: 100%;
`;

const Header = styled.th`
	background-color: rgba(0, 0, 0, 0.1);
	padding: 5px 10px;
	font-weight: bold;
	height: 50px;
	vertical-align: middle;
`;

const Cell = styled.td`
	text-align: center;
	font-size: 1.25rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	padding: 5 10px;
	vertical-align: middle;
`;

const sortPlayers = players => {
    return players.sort((a, b) => {
        if (a.deaths.pve < b.deaths.pve) return 1;
        else if (a.deaths.pve > b.deaths.pve) return -1;
        else if (a.deaths.pvp < b.deaths.pvp) return 1;
        else if (a.deaths.pvp > b.deaths.pvp) return -1;
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
	                    <Header>Name</Header>
	                    <Header>Player</Header>
	                    <Header>Race</Header>
	                    <Header>Specialization</Header>
						<Header>☠️</Header>
					</tr>

					{sortedPlayers.map((player, index) => (
						<tr key={`death-row-${index}`}>
							<Cell>{player.name}</Cell>
	                        <Cell>{player.player}</Cell>
	                        <Cell>{player.race}</Cell>
	                        <Cell>{player.spec}</Cell>
							<Cell>{player.deaths}</Cell>
						</tr>
					))}
				</tbody>
			</DeathTable>
		</Section>
	);
}

import React from 'react';
import styled from 'styled-components';
import * as data from './data/data.json';

const DeathTable = styled.table`
	border-collapse: collapse;
    margin-top: 30px;
    width: 100%;
`;

const Header = styled.th`
	background-color: rgba(0, 0, 0, 0.1);
	padding: 5px 10px;
	font-weight: 500;
`;

const Cell = styled.td`
	text-align: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	padding: 5px 10px;
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
		<DeathTable>
			<tbody>
				<tr>
                    <Header>#</Header>
                    <Header>Name</Header>
                    <Header>Player</Header>
                    <Header>Race</Header>
					<Header>☠️</Header>
				</tr>

				{sortedPlayers.map((player, index) => (
					<tr key={`death-row-${index}`}>
						<Cell>{++index}</Cell>
						<Cell>{player.name}</Cell>
                        <Cell>{player.player}</Cell>
                        <Cell>{player.race}</Cell>
						<Cell>{player.deaths}</Cell>
					</tr>
				))}
			</tbody>
		</DeathTable>
	);
}

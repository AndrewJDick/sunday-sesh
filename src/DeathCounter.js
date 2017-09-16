import React from 'react';
import styled from 'styled-components';
import * as playerInfo from './data/players.json';

const DeathTable = styled.table`
	border-collapse: collapse;
	padding: 5px 0;
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

function generateData(data) {
    let rows = [];

    for (let player in data) {
        rows.push(data[player])
    }
} 

const sortPlayers = players => {
    return players.sort((a, b) => {
        if (a.deaths.pve < b.deaths.pve) return 1;
        else if (a.deaths.pve > b.deaths.pve) return -1;
        else if (a.deaths.pvp < b.deaths.pvp) return 1;
        else if (a.deaths.pvp > b.deaths.pvp) return -1;
        else return 0;
    });
};

const players = generateData(playerInfo);
const sortedPlayers = sortPlayers(players);

console.log(sortedPlayers);

export default function DeathCounter(props) {
	return (
		<DeathTable>
			{/* <tbody>
				<tr>
					<Header>Player</Header>
					<Header>PvP</Header>
					<Header>PvE</Header>
				</tr>

				{sortedPlayers.map((team, index) => (
					<tr key={`death-row-${index}`}>
						<Cell>{++index}</Cell>
						<Cell>{team.deaths.pvp}</Cell>
						<Cell>{team.played}</Cell>
						<Cell secondaryStats>{team.win}</Cell>
					</tr>
				))}
			</tbody> */}
		</DeathTable>
	);
}

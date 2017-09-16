import React from 'react';
import styled from 'styled-components';

const ChatBox = styled.iframe`
    width: 100%;
    background-color: rgba(255, 255, 255, .8);
`;

export default function StreamChat(props) {
	return (
		<ChatBox 
            frameBorder="0" 
            scrolling="yes" 
            id="chat_embed" 
            src="https://www.twitch.tv/funkrenegade/chat" 
            width="100%"
            height="100%">
        </ChatBox>
	);
}

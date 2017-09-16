import React from 'react';
import styled from 'styled-components';

const ChatBox = styled.iframe`
    background: red;
    width: 100%;
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

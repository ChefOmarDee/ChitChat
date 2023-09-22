// src/ChatApp.js
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001", {
	transports: ["websocket", "polling", "flashsocket"],
}); // Replace with your server URL

function Home2() {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");

	useEffect(() => {
		socket.on("chat message", (message) => {
			setMessages((prevMessages) => [...prevMessages, message]);
		});
	}, []);

	const sendMessage = () => {
		socket.emit("chat message", message);
		setMessage("");
	};

	return (
		<div>
			<ul>
				{messages.map((msg, index) => (
					<li key={index}>{msg}</li>
				))}
			</ul>
			<input
				type="text"
				placeholder="Type a message"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button onClick={sendMessage}>Send</button>
		</div>
	);
}

export default Home2;

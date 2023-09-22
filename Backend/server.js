const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const corsOptions = {
	origin: "http://localhost:3000/",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Use the cors middleware with the specified options
app.use(cors(corsOptions));

// Define a connection event
io.on("connection", (socket) => {
	console.log("A user connected");

	// Handle a custom event
	socket.on("chat message", (message) => {
		console.log(`Received message: ${message}`);

		// Broadcast the message to all connected clients
		io.emit("chat message", message);
	});

	// Handle disconnect event
	socket.on("disconnect", () => {
		console.log("A user disconnected");
	});
});

// Start the server
const PORT = 3001;
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

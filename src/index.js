const express = require('express')
const { Server } = require('socket.io')
const cors = require('cors')
require('dotenv').config();
const PORT = process.env.PORT
const http = require('http')
const { CronJob } = require('cron');
const { getRandomRevenueData } = require('./utils/api');



const app = express()

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        // origin: process.env.FRONTEND_URL,
        origin: "http://localhost:3000" //temporary
    },
    transports: ["websocket", "polling"],
});

io.on("connection", (socket) => {
    socket.emit("time", [])
    const job = new CronJob("*/5 * * * * *", async () => {
        const data = await getRandomRevenueData();
        socket.emit("time", data)
    })

    job.start();

    socket.on("disconnect", () => {
        job.stop();
    })
})

server.listen(PORT, () => {
    console.log(`Listening on Port:${PORT}`)
})
const express = require('express');
const Redis = require("ioredis");
const amqp = require('amqplib');

const app = express();
const port = 3000;

app.use(express.json());

let redisClient;
let rabbitmqChannel;

// Establish Redis and RabbitMQ connections at startup
(async () => {
    redisClient = new Redis();
    const rabbitmqConnection = await amqp.connect('amqp://127.0.0.1:5672');
    rabbitmqChannel = await rabbitmqConnection.createChannel();
    await rabbitmqChannel.assertQueue('my_queue');
    console.log('Connections to Redis and RabbitMQ established.');
})();

app.post('/send', async (req, res) => {
    const target = req.body.target;
    const count = req.body.count;

    if (!target || !count || (target !== 'redis' && target !== 'rabbitmq')) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    res.json({ message: `Sending ${count} messages to ${target}` });
    const startTime = Date.now();

    try {
        if (target === 'redis') {
            sendMessagesToRedis(count);
        } else if (target === 'rabbitmq') {
            await sendMessagesToRabbitMQ(count);
        }

        const endTime = Date.now();
        const elapsedMillis = endTime - startTime;
        console.log(`Sent ${count} messages to ${target} in ${elapsedMillis} milliseconds.`);
        // res.json({
        //     message: `Sent ${count} messages to ${target} in ${elapsedMillis} milliseconds.`,
        // });
    } catch (error) {
        console.log(error);
        // res.status(500).json({ error: 'An error occurred' });
    }
});

function sendMessagesToRedis(count) {
    for (let i = 1; i <= count; i++) {
        redisClient.lpush('my_queue', `Message ${i}`);
        console.log('instead data into redis ', i);
    }
}

async function sendMessagesToRabbitMQ(count) {
    for (let i = 1; i <= count; i++) {
        rabbitmqChannel.sendToQueue('my_queue', Buffer.from(`Message ${i}`));
        console.log('instead data into rabbitmq ', i);
    }
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

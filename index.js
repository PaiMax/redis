const redis = require('redis');


const client = redis.createClient();

// Error handling for the client
client.on('error', err => {
    console.error('Redis Client Error:', err);
});

// Set a key-value pair in Redis
client.set('name', 'nishwal', (err, reply) => {
    if (err) {
        console.error('Error setting key:', err);
    } else {
        console.log('Key set successfully:', reply);
    }
});

// Get the value of the 'name' key from Redis
client.get('name', (err, value) => {
    if (err) {
        console.error('Error getting value:', err);
    } else {
        console.log('Value:', value);
    }
});

const { createClient } = require('redis');

const pub = createClient({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT });
const sub = pub.duplicate();
pub.on('connect', () => console.log('pub Connected to Redis!'));
sub.on('connect', () => console.log('sub Connected to Redis!'));

sub.connect();
pub.connect();
module.exports = { pub, sub };

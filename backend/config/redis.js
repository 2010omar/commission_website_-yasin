const Redis = require('ioredis');

const redis = new Redis(process.env.REDIS_URL, {
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  maxRetriesPerRequest: 3,
});

const connectRedis = async () => {
  try {
    await redis.ping();
    console.log('Redis ping successful');
    return redis;
  } catch (error) {
    console.error('Redis connection error:', error.message);
    console.log('Continuing without Redis - caching disabled');
    return null;
  }
};

redis.on('error', (error) => {
  console.error('Redis error:', error.message);
});

redis.on('connect', () => {
  console.log('Redis connected');
});

module.exports = {
  redis,
  connectRedis,
};

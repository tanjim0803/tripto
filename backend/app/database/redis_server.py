import redis.asyncio as redis
from app.config import database_settings

redis_client = redis.Redis(
    host=database_settings.REDIS_HOST,
    port=database_settings.REDIS_PORT,
    db=database_settings.REDIS_DB,
)

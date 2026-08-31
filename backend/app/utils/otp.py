import random
from app.database.redis_server import redis_client


def get_random():
    return str(random.randint(100000, 999999))


def create_otp(email: str):
    otp = get_random()

    redis_key = f"otp:{email}"

    redis_client.setnx(redis_key, otp)

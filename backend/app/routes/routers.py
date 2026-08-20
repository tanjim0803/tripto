from fastapi import APIRouter
from app.routes.user import router as user_router

master_router = APIRouter(prefix="")

master_router.include_router(user_router)

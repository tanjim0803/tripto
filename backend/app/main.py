from fastapi import FastAPI
from app.routes.routers import master_router

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Welcome to Tripto App!"}


app.include_router(master_router)

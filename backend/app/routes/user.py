from fastapi import APIRouter, Form, File, UploadFile
from app.schemas.user import UserOut
from app.database.session import SessionDep
from pydantic import EmailStr
from app.services.user import user_services

router = APIRouter(prefix="/users", tags=["User"])


@router.post("/register", response_model=UserOut)
async def register_user(
    db: SessionDep,
    name: str = Form(...),
    email: EmailStr = Form(...),
    password: str = Form(...),
    image: UploadFile = File(...),
):

    return await user_services.create_user(db, name, email, password, image)

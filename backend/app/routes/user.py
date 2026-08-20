from fastapi import APIRouter, Form, File, UploadFile, status
from app.schemas.user import UserOut
from app.database.session import SessionDep
from pydantic import EmailStr
from app.services.user import user_services

router = APIRouter(prefix="/users", tags=["User"])


@router.post("/register", response_model=UserOut, status_code=status.HTTP_201_CREATED)
async def register_user(
    db: SessionDep,
    name: str = Form(...),
    email: EmailStr = Form(...),
    password: str = Form(...),
    image: UploadFile = File(...),
):

    return await user_services.create_user(db, name, email, password, image)


@router.post("/login")
async def login_with_email_password(db: SessionDep, email: EmailStr, password: str):
    return await user_services.sign_in_with_email_password(db, email, password)


@router.post("/refresh")
async def refresh(db: SessionDep, token: str):
    return await user_services.refresh_token(db, token)

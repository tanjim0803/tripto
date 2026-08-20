from fastapi import APIRouter, Form, File, UploadFile, status, Depends
from app.schemas.user import UserOut
from app.database.session import SessionDep
from pydantic import EmailStr
from app.services.user import user_services
from typing import Annotated
from app.dependencies.dependencies import get_current_user
from app.models.user import User
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter(prefix="/auth", tags=["User"])


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
async def login_with_email_password(
    db: SessionDep, form_data: Annotated[OAuth2PasswordRequestForm, Depends()]
):
    return await user_services.sign_in_with_email_password(
        db, form_data.username, form_data.password
    )


@router.post("/refresh")
async def refresh(db: SessionDep, token: str):
    return await user_services.refresh_token(db, token)


@router.get("/me", response_model=UserOut)
async def me(user: Annotated[User, Depends(get_current_user)]):
    return user

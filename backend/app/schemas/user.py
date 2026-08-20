from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    name: str
    email: EmailStr
    hashed_password: str
    image: str


class UserOut(BaseModel):
    name: str
    email: EmailStr
    image: str

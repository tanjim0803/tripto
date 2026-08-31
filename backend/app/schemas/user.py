from pydantic import BaseModel, EmailStr


class UserOut(BaseModel):
    name: str
    email: EmailStr
    image: str


class OTPRequest(BaseModel):
    email: EmailStr

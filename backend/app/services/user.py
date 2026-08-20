from fastapi import HTTPException, status, UploadFile
from app.models.user import User
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.utils.user import password_hash
from app.utils.file_upload import save_upload_file


class UserServices:
    async def get_user_by_id(self, db: AsyncSession, id: int):
        stmt = await db.execute(select(User).where(User.id == id))
        user = stmt.scalar_one_or_none()
        return user

    async def get_user_by_email(self, db: AsyncSession, email: str):
        stmt = await db.execute(select(User).where(User.email == email))
        user = stmt.scalar_one_or_none()
        return user

    async def create_user(
        self, db: AsyncSession, name: str, email: str, password: str, image: UploadFile
    ):
        user_exists = await self.get_user_by_email(db, email)

        if user_exists is not None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST, detail="User already exists!"
            )

        image_url = await save_upload_file(image, "users")

        new_user = User(
            name=name,
            email=email,
            hashed_password=password_hash(password),
            image=image_url,
        )

        db.add(new_user)
        await db.commit()
        db.refresh(new_user)

        return new_user


user_services = UserServices()

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure
This is a fullstack project with a decoupled architecture:
- `frontend/`: Next.js 16 application (App Router, TypeScript, Tailwind CSS 4).
- `backend/`: FastAPI application (Python, SQLAlchemy, PostgreSQL/asyncpg).

## Backend Commands
- Run Server: `cd backend && uvicorn app.main:app --reload`
- Migrations: `cd backend && alembic upgrade head`
- Install Deps: `cd backend && pip install -r requirements.txt`

## Frontend Commands
- Run Dev: `cd frontend && npm run dev`
- Build: `cd frontend && npm run build`
- Lint: `cd frontend && npm run lint`

## Architecture

### Backend (FastAPI)
The backend follows a layered service architecture:
- `app/main.py`: Application entry point.
- `app/routes/`: API endpoints (controllers). `routers.py` aggregates all route modules.
- `app/services/`: Business logic layer.
- `app/models/`: SQLAlchemy ORM models.
- `app/schemas/`: Pydantic models for request/response validation.
- `app/database/`: Database connection and session management.
- `app/dependencies/`: FastAPI dependencies (e.g., Auth, DB session).

### Frontend (Next.js)
- `src/app/`: App Router pages and layouts.
- `src/components/`: Organized into `ui/` (base components), `shared/` (reusable), and `home/` (page-specific).
- `src/lib/`: Utility functions.
- `src/types/`: TypeScript definitions.

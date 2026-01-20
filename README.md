# Auth System (Session-Based)
## Overview

This project implements a secure session-based authentication system with private user profiles.

The goal is to build authentication correctly, without premature RBAC or multi-tenant complexity.

## Features

Email + password authentication

Session-based login (HTTP-only cookies)

Private user profile

Profile bio edit

Secure password reset via email

Token hashing + expiry

Structural authorization (owner-only access)

## Tech Stack

Node.js

Express

PostgreSQL

EJS

bcrypt

nodemailer

## Authorization Model

This project uses structural authorization.

All profile routes are private

Users never provide user_id or username in requests

Controllers always act on the session user (req.user)

Cross-user access is impossible by design

## Core Routes

POST /login

POST /logout

GET /profile

GET /profile/bio/edit

POST /profile/bio/edit

POST /reset-request

POST /reset-password

## Password Reset Flow

User submits email

Random token is generated

Token is hashed and stored with expiry

Raw token is emailed to the user

User resets password using the valid token

Responses are always generic to prevent user enumeration.

## Environment Setup

Create .env file
```
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

SESSION_SECRET=your_session_secret

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password

BASE_URL=localhost:3000

```
## Installation & Run
Install dependencies
```
npm install

```
Run the app
```
npm start
```

## Security Notes

Passwords are hashed using bcrypt

Reset tokens are hashed before storage

Sessions are validated on every private route

Backend never trusts client-provided identifiers


# Expense Manager 
Backend for Expense Management System

## Authentication Endpoints

This API now supports user login with JWT authentication. Below are the relevant routes:

- `POST /api/users/register` – Register a new user
- `POST /api/users/login` – Log in with email and password. Returns `accessToken` and `refreshToken` in JSON response.

Protected routes should include the header:

```
Authorization: Bearer <accessToken>
```

A simple middleware `src/middlewares/auth.middleware.js` is provided to verify tokens.
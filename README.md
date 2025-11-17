# lh-ai-test

🚀 A Koa.js test project

## Description

This is a simple Koa.js API project with basic CRUD operations and middleware setup.

## Features

- ✅ Koa.js framework
- ✅ RESTful API endpoints
- ✅ Request logging
- ✅ Body parsing
- ✅ JSON response formatting
- ✅ Error handling
- ✅ Health check endpoint

## Prerequisites

- Node.js >= 14.0.0
- npm or yarn

## Installation

```bash
# Clone the repository
git clone https://github.com/SunlightLH/lh-ai-test.git

# Navigate to project directory
cd lh-ai-test

# Install dependencies
npm install
```

## Usage

### Development mode (with auto-reload)

```bash
npm run dev
```

### Production mode

```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Root
- **GET** `/`
  - Returns welcome message

### Health Check
- **GET** `/api/health`
  - Returns server health status

### Users
- **GET** `/api/users`
  - Returns list of users

- **POST** `/api/users`
  - Creates a new user
  - Request body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

## Example Usage

```bash
# Get all users
curl http://localhost:3000/api/users

# Create a new user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'

# Health check
curl http://localhost:3000/api/health
```

## Project Structure

```
lh-ai-test/
├── src/
│   └── app.js          # Main application file
├── .gitignore          # Git ignore rules
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## Dependencies

- **koa**: Web framework for Node.js
- **koa-router**: Router middleware for Koa
- **koa-bodyparser**: Body parsing middleware
- **koa-json**: JSON pretty-printed response middleware
- **koa-logger**: Development logging middleware

## Development Dependencies

- **nodemon**: Auto-restart server on file changes

## License

MIT

## Author

SunlightLH

---

**Note**: This is a test project for learning and demonstration purposes.

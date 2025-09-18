This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Project

#### HTTP Development Server (default)

#### HTTPS Development Server
To run the project with HTTPS on `local.something.com`:

1. Add the following line to your `/etc/hosts` file:
```
127.0.0.1 local.something.com
```

2. Run the HTTPS development server:
```bash
npm run dev:https
```

3. Open [https://local.something.com](https://local.something.com) with your browser.

**Note:** You'll see a security warning since we're using a self-signed certificate. Click "Advanced" → "Proceed to local.something.com" to continue.

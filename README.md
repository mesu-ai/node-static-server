# 🚀 Node.js Static File Server

A simple, secure, and efficient static file server built with Node.js and TypeScript.

## 📁 Project Structure

```
node-practice/
├── server.ts          # Main server file
├── package.json       # Node.js project config
├── tsconfig.json      # TypeScript config
├── readme.md          # This file
└── public/            # Static files directory
    ├── index.html     # Main webpage
    ├── styles.css     # CSS styling
    ├── script.js      # Client-side JavaScript
    └── assets/        # Images, fonts, etc. (optional)
        ├── images/
        └── fonts/
```

## ✨ Features

- **🔒 Secure**: Path traversal protection prevents access to files outside public directory
- **🎯 MIME Types**: Proper content-type headers for HTML, CSS, JS, images, and more
- **🔗 Query Parameters**: Handles URLs with query parameters correctly
- **📝 Error Handling**: Custom 404 pages and proper error responses
- **📊 Logging**: Request logging for debugging and monitoring
- **⚡ Fast**: Lightweight and efficient file serving

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Setup Steps

1. **Clone or create the project directory**
   ```bash
   mkdir node-practice
   cd node-practice
   ```

2. **Initialize the project**
   ```bash
   npm init -y
   ```

3. **Install dependencies**
   ```bash
   # TypeScript dependencies (development only)
   npm install --save-dev typescript ts-node @types/node
   
   # Optional: Development tools
   npm install --save-dev nodemon
   ```

4. **Create the required files** (see Project Structure above)

## 🚀 Usage

### Development Mode (TypeScript)
```bash
npm run dev
```

### Production Mode (JavaScript)
```bash
# First, build the TypeScript
npm run build

# Then start the server
npm start
```

### Alternative: Direct execution
```bash
# Using ts-node (development)
npx ts-node server.ts

# Using node (after compilation)
node server.js
```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start server in development mode with ts-node |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Start compiled JavaScript server |

## 🌐 Server Details

- **Port**: 3000 (configurable in server.ts)
- **Public Directory**: `./public/`
- **Default File**: `index.html`
- **Server URL**: http://localhost:3000

## 📄 Supported File Types

| Extension | MIME Type |
|-----------|-----------|
| `.html` | text/html |
| `.css` | text/css |
| `.js` | application/javascript |
| `.json` | application/json |
| `.png` | image/png |
| `.jpg/.jpeg` | image/jpeg |
| `.gif` | image/gif |
| `.svg` | image/svg+xml |
| `.ico` | image/x-icon |

## 🔧 Configuration

### Changing the Port
Edit `server.ts`:
```typescript
server.listen(3000, () =>  // Change 3000 to your desired port
  console.log("Server running at http://localhost:3000/")
);
```

### Adding New MIME Types
Edit the `mimeTypes` object in `server.ts`:
```typescript
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  // Add new types here
  '.pdf': 'application/pdf',
  '.txt': 'text/plain'
};
```

## 🛡️ Security Features

1. **Path Traversal Protection**: Prevents access to files outside the public directory
2. **URL Sanitization**: Normalizes paths and removes dangerous sequences
3. **Safe File Access**: Only serves files from the designated public directory

## 📝 Example Files

### Basic HTML (`public/index.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Static Site</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome!</h1>
    <script src="script.js"></script>
</body>
</html>
```

### Basic CSS (`public/styles.css`)
```css
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}
```

### Basic JavaScript (`public/script.js`)
```javascript
console.log('Hello from static server!');
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```
   Error: listen EADDRINUSE: address already in use :::3000
   ```
   - Solution: Change the port number or kill the process using port 3000

2. **TypeScript errors**
   ```
   Error: Cannot find module 'typescript'
   ```
   - Solution: Install TypeScript dependencies: `npm install --save-dev typescript ts-node @types/node`

3. **Files not found**
   ```
   404 - File Not Found
   ```
   - Solution: Ensure files are in the `public/` directory and paths are correct

### Debug Mode
Enable detailed logging by modifying the console.log statements in `server.ts`.

## 📚 Learning Resources

- [Node.js HTTP Module](https://nodejs.org/api/http.html)
- [Node.js File System](https://nodejs.org/api/fs.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [MIME Types Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created as a learning project for Node.js static file serving.

---

### 🎯 Quick Start Checklist

- [ ] Install Node.js
- [ ] Run `npm install`
- [ ] Create `public/index.html`
- [ ] Run `npm run dev`
- [ ] Visit http://localhost:3000
- [ ] Add your static files to `public/` directory

**Happy coding!** 🎉
# UnifiedCode - Real-time Code Collaboration Platform

![UnifiedCode](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-ISC-green)
![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)

A powerful real-time collaborative code editor that enables seamless teamwork on code projects with integrated communication and code execution capabilities.

**🌐 Live Demo:** [https://unified-code-client.vercel.app/](https://unified-code-client.vercel.app/)

---

## 🚀 Key Features

### **Real-Time Collaboration**
- **Live Code Editing** - Multiple users can edit the same file simultaneously with instant synchronization
- **Cursor Tracking** - See where your teammates are editing in real-time
- **Presence Awareness** - View active users and their editing status

### **Code Editor Capabilities**
- **Syntax Highlighting** - Support for 50+ programming languages with beautiful themes
- **Multiple Themes** - Dracula, GitHub, Monokai, Tokyo Night, and 20+ more
- **Customizable Settings** - Font families, font sizes, and language preferences
- **Auto-Language Detection** - Automatically detects and applies syntax highlighting based on file extension
- **Seamless File Management** - Create, edit, rename, and delete files in real-time across the team

### **File Operations**
- **Save & Download** - Save files locally or download your entire project as a ZIP
- **File Structure View** - Organized file tree for easy navigation
- **File Tabs** - Work with multiple files simultaneously

### **Communication**
- **Integrated Group Chat** - Communicate with team members without leaving the editor
- **Real-Time Messaging** - Instant message delivery to all connected users
- **User Online Status** - See who's currently online and active

### **Code Execution**
- **Built-in Code Runner** - Execute code directly from the editor
- **Multiple Languages Support** - Run code in JavaScript, Python, Java, C++, Ruby, Go, and 40+ more languages
- **Live Output Display** - See execution results instantly
- **Input/Output Handling** - Support for standard input and output

---

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework with TypeScript
- **CodeMirror** - Advanced code editor
- **Vite** - Lightning-fast build tool
- **Socket.io** - Real-time communication
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Socket.io** - WebSocket-based communication
- **TypeScript** - Type safety
- **Judge0 API** - Code execution engine

### Deployment
- **Vercel** - Frontend hosting

---

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- Modern web browser (Chrome, Firefox, Safari, or Edge)

---

## 🔧 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/vijay-kc/UnifiedCode.git
cd UnifiedCode
```

### 2. Install Dependencies

**Frontend:**
```bash
cd client
npm install
```

**Backend:**
```bash
cd server
npm install
```

---

## 🚀 Getting Started

### Development Mode

**Start the Backend Server:**
```bash
cd server
npm run dev
```
The server will run on `http://localhost:5050`

**Start the Frontend Development Server:**
```bash
cd client
npm run dev
```
The client will run on `http://localhost:5174`

### Production Build

**Frontend:**
```bash
cd client
npm run build
```

**Backend:**
```bash
cd server
npm run build
npm start
```

---

## 📖 Usage Guide

### Creating a Room
1. Open UnifiedCode in your browser
2. Enter a room ID (or let the system generate one)
3. Enter your username
4. Click "Join Room"

### Inviting Collaborators
- Share your room ID with team members
- They can join the same room to collaborate in real-time

### Editing Code
1. Create or open a file
2. Start typing - changes appear in real-time for all connected users
3. See other users' cursors as they navigate and edit

### Running Code
1. Select a language from the Settings panel or it auto-detects based on file extension
2. Write or paste your code
3. Click the **Run** button to execute
4. View output in the Output section

### Communicating
- Open the Chat panel on the sidebar
- Type messages and press Enter
- Chat messages are delivered to all users in the room

### Downloading Files
- Use the file menu to download individual files
- Or export the entire project as a ZIP

---

## 🌐 Environment Variables

### Backend (.env)
```
PORT=5050
JUDGE0_HOST=ce.judge0.com
```

### Frontend (auto-configured)
- API Base URL: `http://localhost:5050/api`

---

## 🏗️ Project Structure

```
UnifiedCode/
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── components/             # React components
│   │   ├── context/                # Context providers
│   │   ├── pages/                  # Page components
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── types/                  # TypeScript interfaces
│   │   ├── utils/                  # Utility functions
│   │   └── resources/              # Themes and fonts
│   └── package.json
├── server/                          # Backend Node.js application
│   ├── src/
│   │   ├── server.ts               # Main server file
│   │   └── types/                  # TypeScript interfaces
│   └── package.json
└── README.md
```

---

## 📱 Features in Detail

### Real-Time Synchronization
- Uses Socket.io WebSocket protocol for instant updates
- Supports multiple concurrent users in the same workspace
- Automatic conflict resolution for simultaneous edits

### Code Editor
- **50+ Languages** - JavaScript, Python, Java, C++, Go, Rust, Ruby, PHP, C#, and more
- **20+ Themes** - Choose from popular editor themes
- **Custom Fonts** - Space Mono, Fira Code, JetBrains Mono, and more
- **Adjustable Font Size** - 12px to 24px
- **Color Extension** - Inline color picker for web development

### Security
- Room-based isolation - Each room is independent
- WebSocket encryption support
- No persistent data storage - Sessions are ephemeral

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🐛 Known Issues

- Maximum file size: 10MB per file
- Recommended max users per room: 10 concurrent users
- Code execution timeout: 10 seconds per execution

---

## 📝 Roadmap

- [ ] User authentication and account system
- [ ] Persistent project storage
- [ ] Version control integration (Git)
- [ ] AI-powered code suggestions
- [ ] Code formatter and linter
- [ ] Debugger integration
- [ ] Mobile app support
- [ ] Custom domain support

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Vijay Kumar Chaurasiya**
- GitHub: [@vijay-kc](https://github.com/vijay-kc)
- Project: [UnifiedCode](https://github.com/vijay-kc/UnifiedCode)

---

## 🙏 Acknowledgments

- [Socket.io](https://socket.io/) - Real-time communication
- [CodeMirror](https://codemirror.net/) - Code editor
- [Judge0](https://judge0.com/) - Code execution API
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [React](https://react.dev/) - UI library

---

## 💬 Support

For issues, questions, or suggestions:
- Open an [Issue](https://github.com/vijay-kc/UnifiedCode/issues)
- Submit a [Pull Request](https://github.com/vijay-kc/UnifiedCode/pulls)

---



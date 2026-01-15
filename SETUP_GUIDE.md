# Secure AI Vault - Setup Guide

## ✅ Setup Complete!

Your project has been successfully set up with all dependencies installed for both client and server.

---

## 📋 Project Structure

```
Secure-AI-Vault/
├── client/              # React + TypeScript + Vite frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env            # Client environment variables
├── server/              # Node.js + Express backend
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   ├── package.json
│   └── .env            # Server environment variables
└── package.json         # Root package with scripts
```

---

## 🔧 Environment Variables

### Client (.env)
Location: `client/.env`

```env
VITE_API_URL=http://localhost:5000/api
```

✅ **Status**: Configured and ready

---

### Server (.env)
Location: `server/.env`

```env
PORT=5000
CLIENT_URL=http://localhost:3000
SHARE_BASE_URL=http://localhost:5000

# Firebase Configuration
PUBLIC_FIREBASE_API_KEY=AIzaSyDpo5L9XalRxAaiHoD6LWhEvTWEYZqW47w
PUBLIC_FIREBASE_AUTH_DOMAIN=ai-vault-a3c99.firebaseapp.com
PUBLIC_FIREBASE_PROJECT_ID=ai-vault-a3c99
PUBLIC_FIREBASE_STORAGE_BUCKET=ai-vault-a3c99.firebasestorage.app
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=924698501167
PUBLIC_FIREBASE_APP_ID=1:924698501167:web:be998a4ba811e07e1126da

# AI API Key
GEMINI_API_KEY=your_gemini_api_key
```

⚠️ **IMPORTANT**: You need to replace `GEMINI_API_KEY` with your actual API key!

---

## 🔑 Getting Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key
5. Replace `your_gemini_api_key` in `server/.env` with your actual key

---

## 🚀 Running the Application

### Option 1: Run Both Client & Server Together (Recommended)

```bash
npm run dev
```

This will start:
- **Backend** on `http://localhost:5000`
- **Frontend** on `http://localhost:3000` (or another port if 3000 is busy)

---

### Option 2: Run Separately

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

---

## 📦 Dependencies Installed

### Root Dependencies
- `concurrently` - Run multiple commands simultaneously
- `axios` - HTTP client

### Client Dependencies
- **Framework**: React 19, TypeScript, Vite
- **UI**: Tailwind CSS, shadcn/ui, Radix UI
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Firebase**: Authentication, Firestore, Storage
- **Icons**: Lucide React, React Icons
- **Utils**: Axios, Browser Image Compression

### Server Dependencies
- **Framework**: Express.js
- **AI**: Google Generative AI (Gemini)
- **Database**: Firebase Admin SDK
- **Security**: Helmet, CORS, Express Rate Limit
- **File Upload**: Multer
- **Utils**: dotenv, node-fetch

---

## 🎯 Key Features

- 🔐 **Authentication** via Firebase Auth
- 📸 **Multiple Input Methods**: Upload, Camera, Manual entry
- 🤖 **AI-Powered Extraction** using Gemini API
- 🏦 **Bank Categorization** with filtering
- 📋 **Copy Card Details** (secure - CVV never stored)
- 🔄 **Re-extraction** for failed attempts
- ⏳ **Skeleton Loaders** during processing
- 📱 **Responsive Design** for all devices

---

## 🔒 Security Notes

1. **CVV is NEVER extracted or stored** - This is by design for security
2. Firebase keys in the server `.env` are served dynamically to hide them from build output
3. Rate limiting is enabled on the backend
4. CORS is configured to only allow requests from the client URL

---

## 🛠️ Available Scripts

### Root Level
- `npm run dev` - Run both client and server
- `npm run client` - Run only client
- `npm run server` - Run only server
- `npm run install-all` - Install all dependencies

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests

### Server
- `npm run dev` - Start with nodemon (auto-reload)
- `npm start` - Start production server

---

## 📝 Next Steps

1. ✅ Dependencies installed
2. ✅ Environment files configured
3. ⚠️ **TODO**: Add your Gemini API key to `server/.env`
4. 🚀 Run `npm run dev` to start the application
5. 🌐 Open `http://localhost:3000` in your browser

---

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 or 3000 is already in use:
- Change `PORT` in `server/.env`
- Update `VITE_API_URL` in `client/.env` accordingly

### Firebase Connection Issues
- Verify all Firebase configuration values in `server/.env`
- Check Firebase project settings in the Firebase Console

### Gemini API Errors
- Ensure your API key is valid and has quota remaining
- Check the [Google AI Studio](https://makersuite.google.com/) for API status

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Gemini API Documentation](https://ai.google.dev/docs)

---

## 📄 License

MIT License - See LICENSE file for details

---

**Happy Coding! 🎉**

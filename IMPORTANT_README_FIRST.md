# ⚠️ IMPORTANT: Required Environment Variable

## 🔑 Gemini API Key Required

Before running the application, you **MUST** add your Gemini API key to the server environment file.

### Steps:

1. **Get your API key:**
   - Visit: https://makersuite.google.com/app/apikey
   - Sign in with your Google account
   - Click "Create API Key"
   - Copy the generated key

2. **Add to server/.env:**
   - Open: `server/.env`
   - Find the line: `GEMINI_API_KEY=your_gemini_api_key`
   - Replace `your_gemini_api_key` with your actual key

3. **Example:**
   ```env
   GEMINI_API_KEY=AIzaSyABCDEFGHIJKLMNOPQRSTUVWXYZ1234567
   ```

### Current Status:
- ✅ All dependencies installed
- ✅ Client environment configured
- ✅ Server environment configured (except Gemini API key)
- ⚠️ **ACTION REQUIRED**: Add your Gemini API key

---

## 🚀 After Adding the API Key:

Run the application:
```bash
npm run dev
```

Then open your browser to:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

---

**See SETUP_GUIDE.md for complete documentation**

# 🚀 PitchPilot — AI-Powered Pitch Content Generator

PitchPilot helps startups and sales teams **generate cold emails, pitch deck outlines, and one-pagers** in seconds using powerful LLMs like **LLaMA 3 via Groq API**. Just select a company, input your product info, and boom — personalized outreach content, ready to send!

---

## 📦 Features

- ✉️ Cold Email Generator
- 📊 Pitch Deck Outline (Problem → Solution → Opportunity)
- 📄 One-Pager (Problem, Solution, CTA)
- 🧠 Powered by Groq's lightning-fast LLaMA 3 model
- 🎯 Tailored for B2B SaaS sales and partnerships
- 📡 Django REST API backend
- 🖥️ Frontend-ready JSON response format

---

## 📁 Project Structure

pitchpilot/
│
├── backend/
│   ├── api/
│   │   ├── views.py   # /generate/ endpoint logic
│   │   └── urls.py    # API routing
│   ├── .env           # API keys stored here
│   ├── requirements.txt
│   └── ...
│
├── frontend/          # (Optional: If you're building separately)
│   └── ...
└── README.md

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pitchpilot.git
cd pitchpilot/backend
```

### 2. Create a virtual environment and install dependencies

```bash
python -m venv venv
# On Unix/macOS:
source venv/bin/activate
# On Windows:
venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Set up `.env` file with your Groq API key

Create a `.env` file in the `backend/` directory and add:

```
GROQ_API_KEY=your-groq-api-key
```

### 4. Run the Django server

```bash
python manage.py runserver
```

---

## 🛠️ Usage

- Send a POST request to `/api/generate-content/` with JSON body:
  ```json
  {
    "product_name": "SuperWidget",
    "description": "A widget that automates business tasks.",
    "audience": "Small business owners",
    "goal": "Book a demo",
    "company": {
      "name": "Acme Corp",
      "category": "Technology",
      "size": "50-100",
      "description": "We build productivity tools.",
      "contact": "info@acme.com"
    }
  }
  ```
- The API will return a JSON with `cold_email`, `pitch_deck_outline`, and `one_pager`.

---

## 🧩 Customization & Extensibility

- You can swap out the LLM provider (Groq/OpenAI/HuggingFace) by updating `views.py`.
- Add authentication, rate limiting, or logging as needed.
- Easily connect a frontend (React, Vue, etc.) to the API.

---

## 🤝 Contributing

Pull requests and issues are welcome!

---

##
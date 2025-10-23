# Contact List React App

A simple and responsive **Contact List Application** built using **React (Vite)**.  
This project was developed as part of a frontend assignment to demonstrate component-based design, API-like data handling, and clean UI/UX implementation.

---

## 🚀 Live Demo
You can check out the deployed app here:  
👉 [Contact List App on Vercel](https://contact-list-react-page-4u0d828ap.vercel.app)

---

## 🧠 Objective
The goal of this project is to build a single-page web application that allows users to:
1. **View** a list of contacts.
2. **Search** contacts by name using a search bar.
3. *(Optional)* **Add** a new contact dynamically.

---

## 🛠️ Tech Stack
- **React (Vite)** – for fast development and component-based UI.
- **HTML5 & CSS3** – for layout and styling.
- **JavaScript (ES6+)** – for app logic and interactivity.
- **Vercel** – for deployment and hosting.

---

## ⚙️ Features
- 🔍 **Search by name:** Filters contacts dynamically as you type.  
- 👥 **Contact listing:** Displays each contact’s name, email, and phone in a clean card layout.  
- ➕ **Add contact (optional):** Allows adding a new contact to the list (stored in-memory).  
- 💡 **Responsive design:** Works well on both desktop and mobile screens.  
- 🧩 **Component-based structure:** Each feature (list, search, add) is modular and reusable.

---

## 🧩 Folder Structure
Contact_List_React_app/
│
├── src/
│ ├── components/
│ │ ├── ContactList.jsx
│ │ ├── ContactCard.jsx
│ │ └── SearchBar.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── data.js
│
├── public/
│ └── index.html
│
├── package.json
└── vite.config.js

yaml
Copy code

---

## 🧭 How to Run Locally
Follow these simple steps to set up and run the project on your system:

```bash
# 1. Clone this repository
git clone https://github.com/DeepakGaut/Contact_List_React_app.git

# 2. Go inside the project folder
cd Contact_List_React_app

# 3. Install dependencies
npm install

# 4. Run the app locally
npm run dev
The app will be live on: http://localhost:5173/

🧱 Design Choices
Clean and minimal layout with intuitive interaction.

Kept logic modular — Search, List, and Add components are independent.

Hardcoded JSON-like data simulates API fetching to focus on UI behavior.

Maintains readability and simplicity for easy maintenance.

🔍 Assumptions
Contacts are stored locally (not persisted to a backend).

Search is case-insensitive.

Basic validation is applied when adding new contacts.

👨‍💻 Author
Deepak Gautam
📧 imdeepakgautam@gmail.com

🏁 Deployment
Deployed using Vercel
Build command: vite build
Output directory: dist

📄 License
This project is open-sourced under the MIT License.

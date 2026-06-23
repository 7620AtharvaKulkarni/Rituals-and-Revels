# Rituals & Revels - Event Management System

Rituals & Revels is a premium, fully responsive, and feature-rich Event Management System designed to help users plan, customize, and coordinate traditional, corporate, festive, and casual celebrations. The system provides users with seamless navigation to discover event offerings, read details, contact coordinates, meet the planning team, and join the platform as a guest or service provider.

## 🚀 Live Preview
The frontend of this repository is configured for public staging and can be previewed live:
👉 **[Live Preview on GitHub Pages](https://rushikesh5102.github.io/Rituals-and-Revels/Frontend/index.html)**

---

## 📸 Interface Preview
Here is a highlight of the premium, fully responsive interfaces designed for desktop and mobile viewports:

| Desktop Home View | Collapsed Mobile View | Expanded Mobile Nav |
| :---: | :---: | :---: |
| ![Desktop View](screenshots/homepage_desktop.png) | ![Mobile View Collapsed](screenshots/homepage_mobile.png) | ![Mobile Menu Expanded](screenshots/homepage_mobile_expanded.png) |

---

## 🛠️ Technology Stack
The application is structured into a clean decoupled architecture separating visual client pages from data backend layers:

### Frontend (Client-side)
- **HTML5 & Semantic Elements**: Built for SEO compliance and search hierarchy.
- **Vanilla CSS3 & Custom Variables**: Premium custom layouts, transitions, custom scrollbar styling, and high-quality typography.
- **JavaScript (ES6)**: Slideshow controller, search database matching, form verification, DOM animation handlers, and reactive Hamburger Menu toggles.
- **FontAwesome v6**: Elegant visual iconography across pages.

### Backend (Server-side & Database)
- **Node.js**: Asynchronous runtime environment.
- **Express.js**: REST API routing, route controller middleware, and header parsing.
- **MongoDB & Mongoose**: Custom Schemas for users (JWT Auth roles) and message models.
- **JSON Web Tokens (JWT) & BcryptJS**: Encrypted hashing and tokenized security.
- **Dotenv**: Centralized secrets storage.

---

## 📂 Codebase Directory Structure
The repository follows a clean, industry-standard structure, separating layout assets from server routines:

```directory
Rituals_and_Revels/
│
├── Backend/                   # Node/Express API Server
│   ├── config/                # Database configurations (MongoDB)
│   ├── controllers/           # Route handler controllers (Auth, Events, Messages)
│   ├── middleware/            # Security & JWT Authentication middleware
│   ├── models/                # Database Schema models (User, Message, Event)
│   ├── routes/                # Express routing rules
│   ├── server.js              # Server boot-up entry file
│   └── package.json           # Backend dependency lock
│
├── Frontend/                  # User Interface assets
│   ├── css/                   # Unified stylesheets
│   │   ├── style.css          # Core template, header, footer, scrollbar
│   │   ├── responsive.css     # Common media queries for mobile/tablets
│   │   ├── about.css          # About page specifics
│   │   ├── contact.css        # Contact page layouts & maps
│   │   ├── event-details.css  # Detailed event packages
│   │   ├── event-list.css     # Event search grids
│   │   ├── team.css           # Interactive team cards & animations
│   │   └── styles.css         # Auth form styling
│   │
│   ├── js/                    # Client logic handlers
│   │   ├── main.js            # Slideshow loop & Hamburger Nav handler
│   │   ├── event-list.js      # Server API fetcher
│   │   ├── event-form.js      # Server API poster
│   │   └── script.js          # Forms verification
│   │
│   ├── images/                # Optimised visual assets & photos
│   │
│   ├── index.html             # Homepage
│   ├── about.html             # About Us
│   ├── contact.html           # Contact Form & Interactive Map
│   ├── event-details.html     # Expandable Event Categories
│   ├── event-list.html        # Upcoming Events Search
│   ├── team.html              # Strategic Planning Team Gallery
│   └── login-registration.html# Account creation page
│
├── screenshots/               # Interface preview files
├── .gitignore                 # Secure Git file ignore configurations
└── README.md                  # Project overview document
```

---

## 🌟 Key Features
1. **Collapsible Hamburger Menu**: A fully custom-built navigation header that wraps into an interactive overlay on devices below 768px.
2. **Elegant Slideshow Hero**: Seamlessly transitions event showcases automatically every 5 seconds.
3. **Responsive Galleries**: Cards (Work gallery, Team list, Events cards) stack into columns on mobile viewports for fluid scanning.
4. **Interactive Map Coordinates**: A Google Maps iframe showing physical address coordinates on Pune.
5. **Modern Custom Scrollbars**: Enhanced scroll indicators styled with thematic accent colors.
6. **Robust Auth Validations**: Clean front-end password matching, validation routines, and popups.
7. **Clean Directory Restructure**: Categorized CSS, JS, and image directories to prevent path conflicts.

---

## 💻 Local Setup & Development

### Prerequisite
Make sure you have Node.js and MongoDB installed on your local machine.

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install standard node modules:
   ```bash
   npm install
   ```
3. Configure your local `.env` variables:
   ```env
   MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/rituals_revels
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
4. Boot up the server locally:
   ```bash
   npm start
   ```

### Frontend Setup
1. The frontend relies on native browser modules. You can launch `Frontend/index.html` directly in the browser or serve it using Visual Studio Code Live Server on Port `5501` to preview all links.


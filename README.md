# Visa Navigator Portal 🌍

A user-friendly Visa Navigator Portal that simplifies the process of checking visa requirements, applying for visas online, and tracking applications. Built with React.js, Node.js, MongoDB, and Firebase.

## 🌟 Features

- **Visa Information:** Search and browse detailed visa requirements for various countries.
- **Dynamic Application:** Apply for visas online and track application statuses with ease.
- **Secure Authentication:** User registration, login, and Google OAuth for quick access.
- **Protected Routes:** Private routes for adding visas and managing user-specific applications.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.

## 🔗 Live Demo

[Live Website]()

## 🚀 Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Authentication
- **Hosting:** Netlify (Client) & Vercel (Server)

## 📂 Folder Structure
```visa-navigator/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── Home/
│   │   │   ├── Banner.jsx
│   │   │   ├── LatestVisas.jsx
│   │   │   ├── ExtraSection1.jsx
│   │   │   └── ExtraSection2.jsx
│   │   ├── Visa/
│   │   │   ├── VisaCard.jsx
│   │   │   └── VisaDetailsModal.jsx
│   │   ├── Auth/
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   └── Modals/
│   │       ├── ToastNotification.jsx
│   │       └── ApplyVisaModal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AllVisas.jsx
│   │   ├── AddVisa.jsx
│   │   ├── MyAddedVisas.jsx
│   │   ├── MyVisaApplications.jsx
│   │   ├── VisaDetails.jsx
│   │   ├── Login.jsx
|   │   ├── Register.jsx
│   │   └── NotFound.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── VisaContext.jsx
│   ├── hooks/
│   │   ├── useAuth.jsx
│   │   └── useVisa.jsx
│   ├── services/
│   │   ├── api/
│   │   │   ├── visaService.js
│   │   │   └── authService.js
│   │   └── firebase/
│   │       └── firebase.config.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── Navbar.css
│   │   ├── Banner.css
│   │   ├── Footer.css
│   │   ├── Forms.css
│   │   └── Cards.css
│   ├── App.jsx
│   ├── index.js
│   ├── routes/
│   │   └── Routes.jsx
│   └── utils/
│       ├── formatDate.js
│       ├── calculateAge.js
│       └── validations.js
├── .env
├── package.json
└── README.md
```

## 🛠 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mozaddedalfeshani/visa-navigator.git
   cd visa-navigator
   ```

## 📝 Key Functionality

- **Home Page:**
  - Banner slider
  - Latest visas section with 6 newest visa cards
  - Extra informative sections

- **Add Visa:**
  - Private/protected route
  - Form to add visa details including country image, visa type, required documents, fee, etc.

- **All Visas Page:**
  - Displays all visas in a grid layout with "See Details" functionality.

- **Visa Details Page:**
  - Shows complete information about a visa.
  - "Apply for Visa" button with a modal form.

- **Authentication:**
  - Login, Register, and Google OAuth support.
  - Password validation for security.

## 🙌 Contributing

    Contributions are welcome! Feel free to fork the repository and submit pull requests.

## 📄 License

    This project is licensed under the MIT License.
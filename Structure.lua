public/
│
├── about.css
├── about.html
├── contact.css
├── contact.html
│   ├── contact.js           # JavaScript file to handle form submission for messages
├── event-details.css
├── event-details.html
├── event-list.css
├── event-list.html
├── index.html
├── login-registration.html
│   ├── login-registration.js # JavaScript to handle login form
├── M.I.S_Logo.png
├── main.js
├── Responsive.css
├── script.js
├── style.css
├── styles.css
├── team.css
└── team.html

backend/
│
├── controllers/               # Controllers for handling logic
│   ├── authController.js      # Handle registration and login logic
│   ├── messageController.js   # Handle message form submissions
│
├── models/                    # Database models (schemas)
│   ├── userModel.js           # User model for storing login data
│   ├── messageModel.js        # Message model for storing messages from contact form
│
├── routes/                    # API routes
│   ├── authRoutes.js          # Routes for login/registration
│   ├── messageRoutes.js       # Routes for submitting and retrieving messages
│
├── config/                    # Configuration files for database connection
│   └── db.js                  # MongoDB connection setup
│
├── public/                    # Static files for front-end (same as public above)
│   └── css/
│   └── uploads/
│
├── app.js                     # Main entry point to start the app
└── package.json               # Project dependencies and scripts




3. Database Structure (MongoDB)
We will use MongoDB to store users (for login data) and messages (from the contact form).

MongoDB Collections:
Users Collection (users)
Stores user information like email, password (hashed), and role.

js
Copy code
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, default: 'user' }, // role can be 'user' or 'admin'
});

const User = mongoose.model('User', userSchema);
module.exports = User;
Messages Collection (messages)
Stores messages submitted through the contact form.

js
Copy code
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
4. Backend Logic
1. MongoDB Configuration (config/db.js)
The db.js file handles the connection to MongoDB.

js
Copy code
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rituals_revels', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));
2. Controllers:
authController.js: Handles user registration, login, and authentication.
js
Copy code
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Error registering user' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user._id }, 'your_secret_key');
  res.status(200).json({ token });
};
messageController.js: Handles saving messages from the contact form.
js
Copy code
const Message = require('../models/messageModel');

exports.submitMessage = async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Error saving message' });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching messages' });
  }
};
3. Routes:
authRoutes.js: Routes for user login and registration.
js
Copy code
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
messageRoutes.js: Routes for submitting and fetching messages.
js
Copy code
const express = require('express');
const router = express.Router();
const { submitMessage, getMessages } = require('../controllers/messageController');

router.post('/message', submitMessage);
router.get('/messages', getMessages);

module.exports = router;
5. Main Server File (app.js)
This is where we combine everything—routes, middleware, and starting the server.

js
Copy code
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const cors = require('cors');

require('./config/db');  // Connect to MongoDB

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', messageRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
6. Frontend JavaScript for Contact Form (contact.js)
You will need to write JavaScript to handle form submission and send the message data to the backend.

js
Copy code
document.querySelector('#contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  const response = await fetch('/api/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  });

  const result = await response.json();
  if (response.ok) {
    alert('Message sent successfully!');
  } else {
    alert('Error: ' + result.error);
  }
});
7. Database Configuration
In MongoDB, we will have:

users collection for storing login data.
messages collection for storing contact form submissions.
Conclusion:
This structure gives you a complete backend system for handling:

User Registration and Login using JWT authentication.
Contact Form Submissions storing the user's messages.
A simple MongoDB database setup to store this data.
Let me know if you'd like help with setting up any part of this system, or if you'd like further clarification!
// controllers/messageController.js
const Message = require('../models/messageModel');

// Submit message
const submitMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new message
    const newMessage = new Message({
      name,
      email,
      message,
    });

    // Save the message
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all messages (optional)
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { submitMessage, getMessages };

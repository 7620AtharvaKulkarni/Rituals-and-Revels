// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

// Public Routes
router.get('/', getEvents); // Get all events
router.get('/:id', getEventById); // Get a single event by ID

// Protected Routes (only accessible to logged-in users)
router.post('/', authMiddleware, createEvent); // Create a new event
router.put('/:id', authMiddleware, updateEvent); // Update an event
router.delete('/:id', authMiddleware, deleteEvent); // Delete an event

module.exports = router;

// controllers/eventController.js
const Event = require('../models/eventModel');

// Create a new event
const createEvent = async (req, res) => {
  const { name, date, location, description, image } = req.body;

  try {
    const newEvent = new Event({ name, date, location, description, image });
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating event' });
  }
};

// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching events' });
  }
};

// Get a single event by ID
const getEventById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching event' });
  }
};

// Update an event
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, date, location, description, image } = req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      id, 
      { name, date, location, description, image }, 
      { new: true }
    );
    if (!updatedEvent) return res.status(404).json({ message: 'Event not found' });
    res.json({ message: 'Event updated successfully', event: updatedEvent });
  } catch (err) {
    res.status(500).json({ message: 'Error updating event' });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) return res.status(404).json({ message: 'Event not found' });
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting event' });
  }
};

module.exports = { createEvent, getEvents, getEventById, updateEvent, deleteEvent };

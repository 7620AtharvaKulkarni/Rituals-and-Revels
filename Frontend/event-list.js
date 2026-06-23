// frontend/event-list.js
const getEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/events');
      const data = await response.json();
      console.log(data); // Display the events on the page
    } catch (err) {
      console.error('Error fetching events:', err);
    }
  };
  
  getEvents();
  
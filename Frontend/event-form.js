// frontend/event-form.js
const submitEvent = async (eventData) => {
    try {
      const token = localStorage.getItem('authToken'); // Assume token is stored in localStorage
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      });
      const data = await response.json();
      console.log(data); // Event creation success or failure
    } catch (err) {
      console.error('Error submitting event:', err);
    }
  };
  
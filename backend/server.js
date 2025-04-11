const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const quizRoutes = require('./routes/quizRoutes'); // Quiz routes import

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/marketingsecure', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection successful'))
  .catch(err => console.log('MongoDB connection failed:', err));

// Routes
app.use('/api/quiz', quizRoutes); // Register quiz routes

// Default route for server test
app.get('/', (req, res) => {
  res.send('Server is running and connected to MongoDB!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
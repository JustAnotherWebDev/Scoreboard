require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Scoreboard = require('./models/Scoreboard');
const id = process.env.SCOREBOARD_ID;
const port = process.env.PORT || 3000;

const app = express();
app.use(cors({ origin: `${process.env.FRONTEND_URL}scoreboard` }));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    });
  }).catch((error) => {
    console.log(`[MONGOOSE] ${error}`);
    res.status(500).json({ message: error.message });
  });

// READ TEST 
app.get('/', async (req, res) => {
  res.send("Hello world");
});

// UPDATE SCOREBOARD
app.put('/scoreboard', async (req, res) => {
  try {
    const scoreboard = await Scoreboard.findByIdAndUpdate(id, req.body);
    if (!scoreboard) return res.status(404).json({ message: `[PUT scoreboard] Cannot find a scoreboard with the following id: ${id}` });
    res.status(200).json({ message: `Successfully updated the scoreboard with the following id: ${id}` });
  } catch (error) {
    console.log(`[PUT scoreboard] ${error}`);
    res.status(500).json({ message: error.message });
  }
});

// READ SCOREBOARD 
app.get('/scoreboard', async (req, res) => {
  try {
    const data = await Scoreboard.findById(id);
    res.status(200).json(data);
  } catch (error) {
    console.log(`[GET scoreboard] ${error}`);
    res.status(500).json({ message: error.message });
  }
});

// READ PLAYER1
app.get('/scoreboard/player1', async (req, res) => {
  try {
    const data = await Scoreboard.findById(id);
    res.status(200).json(data.player1);
  } catch (error) {
    console.log(`[GET player1] ${error}`);
    res.status(500).json({ message: error.message });
  }
});

// READ SOCIAL1
app.get('/scoreboard/social1', async (req, res) => {
  try {
    const data = await Scoreboard.findById(id);
    res.status(200).json(data.social1);
  } catch (error) {
    console.log(`[GET social1] ${error}`);
    res.status(500).json({ message: error.message });
  }
});

// READ SCORE1
app.get('/scoreboard/score1', async (req, res) => {
  try {
    const data = await Scoreboard.findById(id);
    res.status(200).json(data.score1);
  } catch (error) {
    console.log(`[GET score1] ${error}`);
    res.status(500).json({ message: error.message });
  }
});

// READ PLAYER2
app.get('/scoreboard/player2', async (req, res) => {
  try {
    const data = await Scoreboard.findById(id);
    res.status(200).json(data.player2);
  } catch (error) {
    console.log(`[GET player2] ${error}`);
    res.status(500).json({ message: error.message });
  }
});

// READ SOCIAL2
app.get('/scoreboard/social2', async (req, res) => {
  try {
    const data = await Scoreboard.findById(id);
    res.status(200).json(data.social2);
  } catch (error) {
    console.log(`[GET social2] ${error}`);
    res.status(500).json({ message: error.message });
  }
});

// READ SCORE2
app.get('/scoreboard/score2', async (req, res) => {
  try {
    const data = await Scoreboard.findById(id);
    res.status(200).json(data.score2);
  } catch (error) {
    console.log(`[GET score2] ${error}`);
    res.status(500).json({ message: error.message });
  }
});

// READ ROUND
app.get('/scoreboard/round', async (req, res) => {
  try {
    const data = await Scoreboard.findById(id);
    res.status(200).json(data.round);
  } catch (error) {
    console.log(`[GET round] ${error}`);
    res.status(500).json({ message: error.message });
  }
});

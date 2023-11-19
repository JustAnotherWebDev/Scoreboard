const mongoose = require('mongoose');

const ScoreboardSchema = mongoose.Schema(
  {
    player1: {
      type: String,
      required: true
    },
    social1: {
      type: String,
      required: false
    },
    score1: {
      type: Number,
      required: true
    },
    player2: {
      type: String,
      required: true
    },
    social2: {
      type: String,
      required: false
    },
    score2: {
      type: Number,
      required: true
    },
    round: {
      type: String,
      required: true
    }
  }
);

const Scoreboard = mongoose.model('Scoreboard', ScoreboardSchema);

module.exports = Scoreboard;
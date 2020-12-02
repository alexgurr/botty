const express = require('express');
const cors = require('cors');

// Utils
const { getRandomDelay, getBotResponse, parseResponseDataset } = require('./utils');

// Constants
const {
  RESPONSES_FILE_PATH,
  USER_MESSAGE_EVENT,
  BOT_MESSAGE_EVENT,
  BOT_TYPING_EVENT,
  DEFAULT_RESPONSE,
  DEFAULT_RESPONSE_MATCH_THRESHOLD,
  MIN_TYPING_S,
  MAX_TYPING_S,
  MIN_NATURAL_PAUSE_S,
  MAX_NATURAL_PAUSE_S
} = require('./constants');

const app = express();
const http = require('http').createServer(app);
const router = express.Router();
const io = require('socket.io')(http);

const PORT = process.env.PORT || 4001;

let botResponses = null;

app.use(router);
app.use(cors({ origin: '*' }));

io.on('connection', (socket) => {
  socket.on(USER_MESSAGE_EVENT, (message) => {
    setTimeout(() => {
      socket.emit(BOT_TYPING_EVENT);

      setTimeout(() => {
        socket.emit(
          BOT_MESSAGE_EVENT,
          getBotResponse(message, botResponses, DEFAULT_RESPONSE, DEFAULT_RESPONSE_MATCH_THRESHOLD)
        );
      }, getRandomDelay(MIN_TYPING_S, MAX_TYPING_S));

    }, getRandomDelay(MIN_NATURAL_PAUSE_S, MAX_NATURAL_PAUSE_S));
  });
});

parseResponseDataset(RESPONSES_FILE_PATH).then(parsedResponses => {
  botResponses = parsedResponses;
});

http.listen(PORT, () => {
  console.log(`Botty server listening on *:${PORT} 🚀`);
});

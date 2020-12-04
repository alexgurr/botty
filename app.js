const express = require('express');
const cors = require('cors');

// Utils
const { getRandomDelay, getBotResponse, parseResponseDataset } = require('./utils');

// Constants
const {
  PORT,
  RESPONSES_FILE_PATH,
  USER_MESSAGE_EVENT,
  BOT_MESSAGE_EVENT,
  BOT_TYPING_EVENT,
  MIN_TYPING_S,
  MAX_TYPING_S,
  MIN_NATURAL_PAUSE_S,
  MAX_NATURAL_PAUSE_S
} = require('./constants');

const app = express();
const http = require('http').createServer(app);
const router = express.Router();
const io = require('socket.io')(http);

let botResponses = null;

app.use(router);
app.use(cors({ origin: '*' }));
app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('Connected to a socket.');
  socket.on(USER_MESSAGE_EVENT, (message) => {
    console.log('Got user event');
    setTimeout(() => {
      // Don't emit a typing event if we've set typing seconds to 0
      if(MAX_TYPING_S) { socket.emit(BOT_TYPING_EVENT); }

      setTimeout(() => {
        socket.emit(
          BOT_MESSAGE_EVENT,
          getBotResponse(message, botResponses)
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

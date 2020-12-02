const PORT = process.env.PORT || 4001;
const RESPONSES_FILE_PATH = './response_dataset.csv';
const RESPONSES_INPUT_KEY = 'input';
const RESPONSES_OUTPUT_KEY = 'output';
const USER_MESSAGE_EVENT = 'user-message';
const BOT_MESSAGE_EVENT = 'bot-message';
const BOT_TYPING_EVENT = 'bot-typing';

// Bot Natural Defaults
const DEFAULT_RESPONSE = 'Sorry, I didn\'t quite understand that.';
const RESPONSE_MATCH_THRESHOLD = 0.4;
const MIN_TYPING_S = 1;
const MAX_TYPING_S = 3;
const MIN_NATURAL_PAUSE_S = 0.5;
const MAX_NATURAL_PAUSE_S = 2;

module.exports = {
  PORT,
  RESPONSES_FILE_PATH,
  RESPONSES_INPUT_KEY,
  RESPONSES_OUTPUT_KEY,
  USER_MESSAGE_EVENT,
  BOT_MESSAGE_EVENT,
  BOT_TYPING_EVENT,
  DEFAULT_RESPONSE,
  RESPONSE_MATCH_THRESHOLD,
  MIN_TYPING_S,
  MAX_TYPING_S,
  MIN_NATURAL_PAUSE_S,
  MAX_NATURAL_PAUSE_S
};

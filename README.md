<p align="center">
  <img src="https://puu.sh/GTori/c6f7e9cae8.jpg">
  <h1 align="center"> Botty, a basic conversational bot using socket.io and nodeJS.</h1>
</p>

&nbsp;
&nbsp;
# Table of Contents 📝
- [Talking to Botty 💬](#talking-to-botty-)
- [Configuring Botty 🔧](#configuring-botty-)
  * [General](#general)
  * [Interaction](#interaction)
- [Extending Botty's Responses ✍️](#extending-bottys-responses-%EF%B8%8F)
- [Running Botty Locally 🚀](#running-botty-locally-)
- [Botty in the ☁️](#botty-in-the-%EF%B8%8F)

&nbsp;
# Talking to Botty 💬

Botty is built on top of `socket.io` by default, meaning you should use a client implementation of this to talk to it.

In JavaScript we can simply do something like:

```javascript
import io from 'socket.io-client';

const socket = io(
  'https://botty.alexgurr.com',
  { transports: ['websocket', 'polling', 'flashsocket'] }
);

socket.on('bot-message', (message) => {
  // do something
});
```

Botty is simple and cleanly written. This makes it easy to swap out `socket.io` for a general web socket or `REST` solution for example.

&nbsp;
# Configuring Botty 🔧
Botty has an easy-to-change constants file, called `constants.js` in the root of the server. Here's what you can change:

## General
*General configuration*
- `PORT`: where the Botty server should listen.
  
- `RESPONSES_FILE_PATH`: the file location of the dataset file Botty should source it's responses from. Expects a csv file with keys matching `RESPONSES_INPUT_KEY` and `RESPONSES_OUTPUT_KEY` below.

- `RESPONSES_INPUT_KEY`: the name of the input (matched phrase) column in the csv file above

- `RESPONSES_OUTPUT_KEY`: the name of the output (message) column in the csv file above

- `USER_MESSAGE_EVENT`: the event string Botty listens to for user socket messages.

- `BOT_MESSAGE_EVENT`: the event string Botty will emit for it's reponse messages.
  
- `BOT_TYPING_EVENT`: the event string Botty will emit when typing a response. If `MAX_TYPING_S` is falsy, this event will never be emitted.

## Interaction 
*Things to make Botty seem more real*

- `DEFAULT_RESPONSE`: the message Botty replies with if it finds no response matches.
  
- `RESPONSE_MATCH_THRESHOLD`: Botty response-matching tolerance. The lower this value, the looser the matches. 
  
- `MIN_TYPING_S`: the minimum value Botty should 'type' for, in seconds.

- `MAX_TYPING_S`: the maximum value Botty should 'type' for, in seconds. Set this to 0 to skip typing events.
  
- `MIN_NATURAL_PAUSE_S`: the minimum pause Botty will take before emitting it's first event, in seconds.

- `MAX_NATURAL_PAUSE_S`: the maximum pause Botty will take before emitting it's first event, in seconds.


&nbsp;
# Extending Botty's Responses ✍️
Botty has a default dataset file called `response_dataset.csv`. This is easily extendable, or you can provide your own. If you want to bring your own file, simple change the value of the `RESPONSES_FILE_PATH` constant and make sure it's in the correct format (see constants above). 

*Feel free to open a pull request to extend the default file.*

&nbsp;
# Running Botty Locally 🚀
```javascript
yarn

# Botty will be available through socket.io on the port defined through the PORT constant
yarn start
```

&nbsp;
# Botty in the ☁️
Botty is currently hosted and waiting to chat to your app at https://botty.alexgurr.com/. The server isn't free - if you'd like to help out you could <a href="https://www.buymeacoffee.com/alexgurr" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="30" width="130"></a>

Botty is currently actively used in the [Chatter ReactJS Coding Challenge](https://github.com/alexgurr/react-coding-challenges/tree/master/chatter).

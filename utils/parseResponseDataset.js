const csv = require('csv-parser');
const fs = require('fs');
const { RESPONSES_INPUT_KEY, RESPONSES_OUTPUT_KEY } = require('../constants');

module.exports = (path) => {
  return new Promise(resolve => {
    const initialResponses = [];
    const inputs = [];
    const outputs = [];

    fs.createReadStream(path)
      .pipe(csv())
      .on('data', (data) => { initialResponses.push(data); })
      .on('end', () => {
        initialResponses.forEach((response) => {
          inputs.push(response[RESPONSES_INPUT_KEY]);
          outputs.push(response[RESPONSES_OUTPUT_KEY]);
        });

        console.log(`Successfully parsed the response dataset from ${path} ✅`);

        resolve({ inputs, outputs });
      })
    });
};

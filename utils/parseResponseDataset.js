const csv = require('csv-parser');
const fs = require('fs');

module.exports = (path) => {
  return new Promise(resolve => {
    const initialResponses = [];
    const inputs = [];
    const outputs = [];

    fs.createReadStream(path)
      .pipe(csv())
      .on('data', (data) => { initialResponses.push(data); })
      .on('end', () => {
        initialResponses.forEach(({ input, output }) => {
          inputs.push(input);
          outputs.push(output);
        });

        console.log(`Successfully parsed the response dataset from ${path} ✅`);

        resolve({ inputs, outputs });
      })
    });
};

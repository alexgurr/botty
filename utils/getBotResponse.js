const stringSimilarity = require('string-similarity');

module.exports = (input, responses, defaultResponse, defaultMatchThreshold) => {
  if (!responses) { return defaultResponse; }

  const matches = stringSimilarity.findBestMatch(input, responses.inputs);
  const { bestMatch, bestMatchIndex  } = matches;

  return bestMatch.rating < defaultMatchThreshold
    ? defaultResponse
    : responses.outputs[bestMatchIndex];
};

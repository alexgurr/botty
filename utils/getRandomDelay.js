module.exports = (minimumSeconds, maximumSeconds) => {
  return (Math.floor(Math.random() * maximumSeconds) + minimumSeconds) * 1000;
};

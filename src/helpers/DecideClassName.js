const DecideClassName = (current, index, length) => {
  if (current === 0 && index === length - 1) {
    return "last";
  }
  if (current === length - 1 && index === 0) {
    return "first";
  }
  if (index === current) {
    return "current";
  }
  if (index === current - 1) {
    return "previous";
  }
  if (index === current + 1) {
    return "nextious";
  }
  console.log(current, index, length);
};

export default DecideClassName;

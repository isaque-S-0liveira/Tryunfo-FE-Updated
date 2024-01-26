const pointGenerator = (numberOfPoints: number) => {
  const arrPoints = [];
  for (let i = 0; i < numberOfPoints; i++) {
    arrPoints.push('.');
  }
  return arrPoints.join('');
};

export default pointGenerator;

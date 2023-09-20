
function calculatePearsonCorrelation(x, y) {
  if (x.length !== y.length)
    throw new Error('Массивы должны иметь одинаковую длину');

  const n = x.length;

  const meanX = x.reduce((sum, value) => sum + value, 0) / n;
  const meanY = y.reduce((sum, value) => sum + value, 0) / n;

  const sumSquaresX = x.reduce((sum, value) => sum + Math.pow(value - meanX, 2), 0);
  const sumSquaresY = y.reduce((sum, value) => sum + Math.pow(value - meanY, 2), 0);

  let sumProducts = 0;
  for (let i = 0; i < n; i++)
    sumProducts += (x[i] - meanX) * (y[i] - meanY);

  const correlation = sumProducts / Math.sqrt(sumSquaresX * sumSquaresY);

  return correlation;
}

const x = [1, 2, 3, 4, 5];
const y = [2, 4, 6, 8, 10];
const correlation = calculatePearsonCorrelation(x, y);
console.log('Корреляция:', correlation);

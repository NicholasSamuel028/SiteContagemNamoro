/**
 * @jest-environment jsdom
 */

// Setup DOM
document.body.innerHTML = `
  <p id="tempoNamoro"></p>
  <p id="tempoConhecimento"></p>
  <p id="contagemNatal"></p>
`;

const { calcularContagemRegressiva } = require('./script.js');

describe('calcularContagemRegressiva', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2025-10-01T00:00:00'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should return correct format for future dates', () => {
    const futureDate = new Date('2025-10-05T10:30:15');
    expect(calcularContagemRegressiva(futureDate)).toBe('4 dias, 10h 30min 15s');
  });

  it('should return specific message for past dates', () => {
    const pastDate = new Date('2025-09-01T00:00:00');
    expect(calcularContagemRegressiva(pastDate)).toBe('🎉 Já passou! Que lembrança linda!');
  });
});

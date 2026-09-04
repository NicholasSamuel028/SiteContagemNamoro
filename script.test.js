const { calcularContagemRegressiva } = require('./script.js');

describe('calcularContagemRegressiva', () => {
  beforeAll(() => {
    // Mock current date for consistent testing
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2025-01-01T00:00:00Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should return past message for dates in the past', () => {
    const dataPassada = new Date('2024-12-31T23:59:59Z');
    const result = calcularContagemRegressiva(dataPassada);
    expect(result).toBe("🎉 Já passou! Que lembrança linda!");
  });

  it('should return past message for exactly current date', () => {
    const dataPresente = new Date('2025-01-01T00:00:00Z');
    const result = calcularContagemRegressiva(dataPresente);
    expect(result).toBe("🎉 Já passou! Que lembrança linda!");
  });

  it('should return correct countdown for future dates', () => {
    const dataFutura = new Date('2025-01-02T01:01:01Z'); // 1 day, 1 hour, 1 min, 1 sec in future
    const result = calcularContagemRegressiva(dataFutura);
    expect(result).toBe("1 dias, 1h 1min 1s");
  });
});

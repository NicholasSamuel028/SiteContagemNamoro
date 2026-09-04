const { formatarTempo } = require('./script.js');

describe('formatarTempo', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const dataInicial = new Date('2023-01-01T00:00:00Z');

  it('should format 0 difference correctly', () => {
    jest.setSystemTime(dataInicial);
    expect(formatarTempo(dataInicial)).toBe('0 anos, 0 meses, 0 dias, 0h 0min 0s');
  });

  it('should format 1 second difference', () => {
    jest.setSystemTime(new Date(dataInicial.getTime() + 1000));
    expect(formatarTempo(dataInicial)).toBe('0 anos, 0 meses, 0 dias, 0h 0min 1s');
  });

  it('should format 1 minute difference', () => {
    jest.setSystemTime(new Date(dataInicial.getTime() + 60 * 1000));
    expect(formatarTempo(dataInicial)).toBe('0 anos, 0 meses, 0 dias, 0h 1min 0s');
  });

  it('should format 1 hour difference', () => {
    jest.setSystemTime(new Date(dataInicial.getTime() + 60 * 60 * 1000));
    expect(formatarTempo(dataInicial)).toBe('0 anos, 0 meses, 0 dias, 1h 0min 0s');
  });

  it('should format 1 day difference', () => {
    jest.setSystemTime(new Date(dataInicial.getTime() + 24 * 60 * 60 * 1000));
    expect(formatarTempo(dataInicial)).toBe('0 anos, 0 meses, 1 dias, 0h 0min 0s');
  });

  it('should format 1 month (30 days) difference', () => {
    jest.setSystemTime(new Date(dataInicial.getTime() + 30 * 24 * 60 * 60 * 1000));
    expect(formatarTempo(dataInicial)).toBe('0 anos, 1 meses, 0 dias, 0h 0min 0s');
  });

  it('should format 1 year (365 days) difference', () => {
    jest.setSystemTime(new Date(dataInicial.getTime() + 365 * 24 * 60 * 60 * 1000));
    expect(formatarTempo(dataInicial)).toBe('1 anos, 0 meses, 0 dias, 0h 0min 0s');
  });

  it('should format complex duration (2 years, 3 months, 4 days, 5h, 6min, 7s)', () => {
    // 2 years = 730 days
    // 3 months = 90 days
    // 4 days
    // total days = 824 days
    const diff = (824 * 24 * 60 * 60 * 1000) + (5 * 60 * 60 * 1000) + (6 * 60 * 1000) + 7000;
    jest.setSystemTime(new Date(dataInicial.getTime() + diff));
    expect(formatarTempo(dataInicial)).toBe('2 anos, 3 meses, 4 dias, 5h 6min 7s');
  });
});

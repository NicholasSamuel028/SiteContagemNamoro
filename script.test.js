const fs = require('fs');
const path = require('path');

describe('trocarTema', () => {
  beforeAll(() => {
    // Set up our document body
    document.body.innerHTML = `
      <p id="tempoNamoro"></p>
      <p id="tempoConhecimento"></p>
      <p id="contagemNatal"></p>
    `;

    // We need to mock timers because script.js calls setInterval
    jest.useFakeTimers();

    // Read the script file
    const scriptCode = fs.readFileSync(path.resolve(__dirname, 'script.js'), 'utf8');

    // Evaluate the script code in the current context (JSDOM environment)
    eval(scriptCode);

    // Make the function available globally for tests
    global.trocarTema = trocarTema;
  });

  afterAll(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  beforeEach(() => {
    // Reset theme before each test
    document.documentElement.removeAttribute('data-theme');
  });

  it('should set data-theme to dark when current theme is not dark', () => {
    // Call the function
    trocarTema();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('should remove data-theme when current theme is dark', () => {
    // Set initial state
    document.documentElement.setAttribute('data-theme', 'dark');

    // Call the function
    trocarTema();

    // Verify it was removed
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false);
  });
});

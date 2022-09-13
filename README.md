# frontendskolen-typescript

Kodeeksempler og praktiske oppgaver for TypeScript-modulen i frontendskolen

Nesten alle filer i src/examples har TS errors, dette er med vilje for vise hvordan TypeScript forteller deg når noe er galt. Bruk gjerne VS code.

Du kan også hovre over variabler of funksjoner for å se hvilken type de har.

## Scripts

- `npm run build` - kjører webpack med ts-loader og bygger en webpack-bundle til dist/main.js
- `npm run tsc` - kjører TypeScript compileren og outputter alle filer i src (untatt examples) i mappen dist
- `npm run dev` - kjører TypeScript compileren og eksekverer outputten i dist/index.js

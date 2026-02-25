# Tecno-Consulta

React SPA (Create React App) for looking up Brazilian CNPJ data via the ReceitaWS public API.

## Cursor Cloud specific instructions

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| React dev server | `npm start` | 3000 | CRA dev server with hot reload |

### Key commands

See `package.json` scripts. Summary:

- **Dev server**: `npm start` (port 3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (requires `.eslintrc` — see caveat below)
- **Tests**: `npm test` (no test files exist currently; use `--passWithNoTests` to avoid exit code 1)

### Caveats

- **ESLint config missing**: The repo has `eslint` + `eslint-config-airbnb` in devDependencies and a `lint` script, but no `.eslintrc*` file or `eslintConfig` in `package.json`. Running `npm run lint` fails. CRA's built-in lint (runs during `npm start` / `npm run build`) still works.
- **No test files**: Testing libraries are installed but no test files exist. Use `npx react-scripts test --watchAll=false --passWithNoTests` to run the test suite without failure.
- **External API dependency**: The app calls `https://www.receitaws.com.br/v1/cnpj/` via JSONP. Internet access is required for the CNPJ lookup feature. There is no mock backend.
- **Homepage path**: The app is configured with `"homepage": "https://renanarantes.github.io/tecno-consulta"`, so in dev mode CRA serves under `/tecno-consulta/`.

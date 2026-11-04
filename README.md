# Messagerie

A messaging front end built with Angular, as practical work for an ENI course.

## About The Project

Practical work for the ENI course "Le développement front end avec JavaScript" (Module 6 - Les bases d'Angular). The original assignments (in French) are available in the repository:

- [Messagerie](https://github.com/Dyrits/MESSAGERIE/blob/master/Module%2006%20-%20%C3%89nonc%C3%A9%20TP%2001%20-%20Messagerie.pdf)
- [Messagerie (évolution 1)](https://github.com/Dyrits/MESSAGERIE/blob/master/Module%2006%20-%20%C3%89nonc%C3%A9%20TP%2002%20-%20Messagerie%20(%C3%A9volution%201).pdf)

### Status

From the author's notes:

- Messagerie - Completed
- Messagerie (évolution 1) - Completed

## Built With

- Angular 10 / TypeScript
- Bootstrap
- HTML / CSS

## Getting Started

### Prerequisites

- Node.js
- The Angular CLI (`npm install -g @angular/cli`)

### Installation

- Install the dependencies with `npm install`.
- Start the development server with `ng serve` and navigate to `http://localhost:4200/`. The application reloads automatically when a source file changes.
- Build the project with `ng build` (artifacts in `dist/`), run the unit tests with `ng test` (Karma) and the end-to-end tests with `ng e2e` (Protractor).

## License

No license file is present in this repository.

## Contact

Dylan J. Gerrits - [GitHub](https://github.com/Dyrits)

## Targeted dependency verification

The November 3, 2026 update uses Node.js 26 LTS, patched compatible transitive packages, and a Webpack 4.47 override so production builds work without an OpenSSL legacy-provider flag. Angular remains on its old 10.x line; this is not a supported-framework migration. Other overrides patch form-data, json-schema, loader-utils, websocket-driver, and xmlhttprequest-ssl.

Fresh `npm ci`, `npm run build -- --configuration=production`, and 10 ChromeHeadless Karma tests pass. Karma now explicitly loads its Angular plugin; stale test fixtures now import the real app/forms modules, and a message submission/reset test exercises the existing services. Application source behavior is unchanged. Browser message submission and desktop/mobile pixels were checked. The existing narrow online-users column and horizontal overflow on small screens remain layout limitations, not a claim of mobile polish. Messages and users remain local in-memory data.

Local npm audit changes from 176 package findings (11 critical, 76 high) to 179 (1 critical, 74 high, 87 moderate, 17 low). Distinct advisory IDs fall from 241 to 208 with no new IDs. The remaining critical finding is an old tar dependency; many other findings remain in this legacy toolchain. Package counts can rise as advisories propagate through additional paths. No deployment or external account action was performed.

The node-forge follow-up resolves 0.10.0 to 1.4.2, removing 25 more distinct advisory IDs. The final local audit has 177 package findings (1 critical, 72 high, 87 moderate, 17 low) and 183 distinct IDs, with no new IDs versus the original baseline. Production build, 10 ChromeHeadless tests, and the legacy selfsigned consumer generating a parseable local certificate/key pass with the patched version. Certificate checks use local fixture material only.

The tar follow-up resolves both old tar copies to 7.5.22. Final local audit has 175 package findings (0 critical, 71 high, 87 moderate, 17 low), with 170 distinct advisory IDs versus 241 originally and no new IDs. This cross-major override passes the production build, 10 ChromeHeadless tests, and the actual old pacote consumer extracting a fixture archive locally. It does not establish safety for every archive or fix the remaining legacy-framework findings.

A final compatible lockfile refresh on November 4, 2026 removes another 33 distinct advisory IDs, covering patched HTTP, matching, parsing, and utility dependencies. The final local audit is 166 package findings (0 critical, 63 high, 87 moderate, 16 low), with 137 distinct advisory IDs versus 241 originally and no new IDs. Fresh install, production build, and all 10 browser tests still pass. The remaining framework/toolchain security findings are unresolved.

## Coherent Angular 21 migration (November 2026)

The framework, compiler, CLI and browser builder now use Angular 21 with TypeScript 5.9, RxJS 7 and Zone.js 0.16, tested on Node.js 26.13.0 LTS. Existing NgModule declarations stay explicitly non-standalone; forms retain their original untyped behavior. Versioned core 11-21 and CLI migration collections were reviewed and applied where relevant. Older migration helpers needed isolated legacy compiler/tooling dependencies; those are not application dependencies. Dependency-install portions from old collections were not retained over the coherent current peer set. No claim is made that every intermediate Angular version was built.

Clean npm ci, production build, ten ChromeHeadless tests, typecheck and ESLint pass (two existing unused-variable warnings). The unsupported TSLint/Codelyzer stack is replaced with TypeScript ESLint; `npm run lint` remains available. Protractor's stale starter-title test is replaced with `npm run e2e`, a Playwright Chromium test that sends two messages, checks users/messages, and verifies form reset/disabled validation. Install a Playwright Chromium browser or set CHROME_BIN to an installed Chrome executable before running it. The checked local browser uses Chrome on Linux. Old Protractor files remain historical and are no longer executed.

Local audit changes from 155 to 30 package findings, high 63 to 0 and critical 0. Distinct advisory IDs fall from 137 to 2 with no new IDs; residual Minimatch and UUID findings remain. Package totals can differ from earlier scans as advisory data changes. Scoped Glob 14.0.3 overrides are tested through builds, Karma and Playwright. This is not an all-clear.

Messages remain in memory and users are not authenticated. Existing mobile layout defects persist: the users column is too narrow and text overlaps nearby content at 430px. No mobile-ready or hosted-service claim is made, and no deployment was run. Migration sources: https://angular.dev/reference/releases and https://blog.angular.dev/the-future-is-standalone-475d7edbc706 .

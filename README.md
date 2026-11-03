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

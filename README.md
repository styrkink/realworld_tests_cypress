# realworld-tests-cypress

## SUMMARY
This is the repo of test cases for the conduit.realworld.how website, including cases for the register and login, filters and adding to favorite functionality, automated with the Cypress framework and using the Cypress cloud for reporting and CI/CD.

## REQUIREMENTS
- Node.js v20.14.10 or higher
- Cypress v13.13.1 or higher
- Faker.js v8.4.1 or higher

## Steps to Install
### 1. Clone the repository
`git clone https://github.com/your-username/your-repo.git
cd your-repo`
### 2. Install dependencies
`npm install`


## Steps to Launch
### 1. Run Cypress tests in headed mode
`npx cypress open`
### 2. Run Cypress tests in headless mode
`npm run test`
### 3. Run in different browsers
`npm run test:chromium` - for chrome
`npm run test:firefox` - for firefox


## Steps to view the report
### 1. Run with cypress cloud
`npm run test:cloud`
### 2. Go to https://cloud.cypress.io/projects/4nu6mn


# CV GENERATOR

[![CodeQL](https://github.com/prokawsar/cv-generator/actions/workflows/codeql.yml/badge.svg?branch=master)](https://github.com/prokawsar/cv-generator/actions/workflows/codeql.yml)

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/prokawsar/cv-generator/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/prokawsar/cv-generator/tree/master)

## Cloning project

```bash
# create a new project in the current directory
git clone git remote add origin https://github.com/prokawsar/cv-generator.git
# change directory to root of cv-generator
cd cv-generator
# install dependency
npm install

```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

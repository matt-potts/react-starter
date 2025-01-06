# React Starter

Note: This was borrowed from the React PWA starter from Suren Atoyan and stripped down and modified. https://github.com/suren-atoyan/react-pwa

## Included

This project includes Vite, React, Typescript, Material UI for modern UI components, i18next for translation support, normalize.css, Axios, React Router v6, Husky, prettier, and sass. A test framework is NOT included, but is recommended. choose one that fits your individual needs.

## Start

To run the project, run `npm run dev` in a terminal and navigate to `http://localhost:5173/` in the browser of your choice. The `HomePage` component is loaded (see `pages` folder), showing a simple "Hello World" message, loaded from the English translation file (see the `locales` folder within the assets folder).

To build (for deployment) run `npm run build`. The built project will end up in the `dist` folder. That content is what is put on your public-facing web server.

## Project Details

This project is a website built in [React](https://react.dev/learn) and [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html), using [Vite](https://vite.dev/guide/) as the build tool. The styling is done using [Material UI](https://mui.com/material-ui/getting-started/) and the [Sass](https://sass-lang.com/) CSS extension language. Configuration and project files mostly live where you would expect a React project to have them. We use a modified version of the [Bulletproof](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) file structure and a flavour of the Proximity Principle for organization of code. Base folders use camelCase, as do utility files and lib files, while everything else uses TitleCase/PascalCase.

Here's a brief breakdown of the files and folders in the project:

**.husky** - This folder contains files used for commit linting, etc.

**e2e** - Contains files related to end-to-end testing

**public** - This is where all publicly accessible files live, including favicon variants, etc.

**src** - This is where the project code is located. More to come below.

**.eslintrc.json** - A config file for eslint - a JavaScript/TypeScript linting tool.

**.gitignore** - This file contains file and folder paths to exclude from git when committing changes.

**.prettierrc.json** - A config file for code formatting.

**index.html** - This is the main entry point of the project when run in the production server. The body tag will contain a div with the ID of `root` as well as a script for `main.tsx`. These are the pieces that link react to our index file, and in turn, our website.

**LICENSE** - Our licensing declaration

**package-lock.json** - A compiled version of our package references, including node modules, alongside any needed companion packages.

**package.json** - A config file for node packages, etc., used in the project. It contains libraries actively used as well as helpful scripts for running the project, and more.

**README.md** - Our Readme file. Check it out [here](./README.md)!

**tsconfig.json** - A config file for TypeScript rules and linting.

**tsconfig.node.json** - A Typescript config for targeting node specific environments (typically API related).

**vite.config.ts** - A config file for Vite build details.

### The src Folder

Here's a breakdown of the `src` folder:

**assets** - A folder containing web assets for the project. Here's a breakdown:
  <ul>
    <li>font - included font files in all formats</li>
    <li>img - all images for the project</li>
    <li>locales - Translation files for all languages</li>
    <li>scss - global-level css partial files</li>
  </ul>

**components** - Global-level components, typically used in multiple locations.

**hooks** - Global-level [custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks).

**config** - Files containing configuration data for the project. Do NOT put secret keys or data here!

**pages** - Page level React components.

**providers** - Provider files. Related to React's Context API.

**routes** - Project routing files.

**theme** - React components for setting project theme and layout.

**types** - Global-level TypeScript objects.

**utils** - Global-level utility code.

**App.tsx** - The application level component, implementing providers, routes, etc.

**i18n.ts** - A config file for project translations.

**main.tsx** - The entry point for React.

**styles.scss** - The entry point for Sass, which compiles down into CSS. Partial files from the assets folder are referenced here.

**vite-env.d.ts** - A type declaration file that helps TypeScript understand Vite-specific features.













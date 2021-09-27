# Kode Neko Virgin

## What is that?

This a clean base React project to build library/dependencies. It isn't created by create-react-app building tool. Include commands to prepare de dependency and later upload it to NPM.

The motivation was the create-react-app is only conceived to create a whole web-site. When you try alternative minimum config project it could be a mess. The eject command can be the solution, however you will find a really big tedious webpack config.file. At the end, you end sooner making your own building system instead of modifiying and existing one.

## How to use it?

Simply clone the project. Modify the package.json including the project actual name, description, version, etc...

```
git clone https://github.com/kode-neko/kodeneko-webpack-react-ts.git
```

## Folder Structure

```
📦kodeneko-virgin
 ┣ 📦src
 ┃ ┣ 📂lib
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜patata.ts
 ┃ ┃ ┗ 📜styles.scss
 ┃ ┣ 📂public
 ┃ ┃ ┗ 📜index.html
 ┃ ┣ 📜Globals.d.ts
 ┃ ┗ 📜index.tsx
 ┣ 📜.babelrc
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜LICENSE
 ┣ 📜README.md
 ┣ 📜gulpfile.js
 ┣ 📜jest.config.ts
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┣ 📜webpack.dev.config.ts
 ┣ 📜webpack.prod.config.ts
 ┣ 📜yarn-error.log
 ┗ 📜yarn.lock
```

- **src:** Next to the lib folder there is de index.ts an public folder. These are usefull to create a dirty testing area. You can up a webpack dev server and see the results.
- **lib:** The library you want to distribute through NPM.
- **Globals.d.ts:** Here is defined types for import imgs, fonts or style files. This avoid a error messege when you try to import them

## How to compile and upload

- `check the package.json file`: Very important filling properly the attrs repository, version and name.
- `push your change into the repository`: Commit and pushing the code.
- `npm version minor|major|patch`: Upload the project version. You cannot upload twice the same version to npm.
- `yarn run dist`: This make the dist folder, transform the src/lib code and put it in dist.
- `npm upload`: Before all make sure that you have a NPM account. Only takes 1 minute to complete it.

## Contributions

Here a list of possible contributions

- Making a better esLint config
- Example testing
- Integrate E2E testing system like Cypress
- Put all config files inside a unique folder. Avoid getting dirty package.json

## Last words

Thanks for reading this doc or half of it :laughing: Any contribution is wellcome :)

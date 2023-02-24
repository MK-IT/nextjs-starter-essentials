<p align="center">
  <a href="https://nextjs.org">
    <img alt="NextJS" src="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67" width="60" />
  </a>
</p>
<h1 align="center">
  NextJS Starter Essentials
</h1>

[NextJS](https://nextjs.org) project starter extended with tools to help you boost your development experience.

_Help us improve by [submitting suggestions and bug reports](https://github.com/MK-IT/nextjs-starter-essentials/issues)._

## 🚀 Getting Started

1.  **Create a NextJS app.**

    Straightforward project scaffold using [degit](https://github.com/Rich-Harris/degit).

    ```
    npx degit https://github.com/MK-IT/nextjs-starter-essentials hello-world
    ```

    Or alternatively, clone this repository.

    ```
    git clone https://github.com/MK-IT/nextjs-starter-essentials hello-world
    ```

    Navigate to your new app and install its dependencies.

    ```
    # replace `yarn` with `npm` if it works better for you
    cd hello-world && yarn
    ```

    Re-initialize Git and make an initial commit skipping pre-commit hooks.

    ```
    rm -rf .git && git init && git add . && git commit -m "chore: initial commit" --no-verify
    ```    

2.  **Configure.**

    Edit the default configuration of your new app if necessary.

    * `package.json`
    * `.env`
    * `next-seo.config.js`
    * `next-sitemap.config.js`

3.  **Develop..**

    Start the NextJS app in development mode.

    ```
    # standard NextJS development mode
    yarn dev

    # Storybook development mode
    yarn storybook
    ```

    _Note: You can change the contents of `src/` in any way you like. Most pre-defined pages and components are for demo purposes only._

4.  **Open the source code and start editing!**

    Your app is now running at `http://localhost:3000`!

    Open the project in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real time!

## ⭐ Features

### Main features

- [x] 💪 **Latest TS support**
- [x] 💎 **ReactJS + NextJS**
- [x] ⚡️ **ESLint, Prettier, EditorConfig**
- [x] 📕 **Storybook**
- [x] 🧪 **Jest + React Testing Library**
- [x] 🛠 **`.env` configuration**
- [x] 📂 **Clean folder structure**
- [x] 🚦 **Pre-commit hooks**
- [x] 🤝 **Commit message linting**
- [x] 🧗🏻‍♂️ **Built-in `semver` automation**
- [x] 🐛 **VSCode configuration**
- [x] 🚀 **Production ready**

*Checkout the `feat/tailwind-css` branch for the same features but with [Tailwind CSS](https://tailwindcss.com/) included.*

### Extra features

- [x] ♻️ **[Hygen templates](https://www.hygen.io/)**
- [x] 📜 **[Filesystem linter](https://www.npmjs.com/package/@ls-lint/ls-lint)**
- [x] 🤖 **[Sitemap + Robots.txt](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap)**
- [x] 🌐 **[SEO + JSON-LD](https://github.com/garmeeh/next-seo)**
- [x] 👉 **[Aliased imports](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)**
- [x] 🏋️‍♂️ **[Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)**
- [x] ...[per-page layouts](https://nextjs.org/docs/basic-features/layouts#per-page-layouts) and more

### 🛠 `.env` configuration

You can provide environment variables to your app to customize its behavior in different environments. See the guide on [environment variables](https://nextjs.org/docs/basic-features/environment-variables).

### 🤝 Commit message linting

Keep your commit messages human- and robot-readable using a shared convention, i.e. [Commitlint](https://commitlint.js.org/#/).

[Husky's](https://github.com/typicode/husky) Git hooks make sure that your commit messages follow the convention.

_You can use [Commitlint's CLI](https://commitlint.js.org/#/guides-use-prompt?id=guide-use-prompt) for fast authoring of your commit messages._

### :🧗🏻‍♂️: Built-in `semver` automation

The package [standard-version](https://github.com/conventional-changelog/standard-version) helps you generate `CHANGELOG.md`, tag, and bump the version by following the [semver](https://semver.org) convention.

### 👉 Aliased imports (Path Aliases)

The project maps several paths already as recommended in [TypeScript path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) docs.

```bash
# path aliases can be found in `tsconfig.json`
@root --> ./*
@pages --> src/pages/*
@layouts --> src/layout/*
@components --> src/components/*
# ...and more
```

```js
// instead of...
import MyComponent from '../../../components/my-component';
// you can do...
import MyComponent from '@components/my-component';
```

### 🏋️‍♂️ Bundle Analyzer

Under the hood the feature uses [NextJS + Webpack Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) to visualize the size of your bundle's output files.

The analyzer script (`yarn analyze`) builds the project and generates static HTML reports.

You can find the generated reports under `next/analyze/`.

## 🧐 What's inside?

### 👷‍♂️ Available Scripts

```bash
# local development
yarn dev

# production build
yarn build

# serve production build
yarn start

# production build with bundle analyzer reporting
yarn analyze

# debug
yarn debug

# test
yarn test

# code generation with Hygen
yarn gen[:component | page | hook | utils | api]

# format code with Prettier
yarn format

# lint code with ESLint
yarn lint

# lint filesystem with ls-lint
yarn lint:fs

# semver, changelog, and release
yarn release

# build, test and explore UI components in isolation
yarn storybook

# build static Storybook site
yarn storybook:build
```

### 📂 Folder Structure

```bash
.
├── .husky                # VSCode workspace config
│   ├── commit-msg          # commitlint messages
│   └── pre-push
│── .storybook            # Storybook Configuration
│   ├── main.js
│   └── preview.js
├── .hygen                # Hygen templates
│   ├── nextjs              # NextJS API templates
│   └── react               # React templates
├── .vscode               # VSCode workspace config
│   ├── extensions.json
│   ├── launch.json
│   └── settings.json
├── src                   # Source code
│   ├── components          
│   ├── hooks               
│   ├── containers          
│   ├── layout              
│   ├── pages
│   ├── styles
│   ├── types
│   └── utils          
├── public                # Static assets
│   ├── images
│   ├── robots.txt
│   └── sitemap.xml
├── .commitlintrc.js
├── .editorconfig
├── .env                  # Default `dotenv` secrets
├── .eslintrc.js
├── .gitignore
├── .ls-lint.yml
├── .versionrc.js
├── CHANGELOG.md
├── jest.config.js
├── jest.setup.js
├── LICENSE
├── next-env.d.ts
├── next-seo.config.js
├── next-sitemap.config.js
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

## 💫 Deploy

[NextJS](https://nextjs.org/) apps can be easily deployed to custom Node.js servers, as Docker images, static HTML exports, and [Vercel](https://vercel.com/) (recommended).

For automated Vercel deployment and more on the topic refer to [deployment guide](https://nextjs.org/docs/deployment).

It's highly recommended to build (or even `yarn analyze`) and run your app before deployment as a local preview 

Once ready and assuming your CI/CD is connected to your repository, you can run `yarn release` to trigger a `standard-version` release and follow the prompts 🏁.

# Country Trivia

CS 362 Group Project

## Description

This is a dynamically generated trivia game using [restcountries api](https://restcountries.com/). Each question will have 4 random countries for the user to guess from. The types of questions are TBD, but we will start with flags. Each question will have a ~5 second timer. If the user runs out of time or guesses the question wrong, they will get a strike. 3 strikes and it's game over.

## Languages used

Languages used can be found under "Languages" on the github homepage. Languages used are, but not limited to,

-   Typescript
-   Javascript
-   CSS via TailwindCSS

## Environment/IDE

No specific environment is required, however [visual studio code](https://code.visualstudio.com/) is recommended and will be used by our group.

In addition to VSCode, we will be using development tools such as, but not limited to,

-   Github Actions for CI/CD
-   Prettier for standard code formatting
-   ESLint to find potential bugs and improve code quality

## Demo/Final Product

Either follow the build instructions below to demo in a local environment or go to https://www.countrytrivia.vercel.app/.

## Build/Setup Instructions

First, [clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) into your local environment.

Next, ensure [Node LTS](https://nodejs.org/en/download) is installed.

Next, inside of cloned repository, run

```bash
npm install
```

Then, run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Making changes

To modify and edit the project, first, ensure you have the latest version by running `git pull`.

Next, [create a feature branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) to make your changes. Once your changes are done, push your branch to github and then create a pull request. Once you create a pull request, it will run some status checks. If the checks pass, you will be able to merge it to the main branch.

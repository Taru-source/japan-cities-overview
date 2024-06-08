## Getting Started

First, run the development server:

```bash
npm i #if you needed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Before making a PR, make sure all tests pass.

We have two test suites.

```bash
npm run test
npm run test:e2e
```

Since we follow TDD principles, as long as these tests pass, the changes should be ready to merge.

## How we deploy

This app is hosted on Vercel, so any push or pull request to the branches will trigger an automatic deployment.

For more details, see the Vercel [docs.](https://vercel.com/docs/deployments/git/vercel-for-github#deploying-a-github-repository)

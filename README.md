# gatsby-location-state-test

#### 2019-06-15: Original Problem Statement

Passing state through @reach/router's `navigate` function works in Gatsby v2.8.8
but not in v2.9.0 (nor v2.9.4, the latest version at the time this test was
created).

#### 2019-08-23: Update 1

It was fixed coincidentally in v2.13.2
([b8e2adc6](https://github.com/gatsbyjs/gatsby/commit/b8e2adc6956ae01fa3a94c23debf010e3775d322),
specifically) for development mode (`gatsby develop`) but is still broken in
production (`gatsby build` output). Also, instead of `null`, `location.state` is
now `undefined`.

---

In this simple reproduction,
[state is passed when navigating from `/page-1` to `/page-2`](https://github.com/wKovacs64/gatsby-location-state-test/blob/42f3ebf98c770e971451455da2ed1821f4639fe9/src/pages/index.js#L18)
but `props.location.state` comes in as
[~~`null`~~ `undefined` in the `SecondPage` component](https://github.com/wKovacs64/gatsby-location-state-test/blob/42f3ebf98c770e971451455da2ed1821f4639fe9/src/pages/page-2.js#L14).

#### Run the headless Cypress tests:

```sh
yarn test
```

#### Or, run the GUI Cypress tests:

```sh
yarn test:gui:dev
yarn test:gui:prod
```

## [View results on Circle CI](https://circleci.com/gh/wKovacs64/gatsby-location-state-test/7)

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

#### 2019-11-06: Update 2

Both development and production started working somewhere between Update 1 and
Gatsby v2.17.10. Closed https://github.com/gatsbyjs/gatsby/issues/14815.

#### 2020-05-07: Update 3

One report of the issue resurfacing in Gatsby v2.19.28 (2020-03-13) and another
implicating v2.20.24. However, I was unable to reproduce it in v2.19.28 (project
would not even build due to a `Cannot read property 'activities' of undefined`
error) nor v2.20.24 (everything worked as expected). Updated the `gatsby`
package in this reproduction project to `2.20.4` to demonstrate success.

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

## [View results on Circle CI](https://circleci.com/gh/wKovacs64/gatsby-location-state-test)

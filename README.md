# gatsby-location-state-test

Passing state through @reach/router's `navigate` function works in Gatsby v2.8.8
but not in v2.9.0 (nor v2.9.4, the latest version at the time this test was
created).

In this simple reproduction,
[state is passed when navigating from `/page-1` to `/page-2`](https://github.com/wKovacs64/gatsby-location-state-test/blob/42f3ebf98c770e971451455da2ed1821f4639fe9/src/pages/index.js#L18)
but `props.location.state` comes in as
[`null` in the `SecondPage` component](https://github.com/wKovacs64/gatsby-location-state-test/blob/42f3ebf98c770e971451455da2ed1821f4639fe9/src/pages/page-2.js#L14).

#### Run the headless Cypress test:

```sh
yarn test
```

#### Or, run the GUI Cypress test:

```sh
yarn test:gui
```

## [View results on Circle CI](https://circleci.com/gh/wKovacs64/gatsby-location-state-test/3)

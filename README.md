# Adidas Interview Front-end Engineer

## Dependencies

This app was created using the latest version of `create-react-app`, which is `v5.0.0`
For creating it it requires `node version 14` or bigger.

I reccomend updating `node` directly from their site (I have had issues doing it using a package manager as `brew`).

I used `typescript` for writing the code.

It also requires `Material UI - MUI` for the UI and `axios` for sending the requests.

## How to run the app

```
npm i
npm start
```

## How to run the tests

```
npm run test
```

## Comments

- I decided to start the project using the `create-react-app` because it makes it much easier and less time consuming, it also adds most of the dependencies that I need to develop an app.
- I decided to use `axios` as it is the http client I have more experience working on, so it would be less time consuming.
- I decided to include MUI as this UI library is very easy to use, so no much time was used using their components.
- For testing I added the `msw` library because it makes it easier to test API requests and it actually makes them in a more real user experience way.
- I did not create tests for all the components and/or all possible scenarios because it requires a lot of time. For me, creating testing is what the most time consumes, but it is not a blocker for delivering my work.

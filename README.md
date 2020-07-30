## Project Title
This project demonstrates the use of GraphQL, Apollo Client with React and the Spacex API. 

## Motivation
Dedicated to learning new technologies. This has been one on my list to explore. 

## Code Style

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Details :scroll:
1. :arrow_right: We have set up our backend server in node and express app (`localhost:5000/graphql`) in `server.js`. 

2. :arrow_right: React application is setup using Webpack and Babel (that runs webpack-dev-server for the front end on `localhost:8080`)

3. :arrow_right: The Schema and GraphQL queries are created in `schema.js`

4. :arrow_right: We have used axios to fetch data using the SpaceX API ( e.g. API URL: `https://api.spacexdata.com/v3.lauches`)

5. :arrow_right: GraphiQL playground is available on `localhost:5000/graphql` 

6. :arrow_right: We have used Appolo Client to build UI in React that fetches data from GraphQL

7. :arrow_right: React components are created and wrapped inside `<ApolloProvider>` and `<ApolloClient>` is passed to the components. 

8. :arrow_right: Reach router is used to create routes for home and individual pages.

9. :arrow_right: The `graphql-tag` ( graphQl query parsing utility ) is installed and `gpl` is imported from it. The `gpl` parses GraphQL query strings into the standard GraphQL AST.

10. :arrow_right: Use `gpl` to query the data in front react app, from the schema we have create in our node application in backend.

11. :arrow_right: We have displayed all the data received as response of the query on home page( `Launches.js` ).

12. :arrow_right: When user request for a particular launch item, we query that item by its id and display it on an individual page `Launch.js` ( e.g. We redirect the user on url `http://localhost:8080/launch/1`, when the request for the launch item with id=1 )

## Installation :wrench: 
1. Clone this repo by running `git clone https://github.com/alxdelgado/graphql-react-app.git`
2. `npm install`
3. `npm run server`

## Useful Links :link:
1. [Express GraphQL github link](https://github.com/graphql/express-graphql)

2. [SpaceX-API](https://github.com/r-spacex/SpaceX-API)

3. [SpaceX-Docs](https://docs.spacexdata.com/)

4. [Apollo GraphQL](https://www.apollographql.com/docs/react/)

Appollo Client is way to use GraphQL to build client applications. It helps you build a UI that fetches data with GraphQL, and can be used with any JavaScript front-end.


## Instructions 👉
1. Graphiql is a tool that we can use as a client to make request to our server.

2. GraphQL will be available at `localhost:5000/graphql`. 


## Common Commands :computer:
1. `yarn run dev:webpack` runs webpack-dev-server for frontend on port 8080 in watch mode.

2. `yarn run server` runs node server for backend on `localhost:5000/graphql`

3. `yarn run dev` would run both front end and backend servers on their respective ports, using concurrently. 


## Built With ⚡
1. Node
2. Express
3. React
4. GraphQL
5. Apollo Client
6. Webpack
7. Babel


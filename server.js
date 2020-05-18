// require dependencies 
const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const MyGraphQLSchema = require('./schema');

// initalize express
const app = express();

// Allow cross origin request
app.use(cors());

// use graphql schema
app.use('/graphql', graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true
}));

// Port Access
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`)); 

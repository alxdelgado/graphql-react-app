// require dependencies
const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

// Launch Types
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_success: { type: GraphQLString },
        payload: { type: PayloadType }
    })
});

// Payload Types 
const PayloadType = new GraphQLObjectType({
    name: 'Payload',
    fields: () => ({
        payload_id: { type: GraphQLString },
        nationality: { type: GraphQLString },
        payload_type: { type: GraphQLString },
        payload_mass_kg: { type: GraphQLInt },
        payload_mass_lbs: { type: GraphQLInt },
        orbit: { type: GraphQLString },
    })
});

// Root Query -- this where we hit all of our endpoints; 
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // All Launches Data;
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios.get('https://api.spacexdata.com/v3/launches')
                    .then(res => res.data);
            }
        },
        // Single Launch data with ID; 
        launch: {
            type: LaunchType,
            args: {
                flight_number: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                    .then(res => res.data);
            }
        },
        // All Payload Data; 
        payloads: {
            type: new GraphQLList(PayloadType),
            resolve(parents, args) {
                return axios.get('https://api.spacexdata.com/v3/payloads')
                    .then(res => res.data);
            }

        },
        // Single payload data; 
        payload: {
            type: PayloadType,
            args: {
                payload_type: { type: GraphQLString }
            },
            resolve(parent, args) {
                return axios.get(`https://api.spacexdata.com/v3/payloads/${args.payload_type}`);
            }
        }
    }
});

// export our graphql schema;
module.exports = new GraphQLSchema({
    query: RootQuery
});


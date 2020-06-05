// import modules
import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// import components; 

// import assets; 

// Launch Query; 
const LAUNCH_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number, 
            launch_year, 
            launch_success
        }
    }
`;

class Launches extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="display-4 my-3">Launches</h1>
                <Query query={LAUNCHES_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) {
                            return <img className="launch-loader" src={Loader} alt="Loader" />
                        }
                        if (error) {
                            console.log(error);
                        }
                        console.log(data)

                    }}
                </Query>
            </React.Fragment>
        )
    }
}


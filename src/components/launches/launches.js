// import modules
import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// import components;
import LaunchItem from '../../components/launch-item/launch-item.js' 

// import assets; 
import Loading from '../../../assets/loader.gif';

// Launch Query; 
const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number,
            mission_name, 
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
                            return <img className="launch-loader" src={Loading} alt="Loader" />
                        }
                        if (error) {
                            console.log(error);
                        }
                        console.log(data)
                        return <LaunchItem data={data} />

                    }}
                </Query>
            </React.Fragment>
        )
    }
}; 

export default Launches;


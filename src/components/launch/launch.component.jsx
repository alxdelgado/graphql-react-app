import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from '@reach/router';

// import assets; 
import Loading from '../../../assets/loader.gif';

const LAUNCH_QUERY = gql`
    query LaunchQuery( $flight_number: Int! ) {
        launch( flight_number: $flight_number ) {
            flight_number
            mission_name
            launch_year
            launch_success
            payload {
                nationality
                payload_type
                payload_mass_kg
                payload_mass_lbs
                orbit 
            }
        }
    }
`;

class Launch extends React.Component {
    render() {
        const flight_number = parseInt(this.props.id)

        return (
            <React.Fragment>
                <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
                    {
                        ({ loading, error, data }) => {
                            // Show loader until request is complete; 
                            if (loading) {
                                return <img className="launch-loader" src={Loading} alt='Loader' />
                            }
                            // If error; 
                            if (error) {
                                console.log(error)
                            }
                            console.log(data)

                            const { mission_name, flight_number, launch_year, launch_success, payload } = data.launch;

                            // Display Data; 
                            return (
                                <div>
                                    {/* Mission Name */}
                                    <h1 className="text-dark">
                                        <span className="text-dark">Mission: {mission_name}</span>
                                    </h1>

                                    {/* Launch Details */}
                                </div>
                            )
                        }
                    }
                </Query>
            </React.Fragment>
        )
    }
};

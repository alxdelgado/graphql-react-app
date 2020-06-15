import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from '@reach/router';

// import styles;
import styles from './launch.styles.css';

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

export default class Launch extends React.Component {
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
                                <div className="launch-component-container">
                                    {/* Mission Name */}
                                    <h1 className="text-dark">
                                        <span className="text-dark">Mission: {mission_name}</span>
                                    </h1>

                                    {/* Launch Details */}
                                    <h4 className="mb-4">Launch Details: </h4>
                                    <ul className="list-group">
                                        <li className="list-group-item">Flight Number: {flight_number}</li>
                                        <li className="list-group-item">Launch Year: {launch_year}</li>
                                        <li className="list-group-item">
                                            Launch Successful:
                                            {
                                                launch_success
                                                    ? <span className="text-sucess">Yes</span>
                                                    : <span className="text-danger">No</span>
                                            }
                                        </li>
                                        <li className="list-group-item">Flight Number: {flight_number}</li>
                                    </ul>

                                    {/* Payload Details */}
                                    <h4 className="mt-4 mb-4">Rocket Details: </h4>
                                    <ul className="list-group">
                                        <li className="list-group-item">Nationality: {payload.nationality}</li>
                                        <li className="list-group-item">Payload Type: {payload.payload_type}</li>
                                        <li className="list-group-item">Payload Weight: {payload.payload_mass_kg}</li>
                                        <li className="list-group-item">Orbit: {payload.orbit}</li>
                                    </ul>

                                    <hr />

                                    {/* Back to Home Button */}
                                    <Link to='/' className="btn btn-secondary mb-5">Back</Link>
                                </div>
                            )
                        }
                    }
                </Query>
            </React.Fragment>
        )
    }
};

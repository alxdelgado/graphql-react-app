// import dependencies; 
import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// import components; 
import StatusIndicator from '../../components/status-indicator/status-indicator.js'
import LaunchItem from '../../components/launch-item/launch-item.js';




// import assets;
import Loading from '../../../assets/loader.gif'; 

const MISSIONS_QUERY = gql`
    query MissionsQuery {
        missions {
            mission_id, 
            mission_name
        }
    }
`;


class Missions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 className='display-4 my-3'>Launches</h1>
                <StatusIndicator />
                <Query query={MISSIONS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) {
                            return <img className='mission-loader' src={Loading} alt='Loader' />
                        }
                        if (error) {
                            console.log(error);
                        }
                        console.log(data);
                        return <LaunchItem data={data} />
                    }}
                </Query>
            </React.Fragment>
        )
    }
}; 

export default Missions;
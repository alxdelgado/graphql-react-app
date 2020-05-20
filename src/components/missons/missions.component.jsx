// import dependencies; 
import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// import components; 

// import assets; 

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
                <Query query={MISSIONS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) {
                            return <img className='mission-loader' src={Loader} alt='Loader' />
                        }
                        if (error) {
                            console.warn(error);
                        }
                        console.warn(data);
                        return <LaunchItem data={data} />
                    }}
                </Query>
            </React.Fragment>
        )
    }
}
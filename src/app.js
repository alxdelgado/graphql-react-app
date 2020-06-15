// import dependencies; 
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Router } from '@reach/router';


// import components; 
import Launches from '../src/components/launches/launches.js';
import Launch from '../src/components/launch/launch.js';


// import assets; 
import Logo from '../assets/logo.png';

// create our client server; 
const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <div className='container'>
                <div className='logo-container'>
                    <img src={Logo} alt='Logo' className='logo' />
                </div>
                <Router>
                    <Launches path='/' />
                    <Launch path='/launch/:id' />
                </Router>
            </div>
        </ApolloProvider>
    )
}; 

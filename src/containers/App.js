// import dependencies; 
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Router } from '@reach/router';


// import components; 
import Launches from '../components/launches/launches.js';
import Launch from '../components/launch/launch.js';

// import custom styles
import './App.css';

// import assets; 
import Logo from '../../assets/logo.png';

// create our client server; 
const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

export default class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div className='app__section'>
                    <div className='app__container'>
                        <img src={Logo} alt='Logo' className='app__logo' />
                        <Router>
                            <Launches path='/' />
                            <Launch path='/launch/:id' />
                        </Router>
                    </div>
                </div>
            </ApolloProvider>
        )
    }
}; 

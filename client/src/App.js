import React, { Component } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';

import ChannelsListWithData from './components/channelList';
import logo from './logo.svg';
import './App.css';

const networkInterface = createNetworkInterface({ 
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  networkInterface
});

class App extends Component {
   render() {
     return (
       <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Apollo</h2>
          </div>
          <ChannelsListWithData />
        </div>
       </ApolloProvider>
     );
   }
 }
export default App;

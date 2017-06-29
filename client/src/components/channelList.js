import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';

import AddChannelWithMutation from './addChannel';


const ChannelsList = ({ data: {loading, error, channels }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }
   return (
    <div>
      <AddChannelWithMutation />
      <ul className='Item-list'>
        { channels.map( ch => <li key={ch.id}>{ch.name}</li> ) }
      </ul>
    </div>
   );
 };

export const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`;

const ChannelsListWithData = graphql(channelsListQuery, {
  options: { pollInterval: 100 },
})(ChannelsList);

export default ChannelsListWithData;

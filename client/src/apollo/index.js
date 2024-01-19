import { ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3300/api/graphql', // Замените URL на ваш сервер GraphQL
  cache: new InMemoryCache(),
});

export default client;


import { connect } from './core/mongodb';
import ApolloServer from './gql';

(async () => {
  await connect(process.env.MONGODB_HOST);

  ApolloServer.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();

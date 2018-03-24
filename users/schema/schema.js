const graphql = require('graphql');

const {
   GraphQLObjectType,
   GraphQLString,
   GraphQLInt
} = graphql;

const UserType = new GraphQLObjectType({
   name: 'User',
   // fields within user 
   fields: {
      id: { type: GraphQLString },
      firstName: { type: GraphQLString },
      age: { type: GraphQLInt },
   }
})

const graphql = require('graphql');
const _ = require('lodash');

const {
   GraphQLObjectType,
   GraphQLString,
   GraphQLInt,
   GraphQLSchema
} = graphql;

const users = [
   { id: 23, firstName: 'Bill', age: 47},
   { id: 34, firstName: 'Alex', age: 18 },
   { id: 24, firstName: 'Amanda', age: 33},
];

const UserType = new GraphQLObjectType({
   name: 'User',
   // fields within user 
   fields: {
      id: { type: GraphQLString },
      firstName: { type: GraphQLString },
      age: { type: GraphQLInt },
   }
});

const RootQuery = new GraphQLObjectType({
   name: 'RootQueryType',
   fields: {
      user: {
         type: UserType,
         args: { id: { type: GraphQLString }},
         // return an user with a given id
         resolve() {
            return _.find(users, {id: args.id});
         }
      }
   }
});

module.exports = new GraphQLSchema({
   query: RootQuery
});

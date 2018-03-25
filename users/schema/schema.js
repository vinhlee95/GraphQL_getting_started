const graphql = require('graphql');
const axios = require('axios');

// import variables 
const {
   GraphQLObjectType,
   GraphQLString,
   GraphQLInt,
   GraphQLSchema
} = graphql;

// create user type
const UserType = new GraphQLObjectType({
   name: 'User',
   // fields within user 
   fields: {
      id: { type: GraphQLString },
      firstName: { type: GraphQLString },
      age: { type: GraphQLInt },
   }
});

// enter a particular graph of data
const RootQuery = new GraphQLObjectType({
   name: 'RootQueryType',
   fields: {
      user: {
         type: UserType,
         args: { id: { type: GraphQLString }},
         // return an user with a given id
         resolve(parentValue, args) { 
            return axios.get(`http://localhost:3000/users/${args.id}`)
            .then(response => response.data);
         }
      }
   }
});

module.exports = new GraphQLSchema({
   query: RootQuery
});

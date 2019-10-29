import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar Date

  type Todo {
    id: ID
    text: String
    deadline: Date
    updatedAt: Date
    createdAt: Date
  }

  type List {
    id: ID
    title: String
    todos: [Todo]
    createdAt: Date
    updatedAt: Date
  }  

  type Query {
    lists: [List]
    todos(list: ID!): [Todo]
  }

  type Mutation {
    createList(title: String!): List
    updateList(id: ID!, title: String!): List
    deleteList(id: ID!): Boolean

    createTodo(list: ID!, text: String!): Todo
    updateTodo(id: ID!, text: String!): Todo
    deleteTodo(id: ID!): Boolean
  }  
`;

export default typeDefs;

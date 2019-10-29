import Todo from '../models/Todo';
import List from '../models/List';

const resolvers = {
  Todo: {
    id: ({ _id }) => _id
  },
  List: {
    id: ({ _id }) => _id
  },
  Query: {
    lists: async () => {
      return List.find().lean();
    },
    todos: async (_, { list }) => {
      return Todo.find({ list }).lean();
    }
  },
  Mutation: {
    createList: async (_, { title }) => {
      const newList = new List({ title });

      return newList.save();
    },
    updateList: async (_, { id, title }) => {
      return List.findOneAndUpdate({ _id: id }, { $set: { title } }).lean();
    },
    deleteList: async (_, { id }) => {
      await List.findOneAndRemove({ _id: id });

      return true;
    },
    createTodo: async (_, { list, text }) => {
      const newTodo = new Todo({ list, text });

      return newTodo.save();
    },
    updateTodo: async (_, { id, text }) => {
      return Todo.findOneAndUpdate({ _id: id }, { $set: { text } }).lean();
    },
    deleteTodo: async (_, { id }) => {
      await Todo.findOneAndRemove({ _id: id });

      return true;
    }
  }
};

export default resolvers;
